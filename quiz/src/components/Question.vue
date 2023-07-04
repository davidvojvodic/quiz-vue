<script setup>
import { RouterLink } from 'vue-router';
    const {question} = defineProps(['question'])

    const emit = defineEmits(['answerSelected'])

    const selectedAnswer = (isCorrect) => {
        emit('answerSelected', isCorrect)
    }
</script>

<template>
    <div class="pt-10 h-screen max-h-full max-w-[1000px] mx-auto">
        <div class="mb-2 h-[100px]">
              <h2 class="text-[30px] font-bold">{{ question.text }}</h2>
       </div>
            <div class="flex flex-col gap-8">
            <div @click="selectedAnswer(option.isCorrect)" v-for="option in question.options" :key="option.id" class="group flex cursor-pointer ">
                <p class="bg-black text-white w-16 h-16 flex items-center justify-center text-[40px] group-hover:text-white/80 group-hover:bg-black/80 transition-all ease-in-out duration-300">{{ option.label }}</p>
                <div class="flex bg-[#F0EFEB] border-[2px] border-black w-full h-16 cursor-pointer group-hover:bg-white group-hover:border-black/80 transition-all ease-in-out duration-300">
                    <p class=" w-full flex items-center px-7 text-[20px]">{{ option.text }}</p>
                </div>
            </div>
            <RouterLink to="/" class="text-xl font-semibold cursor-pointer p-3 bg-slate-200 text-center">Go back to Quiz list</RouterLink>
            </div>
       </div>
</template>