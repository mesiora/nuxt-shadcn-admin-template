<script setup lang="ts">
defineProps<{
  label?: string
}>()
</script>

<template>
  <div class="relative">
    <div class="absolute inset-0 flex items-center">
      <span class="w-full border-t" />
    </div>
    <div v-if="label" class="relative flex justify-center text-xs uppercase">
      <span class="bg-background px-2 text-muted-foreground">
        {{ label }}
      </span>
    </div>
  </div>
</template>
