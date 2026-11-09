<script lang="ts" setup>
import type { ScrollAreaProps } from './scroll-area.props'
import { reactivePick } from '@vueuse/core'
import { ScrollAreaRoot, ScrollAreaScrollbar, ScrollAreaThumb, ScrollAreaViewport } from 'reka-ui'
import { computed } from 'vue'
import { cn } from '~/utils/styles'
import { useScrollAreaStyle } from './scroll-area.style'

const props = withDefaults(defineProps<ScrollAreaProps>(), { type: 'hover' })
const delegated = reactivePick(props, 'as', 'dir', 'type')

const scrollHideDelay = computed(() =>
  props.type !== 'scroll' ? props.scrollHideDelay || 0 : props.scrollHideDelay || undefined,
)

const ui = useScrollAreaStyle()
</script>

<template>
  <ScrollAreaRoot
    v-bind="delegated"
    :data-slot="$attrs['data-slot'] || 'scroll-area'"
    :scroll-hide-delay="scrollHideDelay"
    :class="cn(ui.root(), props.ui?.root, props.class)"
  >
    <ScrollAreaViewport
      data-slot="scroll-area-viewport"
      :class="cn(ui.viewport(), props.ui?.viewport)"
    >
      <slot />
    </ScrollAreaViewport>

    <ScrollAreaScrollbar
      v-if="orientation !== 'vertical'"
      orientation="horizontal"
      :class="cn(ui.scrollbar({ orientation: 'horizontal' }), props.ui?.scrollbar)"
    >
      <ScrollAreaThumb :class="cn(ui.thumb(), props.ui?.thumb)" />
    </ScrollAreaScrollbar>

    <ScrollAreaScrollbar
      v-if="orientation !== 'horizontal'"
      orientation="vertical"
      :class="cn(ui.scrollbar({ orientation: 'vertical' }), props.ui?.scrollbar)"
    >
      <ScrollAreaThumb :class="cn(ui.thumb(), props.ui?.thumb)" />
    </ScrollAreaScrollbar>
  </ScrollAreaRoot>
</template>
