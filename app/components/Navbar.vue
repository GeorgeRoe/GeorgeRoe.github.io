<script setup lang="ts">
import { Palette } from '~/types/palette'
import { themes, ThemeName } from '~/data/theme'

const { setTheme } = useThemeControl()

const showColorModal = ref(false)

function clickThemeButton(name: ThemeName) {
  setTheme(name)
  showColorModal.value = false
}
</script>

<template>
  <div>
    <nav class="flex items-center justify-between py-1 px-2 border-b border-background-1">
      <NuxtLink to="/" class="font-extrabold text-lg">
        <span>G</span>
        <span class="text-blue">ROE</span>
      </NuxtLink>
      <IconStyle class="h-6 cursor-pointer fill-text" @click="showColorModal = true" />
    </nav>
    <Modal v-model="showColorModal">
      <div class="flex flex-col gap-1">
        <button
          v-for="(theme, name) in themes"
          :key="name"
          class="px-2 py-1 font-bold border rounded flex items-center gap-2 justify-between bg-background-0 text-text border-background-1"
          :style="{
            backgroundColor: theme[Palette.Bg0],
            color: theme[Palette.Text],
            borderColor: theme[Palette.Bg1],
          }"
          @click="clickThemeButton(name)"
        >
          <span>{{ name }}</span>
          <div class="flex gap-1">
            <div
              v-for="color in [Palette.Red, Palette.Blue]"
              class="h-3 aspect-square rounded-full"
              :style="{ backgroundColor: theme[color] }"
            />
          </div>
        </button>
      </div>
    </Modal>
  </div>
</template>