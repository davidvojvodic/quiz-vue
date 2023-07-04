<template>
    <div @click="navigateToQuiz" class="w-[310px] overflow-hidden bg-white rounded-xl shadow-xl mb-9 cursor-pointer transition-all ease-in-out duration-300 hover:bg-black/10 hover:grayscale hover:shadow-[2px_2px_30px]">
        <img class="w-full h-[200px]" :src="quiz.img" :alt="quiz.img" />
        <div class="p-3">
          <h2 class="font-bold">{{ quiz.name }}</h2>
          <p>{{ quiz.questions.length }} Questions</p>
        </div>
      </div>
</template>

<script setup>
import { useRouter} from "vue-router";

const router = useRouter();
const {quiz} = defineProps(['quiz']);

const navigateToQuiz = () => {
  router.push(`/quiz/${quiz.id}`);
}



</script>
