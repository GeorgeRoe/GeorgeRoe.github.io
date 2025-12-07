<template>
  <div 
    class="relative -translate-x-[1rem] -rotate-3 w-[calc(100%+2rem)] mx-auto"
  >
    <div
      class="w-1/4 h-full absolute z-10 -left-1 bg-gradient-to-r from-background-0 from-10% to-transparent"
    />
    <div
      class="w-1/4 h-full absolute z-10 -right-1 bg-gradient-to-l from-background-0 from-10% to-transparent"
    />
    <h1 class="italic font-extrabold text-center w-full overflow-hidden">
      <div class="whitespace-nowrap inline-block text-7xl pan-right">
        <span v-for="i in 10" class="inline-block mx-1">GEORGE</span>
      </div>
      <div class="whitespace-nowrap inline-block text-8xl pan-left">
        <span v-for="i in 10" class="inline-block mx-1 text-blue">ROE</span>
      </div>
    </h1>
  </div>
</template>

<style scoped>
.pan-right {
  animation-name: marquee;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-duration: 10s;
  animation-direction: reverse;
}

.pan-left {
  animation-name: marquee;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-duration: 10s;
}

@keyframes marquee {
  0% {
    transform: translate3d(0, 0, 0);
  }

  100% {
    transform: translate3d(-10%, 0, 0);
  }
}
</style>