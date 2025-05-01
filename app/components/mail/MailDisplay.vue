<script lang="ts" setup>
import type { Mail } from '#shared/types/mail'

import { addDays, addHours, format, nextSaturday } from 'date-fns'
import {
  ArchiveIcon,
  ArchiveXIcon,
  ClockIcon,
  ForwardIcon,
  MoreVerticalIcon,
  ReplyIcon,
  ReplyAllIcon,
  Trash2Icon,
} from 'lucide-vue-next'

interface MailDisplayProps {
  mail: Mail | undefined
}

const props = defineProps<MailDisplayProps>()

const mailFallbackName = computed(() => {
  return props.mail?.name
    .split(' ')
    .map((chunk) => chunk[0])
    .join('')
})

const today = new Date()
</script>

<template>
  <div class="flex h-full flex-col">
    <div class="flex items-center p-2">
      <div class="flex items-center gap-2">
        <UiTooltip>
          <UiTooltipTrigger as-child>
            <UiButton variant="ghost" size="icon" :disabled="!mail">
              <ArchiveIcon class="size-4" />
              <span class="sr-only">Archive</span>
            </UiButton>
          </UiTooltipTrigger>
          <UiTooltipContent>Archive</UiTooltipContent>
        </UiTooltip>
        <UiTooltip>
          <UiTooltipTrigger as-child>
            <UiButton variant="ghost" size="icon" :disabled="!mail">
              <ArchiveXIcon class="size-4" />
              <span class="sr-only">Move to junk</span>
            </UiButton>
          </UiTooltipTrigger>
          <UiTooltipContent>Move to junk</UiTooltipContent>
        </UiTooltip>
        <UiTooltip>
          <UiTooltipTrigger as-child>
            <UiButton variant="ghost" size="icon" :disabled="!mail">
              <Trash2Icon class="size-4" />
              <span class="sr-only">Move to trash</span>
            </UiButton>
          </UiTooltipTrigger>
          <UiTooltipContent>Move to trash</UiTooltipContent>
        </UiTooltip>
        <UiSeparator orientation="vertical" class="mx-1 h-6" />
        <UiTooltip>
          <UiPopover>
            <UiPopoverTrigger as-child>
              <UiTooltipTrigger as-child>
                <UiButton variant="ghost" size="icon" :disabled="!mail">
                  <ClockIcon class="size-4" />
                  <span class="sr-only">Snooze</span>
                </UiButton>
              </UiTooltipTrigger>
            </UiPopoverTrigger>
            <UiPopoverContent class="flex w-[535px] p-0">
              <div class="flex flex-col gap-2 border-r px-2 py-4">
                <div class="px-4 text-sm font-medium">Snooze until</div>
                <div class="grid min-w-[250px] gap-1">
                  <UiButton variant="ghost" class="justify-start font-normal">
                    Later today
                    <span class="ml-auto text-muted-foreground">
                      {{ format(addHours(today, 4), 'E, h:m b') }}
                    </span>
                  </UiButton>
                  <UiButton variant="ghost" class="justify-start font-normal">
                    Tomorrow
                    <span class="ml-auto text-muted-foreground">
                      {{ format(addDays(today, 1), 'E, h:m b') }}
                    </span>
                  </UiButton>
                  <UiButton variant="ghost" class="justify-start font-normal">
                    This weekend
                    <span class="ml-auto text-muted-foreground">
                      {{ format(nextSaturday(today), 'E, h:m b') }}
                    </span>
                  </UiButton>
                  <UiButton variant="ghost" class="justify-start font-normal">
                    Next week
                    <span class="ml-auto text-muted-foreground">
                      {{ format(addDays(today, 7), 'E, h:m b') }}
                    </span>
                  </UiButton>
                </div>
              </div>
              <div class="p-2">
                <UiCalendar />
              </div>
            </UiPopoverContent>
          </UiPopover>
          <UiTooltipContent>Snooze</UiTooltipContent>
        </UiTooltip>
      </div>
      <div class="ml-auto flex items-center gap-2">
        <UiTooltip>
          <UiTooltipTrigger as-child>
            <UiButton variant="ghost" size="icon" :disabled="!mail">
              <ReplyIcon class="size-4" />
              <span class="sr-only">Reply</span>
            </UiButton>
          </UiTooltipTrigger>
          <UiTooltipContent>Reply</UiTooltipContent>
        </UiTooltip>
        <UiTooltip>
          <UiTooltipTrigger as-child>
            <UiButton variant="ghost" size="icon" :disabled="!mail">
              <ReplyAllIcon class="size-4" />
              <span class="sr-only">Reply all</span>
            </UiButton>
          </UiTooltipTrigger>
          <UiTooltipContent>Reply all</UiTooltipContent>
        </UiTooltip>
        <UiTooltip>
          <UiTooltipTrigger as-child>
            <UiButton variant="ghost" size="icon" :disabled="!mail">
              <ForwardIcon class="size-4" />
              <span class="sr-only">Forward</span>
            </UiButton>
          </UiTooltipTrigger>
          <UiTooltipContent>Forward</UiTooltipContent>
        </UiTooltip>
      </div>
      <UiSeparator orientation="vertical" class="mx-2 h-6" />
      <UiDropdownMenu>
        <UiDropdownMenuTrigger as-child>
          <UiButton variant="ghost" size="icon" :disabled="!mail">
            <MoreVerticalIcon class="size-4" />
            <span class="sr-only">More</span>
          </UiButton>
        </UiDropdownMenuTrigger>
        <UiDropdownMenuContent align="end">
          <UiDropdownMenuItem>Mark as unread</UiDropdownMenuItem>
          <UiDropdownMenuItem>Star thread</UiDropdownMenuItem>
          <UiDropdownMenuItem>Add label</UiDropdownMenuItem>
          <UiDropdownMenuItem>Mute thread</UiDropdownMenuItem>
        </UiDropdownMenuContent>
      </UiDropdownMenu>
    </div>
    <UiSeparator />
    <div v-if="mail" class="flex flex-1 flex-col">
      <div class="flex items-start p-4">
        <div class="flex items-start gap-4 text-sm">
          <UiAvatar>
            <UiAvatarFallback>
              {{ mailFallbackName }}
            </UiAvatarFallback>
          </UiAvatar>
          <div class="grid gap-1">
            <div class="font-semibold">
              {{ mail.name }}
            </div>
            <div class="line-clamp-1 text-xs">
              {{ mail.subject }}
            </div>
            <div class="line-clamp-1 text-xs">
              <span class="font-medium">Reply-To:</span> {{ mail.email }}
            </div>
          </div>
        </div>
        <div v-if="mail.date" class="ml-auto text-xs text-muted-foreground">
          {{ format(new Date(mail.date), 'PPpp') }}
        </div>
      </div>
      <UiSeparator />
      <div class="flex-1 whitespace-pre-wrap p-4 text-sm">
        {{ mail.text }}
      </div>
      <UiSeparator class="mt-auto" />
      <div class="p-4">
        <form>
          <div class="grid gap-4">
            <UiTextarea class="p-4" :placeholder="`Reply ${mail.name}...`" />
            <div class="flex items-center">
              <UiLabel
                html-for="mute"
                class="flex items-center gap-2 text-xs font-normal"
              >
                <UiSwitch id="mute" aria-label="Mute thread" /> Mute this thread
              </UiLabel>
              <UiButton type="button" size="sm" class="ml-auto">
                Send
              </UiButton>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div v-else class="p-8 text-center text-muted-foreground">
      No message selected
    </div>
  </div>
</template>
