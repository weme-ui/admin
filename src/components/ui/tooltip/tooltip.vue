<script lang="ts" setup>
import type { TooltipContentProps } from 'reka-ui'
import type { TooltipEmits, TooltipProps } from './tooltip.props'
import { reactivePick } from '@vueuse/core'
import { defu } from 'defu'
import { TooltipArrow, TooltipContent, TooltipPortal, TooltipRoot, TooltipTrigger, useForwardPropsEmits } from 'reka-ui'
import { computed, toRef } from 'vue'
import { toBoolValue } from '~/utils/props'
import { cn } from '~/utils/styles'
import Icon from '../icon/icon.vue'
import { useTooltipStyle } from './tooltip.style'

const props = withDefaults(defineProps<TooltipProps>(), {
  delayDuration: 20,
  side: 'top',
  loadingIcon: 'ri:loader-line',
  arrowProps: true,
})

const emits = defineEmits<TooltipEmits>()
const delegated = reactivePick(props, 'defaultOpen', 'open', 'disabled', 'delayDuration', 'disableHoverableContent', 'disableClosingTrigger', 'ignoreNonKeyboardFocus')
const forwarded = useForwardPropsEmits(delegated, emits)

const triggerProps = toRef(() => props.triggerProps)
const portalProps = toRef(() => props.portalProps)
const contentProps = toRef(() => defu(props.contentProps, { sideOffset: 6, collisionPadding: 6 }) as TooltipContentProps)

const side = computed(() => {
  if (props.side.includes('-')) {
    return props.side.split('-')[0] as TooltipContentProps['side']
  }
  return props.side as TooltipContentProps['side']
})

const align = computed(() => {
  if (props.side.includes('-')) {
    return props.side.split('-')[1] === 'left'
      ? 'start'
      : 'end'
  }
  return 'center'
})

const ui = computed(() => useTooltipStyle({
  loading: toBoolValue(props.loading),
}))
</script>

<template>
  <TooltipRoot v-slot="{ open }" v-bind="forwarded">
    <TooltipTrigger v-bind="triggerProps" :as-child="asChild" :class="cn(ui.trigger(), props.ui?.trigger)">
      <slot :open="open" />
    </TooltipTrigger>

    <TooltipPortal v-bind="portalProps">
      <TooltipContent
        v-bind="{ ...contentProps, ...$attrs }"
        data-slot="tooltip-content"
        :side="side"
        :align="align"
        :class="cn(ui.content(), props.ui?.content, props.class)"
      >
        <Icon v-if="loading" :name="loadingIcon" :class="cn(ui.icon(), props.ui?.icon)" />
        <Icon v-else-if="icon" :name="icon" :class="cn(ui.icon(), props.ui?.icon)" />

        <slot name="content">
          {{ content }}
        </slot>

        <TooltipArrow
          v-if="arrowProps !== false"
          v-bind="typeof arrowProps === 'object' ? arrowProps : {}"
          :class="cn(ui.arrow(), props.ui?.arrow)"
        />
      </TooltipContent>
    </TooltipPortal>
  </TooltipRoot>
</template>
