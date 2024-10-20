<template>
  <div class="h-full w-full">
    <div class="h-screen w-full relative overflow-hidden">
      <div class="flex justify-center items-center w-full h-full">
        <h1 class="absolute top-24 text-3xl font-cinzel font-semibold opening">Presented By</h1>
        <div class="absolute mb-40 text-center title opacity-0 invisible">
          <h1 class="z-30 text-5xl font-lora font-semibold leading-none">Derren Amadeo</h1>
          <h1 class="z-30 text-3xl font-cinzel font-semibold mb-6 leading-none">Web Developer</h1>
          <div class="flex items-center gap-3 justify-center">
            <button class="bg-slate-950 rounded-full h-10 px-6 font-lora text-white">
              <p>About Me</p>
            </button>
            <button class="bg-slate-950 rounded-full h-10 px-6 font-lora text-white">
              <p>Contact Me</p>
            </button>
          </div>
        </div>
        <div class="">
          <CardHero />
        </div>
        <img class="absolute bottom-0 w-[440px] ms-14" src="../../public/img/hero22.png" alt="" />
        <img class="absolute bottom-64 grayscale z-50 hat w-[260px]" src="../../public/img/hero-1.png" alt="" />
      </div>
    </div>
    <div class="flex flex-col items-center h-[1200vh]">
      <p>halo</p>
      <p>halo</p>
      <p>halo</p>
      <p>halo</p>
      <p>halo</p>
      <p>halo</p>
      <p>halo</p>
      <p>halo</p>
      <p>halo</p>
      <p>halo</p>
      <p>halo</p>
      <p>halo</p>
      <p>halo</p>
      <p>halo</p>
      <p>halo</p>
      <p>halo</p>
      <p>halo</p>
      <p>halo</p>
      <p>halo</p>
    </div>
  </div>
</template>

<script setup>
import CardHero from "@/components/ui/CardHero.vue";
</script>

<style>
.hat {
  animation: hat linear;
  animation-duration: 15s;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
}

.opening {
  animation: opening linear;
  animation-duration: 1s;
  animation-delay: 8s;
  animation-fill-mode: forwards;
}

.title {
  animation: title linear;
  animation-duration: 5s;
  animation-delay: 10s;
  animation-fill-mode: forwards;
}

.nav {
  animation: logo linear;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-delay: 13s;
}

@keyframes logo {
  from {
    opacity: 0%;
  }
  to {
    opacity: 100%;
    border-bottom: 1px solid #020617;
    visibility: visible;
  }
}

@keyframes hat {
  10%,
  30% {
    rotate: 5deg;
    bottom: 16rem;
  }
  20%,
  40% {
    rotate: -5deg;
  }
  100% {
    bottom: 120%;
    rotate: 70deg;
  }
}

@keyframes opening {
  from {
    opacity: 100%;
  }
  to {
    opacity: 0%;
  }
}

@keyframes title {
  from {
    opacity: 0%;
  }
  to {
    opacity: 100%;
    visibility: visible;
  }
}
</style>
