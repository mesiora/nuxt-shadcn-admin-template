<script setup lang="ts">
import { InboxIcon } from 'lucide-vue-next'

defineProps<{
  size?: number
}>()
</script>

<template>
  <div class="space-y-2 text-center">
    <InboxIcon :size="size || 64" class="mx-auto text-muted-foreground" />
    <p class="text-xs text-muted-foreground">No data available</p>
  </div>
</template>
