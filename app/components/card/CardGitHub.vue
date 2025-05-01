<script setup lang="ts">
import {
  ChevronDownIcon,
  CircleIcon,
  PlusIcon,
  StarIcon,
} from 'lucide-vue-next'
</script>

<template>
  <UiCard>
    <UiCardHeader
      class="grid grid-cols-[minmax(0,1fr)_110px] items-start gap-4 space-y-0"
    >
      <div class="space-y-1">
        <UiCardTitle>shadcn/ui</UiCardTitle>
        <UiCardDescription>
          Beautifully designed components built with Radix UI and Tailwind CSS.
        </UiCardDescription>
      </div>
      <div
        class="flex items-center space-x-1 rounded-md bg-secondary text-secondary-foreground"
      >
        <UiButton variant="secondary" class="px-3 shadow-none">
          <StarIcon class="mr-2 h-4 w-4" />
          Star
        </UiButton>
        <UiSeparator orientation="vertical" class="h-5" />
        <UiDropdownMenu>
          <UiDropdownMenuTrigger as-child>
            <UiButton variant="secondary" class="px-2 shadow-none">
              <ChevronDownIcon class="h-4 w-4 text-secondary-foreground" />
            </UiButton>
          </UiDropdownMenuTrigger>
          <UiDropdownMenuContent
            align="end"
            :align-offset="-5"
            class="w-[200px]"
          >
            <UiDropdownMenuLabel>Suggested Lists</UiDropdownMenuLabel>
            <UiDropdownMenuSeparator />
            <UiDropdownMenuCheckboxItem checked>
              Future Ideas
            </UiDropdownMenuCheckboxItem>
            <UiDropdownMenuCheckboxItem>My Stack</UiDropdownMenuCheckboxItem>
            <UiDropdownMenuCheckboxItem>Inspiration</UiDropdownMenuCheckboxItem>
            <UiDropdownMenuSeparator />
            <UiDropdownMenuItem>
              <PlusIcon class="mr-2 h-4 w-4" /> Create List
            </UiDropdownMenuItem>
          </UiDropdownMenuContent>
        </UiDropdownMenu>
      </div>
    </UiCardHeader>
    <UiCardContent>
      <div class="flex space-x-4 text-sm text-muted-foreground">
        <div class="flex items-center">
          <CircleIcon class="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
          TypeScript
        </div>
        <div class="flex items-center">
          <StarIcon class="mr-1 h-3 w-3" />
          20k
        </div>
        <div>Updated April 2023</div>
      </div>
    </UiCardContent>
  </UiCard>
</template>
