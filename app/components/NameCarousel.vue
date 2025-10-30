<script setup lang="ts">
import { Palette } from '~/types/palette';

const { theme } = useTheme()

function gradient(direction: 'right' | 'left') {
  return computed(() => `linear-gradient(to ${direction}, ${theme(Palette.Bg0)} 10%, transparent 100%)`)
}
</script>

<template>
  <div>
    <div 
      class="relative -rotate-3 w-full mx-auto"
    >
      <div
        class="w-1/4 h-full absolute z-10 -left-1"
        :style="{ background: gradient('right').value }"
      />
      <div
        class="w-1/4 h-full absolute z-10 -right-1"
        :style="{ background: gradient('left').value }"
      />
      <h1 class="italic font-extrabold text-center w-full overflow-hidden">
        <div class="whitespace-nowrap inline-block text-7xl pan-right">
          <span v-for="i in 10" class="inline-block mx-1">GEORGE</span>
        </div>
        <div class="whitespace-nowrap inline-block text-8xl pan-left">
          <span v-for="i in 10" class="inline-block mx-1" :style="{ color: theme(Palette.Blue) }">ROE</span>
        </div>
      </h1>
    </div>
    <p
      class="text-center text-xl font-extrabold my-3"
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