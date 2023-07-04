<template>
    <div class="w-full h-screen">
      <div class="bg-black mx-auto h-[100px]">
        <!-- QuizHeader component with props -->
        <QuizHeader :questionStatus="questionStatus" :barPercentage="barPercentage" />
      </div>
      
      <div class="bg-[#F0EFEB] max-h-screen h-full">
        <!-- TransitionGroup for fade animations -->
        <TransitionGroup name="fade" appear @before-enter="beforeEnter" @enter="enter">
          <!-- Conditionally render Question or Result component based on showResults flag -->
          <Question v-if="!showResults" :question="quizes.questions[currentQuestionIndex]" @answerSelected="onOptionSelected" />
          <Result v-else :quizQuestionLength="quizes.questions.length" :numberOfCorrectAnwsers="numberOfCorrectAnwsers" />
        </TransitionGroup>
      </div>
    </div>
</template>
  
<script setup>
    import Question from "../components/Question.vue"
    import QuizHeader from "../components/QuizHeader.vue"
    import Result from "../components/Result.vue"
    import { useRoute } from "vue-router";
    import { ref, computed } from "vue";
    import quiz from "../data/quiz.json"
    import gsap from "gsap"
  
     // Accessing the current route and quizId parameter from the route -->
    const route = useRoute();
    const quizId = parseInt(route.params.id);
  
    // Finding the quiz data based on the quizId -->
    const quizes = quiz.find(q => q.id === quizId)
  
     // Reactive variables to keep track of the current question index and number of correct answers -->
    const currentQuestionIndex = ref(0);
    const numberOfCorrectAnwsers = ref(0);
    const showResults = ref(false);
  
     // Computed properties for question status and progress bar percentage -->
    const questionStatus = computed(() => `${currentQuestionIndex.value}/${quizes.questions.length}`)
    const barPercentage = computed(() => `${(currentQuestionIndex.value) / quizes.questions.length * 100}%`)
  
     // Method triggered when an option is selected -->
    const onOptionSelected = (isCorrect) => {
      if (isCorrect) {
        numberOfCorrectAnwsers.value++
      }
      if (currentQuestionIndex.value === quizes.questions.length - 1) {
        showResults.value = true;
      }
  
      currentQuestionIndex.value++
      console.log(numberOfCorrectAnwsers.value)
    }
  
    // Animation methods -->
  
    const beforeEnter = (el) => {
      el.style.opacity = 0
      el.style.transform = 'translateY(100px)'
    }
  
    const enter = (el) => {
      gsap.to(el, {
        y: 0,
        opacity: 1,
        duration: 0.4,
      })
    }
</script>
  