<template>
    <header class="mb-4 pt-8 flex items-center justify-between px-5 max-w-[1000px] mx-auto">
        <h4 class="text-3xl font-roboto text-[#FAD2E1]">{{ questionStatus }} Completed</h4>
        <div class="border-[3px] rounded-xl w-[300px] h-[20px] border-[#F0EFEB]">
        <div class="h-full bg-[#F0EFEB]" :style="{ width: barPercentage}"></div>
  </div>
    </header>
</template>

<script setup>
    const { questionStatus, barPercentage } = defineProps(['questionStatus', 'barPercentage'])
</script>
