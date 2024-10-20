<template>
  <div v-for="quote in quotes" :key="quote.id" :class="quote.position" class="absolute group hero-item hover:bg-white hover:border hover:shadow-md rounded-2xl top-[120%] z-20" :style="{ '--id': quote.id }">
    <div class="relative flex flex-col items-center group-hover:h-auto group-hover:py-3 group-hover:px-3 text-center w-[140px] h-[130px]">
      <img class="absolute group-hover:opacity-0 z-20 -top-2 w-[140px] h-[150px]" src="../../../public/img/hero/frame.png" alt="" />
      <img class="object-cover z-10 group-hover:h-[60px] group-hover:-mt-8 group-hover:w-[60px] group-hover:rounded-full w-[100px] h-full left-0" :src="quote.img" alt="" />
      <div class="group-hover:block group-hover:opacity-100 group-hover:z-30 opacity-0 hidden">
        <p class="mt-1 font-lora font-bold">{{ quote.name }}</p>
        <p class="text-sm text-gray-500 mb-1 font-play font-semibold mt-1">{{ quote.quote }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watchEffect } from "vue";
import { quotes } from "../../../data";
</script>

<style scoped>
.hero-item {
  animation: hero-item linear;
  animation-duration: 15s;
  animation-iteration-count: infinite;
  animation-delay: calc((40s / 4) * (var(--id) - 1));
}

.hero-item:hover {
  animation-play-state: paused;
}

@keyframes hero-item {
  10% {
    top: 100%;
  }
  100% {
    top: calc(150px * -1);
  }
}
</style>
