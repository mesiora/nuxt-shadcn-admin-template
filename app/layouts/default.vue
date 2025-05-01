<script setup lang="ts">
import {
  ActivityIcon,
  AudioWaveformIcon,
  BadgeCheckIcon,
  BellIcon,
  BoxIcon,
  ChartAreaIcon,
  ChevronRightIcon,
  ChevronsUpDownIcon,
  CircleIcon,
  CommandIcon,
  CreditCardIcon,
  EllipsisIcon,
  FingerprintIcon,
  GalleryVerticalEndIcon,
  InboxIcon,
  KeyIcon,
  LogOutIcon,
  MailIcon,
  MusicIcon,
  PenIcon,
  PieChartIcon,
  PlusIcon,
  Settings2Icon,
  SparklesIcon,
  SquareChartGanttIcon,
  SquareCheckBigIcon,
  TableIcon,
  UserRoundCheckIcon,
} from 'lucide-vue-next'
import type { NavGroup } from '#shared/types/nav'

// This is sample
const user = {
  name: 'shadcn',
  email: 'm@example.com',
  avatar: '/avatars/01.png',
}
const teams = [
  {
    name: 'Acme Inc',
    logo: GalleryVerticalEndIcon,
    plan: 'Enterprise',
  },
  {
    name: 'Acme Corp.',
    logo: AudioWaveformIcon,
    plan: 'Startup',
  },
  {
    name: 'Evil Corp.',
    logo: CommandIcon,
    plan: 'Free',
  },
]

const navMain: NavGroup[] = [
  {
    group: 'Dashboard',
    navItems: [
      {
        title: 'Overview',
        url: { name: 'index' },
        icon: ChartAreaIcon,
      },
      {
        title: 'Sales & Marketing',
        url: { name: 'dashboard-sales' },
        icon: PieChartIcon,
        disabled: true,
      },
    ],
  },
  {
    group: 'Pages',
    navItems: [
      {
        title: 'Auth',
        icon: UserRoundCheckIcon,
        isActive: true,
        items: [
          {
            title: 'Login',
            url: { name: 'login' },
          },
          {
            title: 'Forgot Password',
            url: { name: 'reset-password' },
          },
        ],
      },
      {
        title: 'CRUD',
        url: '#',
        icon: PenIcon,
        disabled: true,
      },
      {
        title: 'Access Denied',
        url: { name: '401' },
        icon: FingerprintIcon,
      },
      {
        title: 'Not Found',
        url: { name: '404' },
        icon: CircleIcon,
      },
      {
        title: 'Error',
        url: { name: '500' },
        icon: ActivityIcon,
      },
      {
        title: 'Empty',
        url: { name: 'empty' },
        icon: InboxIcon,
      },
    ],
  },
  {
    group: 'Settings',
    navItems: [
      {
        title: 'General',
        url: '#',
        icon: Settings2Icon,
        disabled: true,
      },
      {
        title: 'Security',
        url: '#',
        icon: KeyIcon,
        disabled: true,
      },
    ],
  },
  {
    group: 'Shadcn-vue',
    navItems: [
      {
        title: 'Mail',
        url: { name: 'mail' },
        icon: MailIcon,
      },
      {
        title: 'Cards',
        url: { name: 'cards' },
        icon: SquareChartGanttIcon,
      },
      {
        title: 'Tasks',
        url: { name: 'tasks' },
        icon: TableIcon,
      },
      {
        title: 'Playground',
        url: '#',
        icon: BoxIcon,
        disabled: true,
      },
      {
        title: 'Forms',
        url: '#',
        icon: SquareCheckBigIcon,
        disabled: true,
      },
      {
        title: 'Music',
        url: '#',
        icon: MusicIcon,
        disabled: true,
      },
      {
        title: 'More',
        url: 'https://www.shadcn-vue.com/docs/components/accordion.html',
        target: '_blank',
        icon: EllipsisIcon,
      },
    ],
  },
]

const activeTeam = ref(teams[0])

function setActiveTeam(team: (typeof teams)[number]) {
  activeTeam.value = team
}
</script>

<template>
  <UiSidebarProvider>
    <UiSidebar collapsible="icon">
      <UiSidebarHeader>
        <UiSidebarMenu>
          <UiSidebarMenuItem>
            <UiDropdownMenu>
              <UiDropdownMenuTrigger as-child>
                <UiSidebarMenuButton
                  size="lg"
                  class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  <div
                    class="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg"
                  >
                    <component :is="activeTeam.logo" class="size-4" />
                  </div>
                  <div class="grid flex-1 text-left text-sm leading-tight">
                    <span class="truncate font-semibold">{{
                      activeTeam.name
                    }}</span>
                    <span class="truncate text-xs">{{ activeTeam.plan }}</span>
                  </div>
                  <ChevronsUpDownIcon class="ml-auto" />
                </UiSidebarMenuButton>
              </UiDropdownMenuTrigger>
              <UiDropdownMenuContent
                class="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                align="start"
                side="bottom"
                :side-offset="4"
              >
                <UiDropdownMenuLabel class="text-xs text-muted-foreground">
                  Teams
                </UiDropdownMenuLabel>
                <UiDropdownMenuItem
                  v-for="(team, index) in teams"
                  :key="team.name"
                  class="gap-2 p-2"
                  @click="setActiveTeam(team)"
                >
                  <div
                    class="flex size-6 items-center justify-center rounded-sm border"
                  >
                    <component :is="team.logo" class="size-4 shrink-0" />
                  </div>
                  {{ team.name }}
                  <UiDropdownMenuShortcut
                    >⌘{{ index + 1 }}</UiDropdownMenuShortcut
                  >
                </UiDropdownMenuItem>
                <UiDropdownMenuSeparator />
                <UiDropdownMenuItem class="gap-2 p-2">
                  <div
                    class="flex size-6 items-center justify-center rounded-md border bg-background"
                  >
                    <PlusIcon class="size-4" />
                  </div>
                  <div class="font-medium text-muted-foreground">Add team</div>
                </UiDropdownMenuItem>
              </UiDropdownMenuContent>
            </UiDropdownMenu>
          </UiSidebarMenuItem>
        </UiSidebarMenu>
      </UiSidebarHeader>

      <UiSidebarContent class="group-data-[collapsible=icon]:gap-0">
        <UiSidebarGroup v-for="navGroup in navMain" :key="navGroup.group">
          <UiSidebarGroupLabel>
            {{ navGroup.group }}
          </UiSidebarGroupLabel>

          <UiSidebarMenu
            v-for="navItem in navGroup.navItems"
            :key="navItem.title"
          >
            <UiCollapsible
              v-if="navItem.items"
              as-child
              :default-open="navItem.isActive"
              class="group/collapsible"
            >
              <UiSidebarMenuItem>
                <UiCollapsibleTrigger as-child>
                  <UiSidebarMenuButton :tooltip="navItem.title">
                    <component :is="navItem.icon" />
                    <span>{{ navItem.title }}</span>
                    <ChevronRightIcon
                      class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
                    />
                  </UiSidebarMenuButton>
                </UiCollapsibleTrigger>
                <UiCollapsibleContent>
                  <UiSidebarMenuSub>
                    <UiSidebarMenuSubItem
                      v-for="subItem in navItem.items"
                      :key="subItem.title"
                      :class="{
                        'pointer-events-none opacity-50': subItem.disabled,
                      }"
                    >
                      <UiSidebarMenuSubButton as-child>
                        <NuxtLink :to="subItem.url" :target="subItem.target">
                          <span>{{ subItem.title }}</span>
                        </NuxtLink>
                      </UiSidebarMenuSubButton>
                    </UiSidebarMenuSubItem>
                  </UiSidebarMenuSub>
                </UiCollapsibleContent>
              </UiSidebarMenuItem>
            </UiCollapsible>

            <UiSidebarMenuItem
              v-else
              :class="{
                'pointer-events-none opacity-50': navItem.disabled,
              }"
            >
              <UiSidebarMenuButton as-child>
                <NuxtLink :to="navItem.url" :target="navItem.target">
                  <component :is="navItem.icon" />
                  <span>{{ navItem.title }}</span>
                </NuxtLink>
              </UiSidebarMenuButton>
            </UiSidebarMenuItem>
          </UiSidebarMenu>
        </UiSidebarGroup>
      </UiSidebarContent>

      <UiSidebarFooter>
        <UiSidebarMenu>
          <UiSidebarMenuItem>
            <UiDropdownMenu>
              <UiDropdownMenuTrigger as-child>
                <UiSidebarMenuButton
                  size="lg"
                  class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  <UiAvatar class="h-8 w-8 rounded-lg">
                    <UiAvatarImage :src="user.avatar" :alt="user.name" />
                    <UiAvatarFallback class="rounded-lg"> CN </UiAvatarFallback>
                  </UiAvatar>
                  <div class="grid flex-1 text-left text-sm leading-tight">
                    <span class="truncate font-semibold">{{ user.name }}</span>
                    <span class="truncate text-xs">{{ user.email }}</span>
                  </div>
                  <ChevronsUpDownIcon class="ml-auto size-4" />
                </UiSidebarMenuButton>
              </UiDropdownMenuTrigger>
              <UiDropdownMenuContent
                class="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                side="bottom"
                align="end"
                :side-offset="4"
              >
                <UiDropdownMenuLabel class="p-0 font-normal">
                  <div
                    class="flex items-center gap-2 px-1 py-1.5 text-left text-sm"
                  >
                    <UiAvatar class="h-8 w-8 rounded-lg">
                      <UiAvatarImage :src="user.avatar" :alt="user.name" />
                      <UiAvatarFallback class="rounded-lg">
                        CN
                      </UiAvatarFallback>
                    </UiAvatar>
                    <div class="grid flex-1 text-left text-sm leading-tight">
                      <span class="truncate font-semibold">{{
                        user.name
                      }}</span>
                      <span class="truncate text-xs">{{ user.email }}</span>
                    </div>
                  </div>
                </UiDropdownMenuLabel>
                <UiDropdownMenuSeparator />
                <UiDropdownMenuGroup>
                  <UiDropdownMenuItem>
                    <SparklesIcon />
                    Upgrade to Pro
                  </UiDropdownMenuItem>
                </UiDropdownMenuGroup>
                <UiDropdownMenuSeparator />
                <UiDropdownMenuGroup>
                  <UiDropdownMenuItem>
                    <BadgeCheckIcon />
                    Account
                  </UiDropdownMenuItem>
                  <UiDropdownMenuItem>
                    <CreditCardIcon />
                    Billing
                  </UiDropdownMenuItem>
                  <UiDropdownMenuItem>
                    <BellIcon />
                    Notifications
                  </UiDropdownMenuItem>
                </UiDropdownMenuGroup>
                <UiDropdownMenuSeparator />
                <UiDropdownMenuItem>
                  <LogOutIcon />
                  Log out
                </UiDropdownMenuItem>
              </UiDropdownMenuContent>
            </UiDropdownMenu>
          </UiSidebarMenuItem>
        </UiSidebarMenu>
      </UiSidebarFooter>
      <UiSidebarRail />
    </UiSidebar>

    <UiSidebarInset>
      <header
        class="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12"
      >
        <div class="flex items-center gap-2 px-4">
          <UiSidebarTrigger class="-ml-1" />
          <UiSeparator orientation="vertical" class="mr-2 h-4" />
          <UiBreadcrumb>
            <UiBreadcrumbList>
              <UiBreadcrumbItem class="hidden md:block">
                <UiBreadcrumbLink href="#"> Application </UiBreadcrumbLink>
              </UiBreadcrumbItem>
              <UiBreadcrumbSeparator class="hidden md:block" />
              <UiBreadcrumbItem>
                <UiBreadcrumbPage>Data Fetching</UiBreadcrumbPage>
              </UiBreadcrumbItem>
            </UiBreadcrumbList>
          </UiBreadcrumb>
        </div>

        <div class="ml-auto flex items-center gap-2 px-4">
          <AppColorMode />
        </div>
      </header>
      <div class="min-h-[calc(100vh-64px)] p-4 pt-0">
        <slot />
      </div>
    </UiSidebarInset>
  </UiSidebarProvider>
</template>
