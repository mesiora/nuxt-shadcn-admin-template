<script setup lang="ts">
import { ChevronDownIcon } from 'lucide-vue-next'

const sofiaRole = ref('Owner')
const jacksonRole = ref('Member')
</script>

<template>
  <UiCard>
    <UiCardHeader>
      <UiCardTitle>Team Members</UiCardTitle>
      <UiCardDescription>
        Invite your team members to collaborate.
      </UiCardDescription>
    </UiCardHeader>
    <UiCardContent class="grid gap-6">
      <div class="flex items-center justify-between space-x-4">
        <div class="flex items-center space-x-4">
          <UiAvatar>
            <UiAvatarImage src="/avatars/01.png" />
            <UiAvatarFallback>OM</UiAvatarFallback>
          </UiAvatar>
          <div>
            <p class="text-sm font-medium leading-none">Sofia Davis</p>
            <p class="text-sm text-muted-foreground">m@example.com</p>
          </div>
        </div>
        <UiPopover>
          <UiPopoverTrigger as-child>
            <UiButton variant="outline" class="ml-auto">
              {{ sofiaRole }}
              <ChevronDownIcon class="ml-2 h-4 w-4 text-muted-foreground" />
            </UiButton>
          </UiPopoverTrigger>
          <UiPopoverContent class="p-0" align="end">
            <UiCommand v-model="sofiaRole">
              <UiCommandInput placeholder="Select new role..." />
              <UiCommandList>
                <UiCommandEmpty>No roles found.</UiCommandEmpty>
                <UiCommandGroup>
                  <UiCommandItem
                    value="Viewer"
                    class="flex flex-col items-start space-y-1 px-4 py-2"
                  >
                    <p>Viewer</p>
                    <p class="text-sm text-muted-foreground">
                      Can view and comment.
                    </p>
                  </UiCommandItem>
                  <UiCommandItem
                    value="Developer"
                    class="flex flex-col items-start space-y-1 px-4 py-2"
                  >
                    <p>Developer</p>
                    <p class="text-sm text-muted-foreground">
                      Can view, comment and edit.
                    </p>
                  </UiCommandItem>
                  <UiCommandItem
                    value="Billing"
                    class="flex flex-col items-start space-y-1 px-4 py-2"
                  >
                    <p>Billing</p>
                    <p class="text-sm text-muted-foreground">
                      Can view, comment and manage billing.
                    </p>
                  </UiCommandItem>
                  <UiCommandItem
                    value="Owner"
                    class="flex flex-col items-start space-y-1 px-4 py-2"
                  >
                    <p>Owner</p>
                    <p class="text-sm text-muted-foreground">
                      Admin-level access to all resources.
                    </p>
                  </UiCommandItem>
                </UiCommandGroup>
              </UiCommandList>
            </UiCommand>
          </UiPopoverContent>
        </UiPopover>
      </div>
      <div class="flex items-center justify-between space-x-4">
        <div class="flex items-center space-x-4">
          <UiAvatar>
            <UiAvatarImage src="/avatars/02.png" />
            <UiAvatarFallback>JL</UiAvatarFallback>
          </UiAvatar>
          <div>
            <p class="text-sm font-medium leading-none">Jackson Lee</p>
            <p class="text-sm text-muted-foreground">p@example.com</p>
          </div>
        </div>
        <UiPopover>
          <UiPopoverTrigger as-child>
            <UiButton variant="outline" class="ml-auto">
              {{ jacksonRole }}
              <ChevronDownIcon class="ml-2 h-4 w-4 text-muted-foreground" />
            </UiButton>
          </UiPopoverTrigger>
          <UiPopoverContent class="p-0" align="end">
            <UiCommand v-model="jacksonRole">
              <UiCommandInput placeholder="Select new role..." />
              <UiCommandList>
                <UiCommandEmpty>No roles found.</UiCommandEmpty>
                <UiCommandGroup>
                  <UiCommandItem
                    value="Viewer"
                    class="flex flex-col items-start space-y-1 px-4 py-2"
                  >
                    <p>Viewer</p>
                    <p class="text-sm text-muted-foreground">
                      Can view and comment.
                    </p>
                  </UiCommandItem>
                  <UiCommandItem
                    value="Developer"
                    class="flex flex-col items-start space-y-1 px-4 py-2"
                  >
                    <p>Developer</p>
                    <p class="text-sm text-muted-foreground">
                      Can view, comment and edit.
                    </p>
                  </UiCommandItem>
                  <UiCommandItem
                    value="Billing"
                    class="flex flex-col items-start space-y-1 px-4 py-2"
                  >
                    <p>Billing</p>
                    <p class="text-sm text-muted-foreground">
                      Can view, comment and manage billing.
                    </p>
                  </UiCommandItem>
                  <UiCommandItem
                    value="Owner"
                    class="flex flex-col items-start space-y-1 px-4 py-2"
                  >
                    <p>Owner</p>
                    <p class="text-sm text-muted-foreground">
                      Admin-level access to all resources.
                    </p>
                  </UiCommandItem>
                </UiCommandGroup>
              </UiCommandList>
            </UiCommand>
          </UiPopoverContent>
        </UiPopover>
      </div>
    </UiCardContent>
  </UiCard>
</template>
