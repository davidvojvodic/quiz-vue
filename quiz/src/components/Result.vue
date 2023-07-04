<script setup>
    import { RouterLink } from 'vue-router';

    const {quizQuestionLength, numberOfCorrectAnwsers} = defineProps(['quizQuestionLength', 'numberOfCorrectAnwsers'])
</script>


<template>
    <div class="text-center max-h-full py-28">
        <p class="text-[25px]">Your Results...</p>
        <h1 class="text-[80px]">{{numberOfCorrectAnwsers}}/{{ quizQuestionLength }}</h1>

        <div class="mt-8">
        <RouterLink to="/" class="text-xl font-semibold cursor-pointer p-3 bg-slate-200 text-center">Go Back</RouterLink>
    </div>
    </div>
</template>