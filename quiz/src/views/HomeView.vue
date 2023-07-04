<template>
  <div class="w-full h-full bg-black">
    <header class="max-w-[1000px] mx-auto h-[100px]">
      <div class="mb-4 pt-8 flex items-center justify-between px-5">
        <h1 class="font-bold text-3xl text-[#FAD2E1] font-roboto">Quizes</h1>
        <!-- Input field for search with custom styles and two-way binding -->
        <input v-model="search" class="border-none bg-[#F0EFEB] p-2 rounded-xl" type="text" placeholder="Search" />
      </div>
    </header>
  </div>

  <div class="h-screen bg-[#F0EFEB] pt-6 flex flex-col">
    <div class="max-w-[1000px] px-4 pt-6 mb-6 md:mb-2 w-full mx-auto flex">
      <p class="font-roboto text-[40px] font-bold mb-3">Pick your Quiz</p>
    </div>
    
    <div class="flex pb-20 px-7 md:px-2 flex-wrap gap-5 max-w-[1000px] mx-auto w-full">
      <TransitionGroup name="card" appear @before-enter="beforeEnter" @enter="enter">
        <!-- Loop over quizList and render Card components -->
        <Card v-for="(quiz, index) in quizList" :key="quiz.id" :quiz="quiz" :data-index="index" />
      </TransitionGroup>
    </div>
  </div>
</template>

<script setup>
  import Card from '../components/Card.vue';
  import quiz from "../data/quiz.json"
  import { ref, watch } from "vue"
  import gsap from "gsap"

  // Creating reactive variables using ref()
  const quizList = ref(quiz);
  const search = ref("");

  // Watch for changes in the search variable and filter quizList accordingly
  watch(search, () => {
    quizList.value = quiz.filter((quiz) => quiz.name.toLowerCase().includes(search.value.toLowerCase()))
  });

  // Function called before element enter transition
  const beforeEnter = (el) => {
    el.style.opacity = 0
    el.style.transform = 'translateY(100px)'
  }

  // Function called during element enter transition
  const enter = (el) => {
    gsap.to(el, {
      y: 0,
      opacity: 1,
      duration: 0.4,
      delay: el.dataset.index * 0.4
    })
  }

</script>
