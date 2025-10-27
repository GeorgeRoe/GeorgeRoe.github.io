<template>
  <div>
    <div 
      class="relative -rotate-3 w-full mx-auto"
    >
      <div class="w-1/4 h-full absolute bg-gradient-to-r dark:from-black from-white from-10% z-10 -left-1" />
      <div class="w-1/4 h-full absolute bg-gradient-to-l dark:from-black from-white from-10% z-10 -right-1" />
      <h1 class="italic font-extrabold text-center w-full overflow-hidden">
        <div class="whitespace-nowrap inline-block text-7xl pan-right">
          <span v-for="i in 10" class="inline-block mx-1">GEORGE</span>
        </div>
        <div class="whitespace-nowrap inline-block text-8xl pan-left">
          <span v-for="i in 10" class="inline-block mx-1 text-blue-500">ROE</span>
        </div>
      </h1>
    </div>
    <p
      class="text-center text-xl font-extrabold my-3 drop-shadow-lg shadow-white"
    >
      Software Engineer.
    </p>
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