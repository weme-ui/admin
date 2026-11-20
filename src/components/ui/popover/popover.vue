<script lang="ts" setup generic="M extends PopoverMode">
import type { PopoverArrowProps, PopoverContentProps } from 'reka-ui'
import type { PopoverEmits, PopoverMode, PopoverProps } from './popover.props'
import { reactivePick } from '@vueuse/core'
import { defu } from 'defu'
import { useForwardPropsEmits } from 'reka-ui'
import { HoverCard, Popover } from 'reka-ui/namespaced'
import { computed, toRef } from 'vue'
import { cn } from '~/utils/styles'
import { usePopoverStyle } from './popover.style'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<PopoverProps<M>>(), {
  mode: 'click' as never,
  openDelay: 0,
  closeDelay: 0,
  dismissible: true,
  arrow: true,
  size: 'md',
})

const emits = defineEmits<PopoverEmits>()
const delegated =
  props.mode === 'click'
    ? reactivePick(props, 'defaultOpen', 'open', 'openDelay', 'closeDelay')
    : reactivePick(props, 'defaultOpen', 'open', 'modal')
const forwarded = useForwardPropsEmits(delegated, emits)

const arrowProps = toRef(() => props.arrow as PopoverArrowProps)
const portalProps = toRef(() => props.portal)
const contentProps = toRef(
  () =>
    defu(props.content, {
      side: 'bottom',
      sideOffset: 6,
      collisionPadding: 6,
    }) as PopoverContentProps,
)

const contentEvents = computed(() => {
  if (!props.dismissible) {
    const events = ['pointerDownOutside', 'interactOutside', 'escapeKeyDown']

    return events.reduce(
      (acc, curr) => {
        acc[curr] = (e: Event) => {
          e.preventDefault()
          emits('close:prevent')
        }
        return acc
      },
      {} as Record<(typeof events)[number], (e: Event) => void>,
    )
  }

  return {}
})

const Component = computed(() => (props.mode === 'hover' ? HoverCard : Popover))

const ui = computed(() =>
  usePopoverStyle({
    size: props.size,
  }),
)
</script>

<template>
  <Component.Root
    v-slot="{ open, close }: { open: boolean; close?: () => void }"
    v-bind="forwarded"
  >
    <Component.Trigger
      v-if="!!$slots.default || !!reference"
      data-slot="popover-trigger"
      :reference="reference"
      :data-mode="mode"
      :class="props.class"
      :as-child="asChild"
    >
      <slot :open="open" />
    </Component.Trigger>

    <Component.Anchor
      v-if="'Anchor' in Component && !!$slots.anchor"
      data-slot="popover-anchor"
      :reference="reference"
      :class="props.class"
      as-child
    >
      <slot name="anchor" v-bind="close ? { close } : {}" />
    </Component.Anchor>

    <Component.Portal v-bind="portalProps">
      <Component.Content
        v-bind="{ ...contentProps, ...$attrs }"
        :class="cn(ui.content(), props.ui?.content)"
        v-on="contentEvents"
      >
        <slot name="content" v-bind="close ? { close } : {}" />
        <Component.Arrow
          v-if="!!arrow"
          v-bind="arrowProps"
          :class="cn(ui.arrow(), props.ui?.arrow)"
        />
      </Component.Content>
    </Component.Portal>
  </Component.Root>
</template>
