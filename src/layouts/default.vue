<script lang="ts" setup>
import type { ActivityBarGroup } from '~/components/ui/activity-bar/activity-bar.props'
import type { NavigationMenuItem } from '~/components/ui/navigation-menu/navigation-menu-item.props'
import { SplitterGroup, SplitterPanel, SplitterResizeHandle } from 'reka-ui'

const active = ref<string | undefined>('dashboard')

const modules = computed(
  () =>
    [
      {
        slot: 'content',
        items: [
          {
            id: 'dashboard',
            label: 'Dashboard',
            tooltip: 'Go to dashboard',
            icon: 'mingcute:home-1-line',
            activeIcon: 'mingcute:home-1-fill',
          },
          {
            id: 'workspace',
            label: 'Workspace',
            tooltip: 'Go to workspace',
            icon: 'mingcute:version-line',
            activeIcon: 'mingcute:version-fill',
          },
        ],
      },
      {
        slot: 'footer',
        items: [
          {
            id: 'messages',
            label: 'Messages',
            icon: 'mingcute:message-2-line',
            activeIcon: 'mingcute:message-2-fill',
          },
          {
            id: 'settings',
            label: 'Settings',
            icon: 'mingcute:settings-1-line',
            activeIcon: 'mingcute:settings-1-fill',
          },
        ],
      },
    ] satisfies ActivityBarGroup[],
)

const menus = computed(
  () =>
    [
      [
        {
          id: 'manage',
          type: 'label',
          label: 'Manage',
          icon: 'mingcute:tool-line',
          children: [
            {
              id: 'users',
              type: 'link',
              label: 'Users',
              icon: 'mingcute:user-3-line',
              to: '/users',
              chip: true,
            },
            {
              id: 'roles',
              type: 'link',
              label: 'Roles',
              icon: 'mingcute:safe-lock-line',
              to: '/roles',
              chip: true,
            },
          ],
        },
      ],
    ] satisfies NavigationMenuItem[][],
)
</script>

<template>
  <SplitterGroup direction="horizontal" class="h-full relative">
    <UiActivityBar v-model:active="active" :groups="modules" class="py-2">
      <template #header>
        <div class="flex size-10 flex-center">
          <GlobalLogo />
        </div>
      </template>
    </UiActivityBar>

    <SplitterPanel
      id="primary-sidebar"
      :default-size="280"
      :min-size="240"
      :max-size="400"
      size-unit="px"
      class="py-2"
      collapsible
    >
      <div class="b b-neutral-3 rounded-lg bg-neutral-2/80 size-full">
        <UiScrollArea class="size-full">
          <UiNavigationMenu :items="menus" class="p-3" />
        </UiScrollArea>
      </div>
    </SplitterPanel>

    <SplitterResizeHandle class="w-2" />

    <SplitterPanel id="content-view" class="py-2"> Content </SplitterPanel>
  </SplitterGroup>
</template>

<style>
body {
  @apply bg-base text-foreground;
}
</style>
