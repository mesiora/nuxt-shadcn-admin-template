<script setup lang="ts">
import { BellIcon, EyeClosedIcon, PersonStandingIcon } from 'lucide-vue-next'
</script>

<template>
  <UiCard>
    <UiCardHeader class="pb-3">
      <UiCardTitle>Notifications</UiCardTitle>
      <UiCardDescription>
        Choose what you want to be notified about.
      </UiCardDescription>
    </UiCardHeader>
    <UiCardContent class="grid gap-1">
      <div
        class="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground"
      >
        <BellIcon class="mt-px h-5 w-5" />
        <div class="space-y-1">
          <p class="text-sm font-medium leading-none">Everything</p>
          <p class="text-sm text-muted-foreground">
            Email digest, mentions & all activity.
          </p>
        </div>
      </div>
      <div
        class="-mx-2 flex items-start space-x-4 rounded-md bg-accent p-2 text-accent-foreground transition-all"
      >
        <PersonStandingIcon class="mt-px h-5 w-5" />
        <div class="space-y-1">
          <p class="text-sm font-medium leading-none">Available</p>
          <p class="text-sm text-muted-foreground">
            Only mentions and comments.
          </p>
        </div>
      </div>
      <div
        class="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground"
      >
        <EyeClosedIcon class="mt-px h-5 w-5" />
        <div class="space-y-1">
          <p class="text-sm font-medium leading-none">Ignoring</p>
          <p class="text-sm text-muted-foreground">
            Turn off all notifications.
          </p>
        </div>
      </div>
    </UiCardContent>
  </UiCard>
</template>
