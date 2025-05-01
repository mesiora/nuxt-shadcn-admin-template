<script setup lang="ts">
import { MoonStarIcon, SunIcon } from 'lucide-vue-next'

const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  },
})
</script>

<template>
  <UiButton variant="ghost" size="icon" @click="isDark = !isDark">
    <MoonStarIcon v-if="isDark" class="h-7 w-7" />
    <SunIcon v-else class="h-7 w-7" />
    <span class="sr-only">Toggle Color Mode</span>
  </UiButton>
</template>
