<script lang="ts" setup>
import type { ConfigProviderProps } from './config-provider.props'
import { reactivePick } from '@vueuse/core'
import { ConfigProvider, TooltipProvider } from 'reka-ui'
import { toRef, useId } from 'vue'

const props = withDefaults(defineProps<ConfigProviderProps>(), {
  scrollBody: true,
  teleportTo: 'body',
  useId: () => useId(),
})

const delegated = reactivePick(props, 'dir', 'locale', 'nonce', 'scrollBody', 'teleportTo', 'useId')
const tooltipProps = toRef(() => props.tooltip)
</script>

<template>
  <ConfigProvider v-bind="delegated">
    <TooltipProvider v-bind="tooltipProps">
      <slot />
    </TooltipProvider>
  </ConfigProvider>
</template>
