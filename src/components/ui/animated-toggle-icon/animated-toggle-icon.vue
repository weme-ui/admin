<script lang="ts" setup>
import type { AnimatedToggleIconProps } from './animated-toggle-icon.props'
import { AnimatePresence, Motion } from 'motion-v'
import { computed } from 'vue'
import { toBoolDataAttrValue } from '~/utils/props'
import { cn } from '~/utils/styles'
import Icon from '../icon/icon.vue'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<AnimatedToggleIconProps>(), {
  variant: 'scale',
})

const motions = {
  scale: {
    initial: { scale: 0.85 },
    animate: { scale: 1 },
    exit: { scale: 0.75 },
    transition: {
      ease: 'easeOut',
      duration: 0.15,
      bounce: 0.3,
    },
  },
  backward: {
    initial: { scale: 0.5 },
    animate: { scale: 1 },
    exit: { translateX: -8, scale: 1.2, opacity: 0 },
    transition: {
      ease: 'easeOut',
      duration: 0.25,
      bounce: 0.25,
    },
  },
  forward: {
    initial: { scale: 0.5 },
    animate: { scale: 1 },
    exit: { translateX: 8, scale: 1.2, opacity: 0 },
    transition: {
      ease: 'easeOut',
      duration: 0.25,
      bounce: 0.25,
    },
  },
}

const animate = computed(() => motions[props.variant])
</script>

<template>
  <AnimatePresence mode="wait">
    <Motion
      :key="active ? 'active' : 'inactive'"
      v-bind="$attrs"
      data-slot="animated-toggle-icon"
      :data-active="toBoolDataAttrValue(active)"
      :initial="animate.initial"
      :animate="animate.animate"
      :exit="animate.exit"
      :transition="animate.transition"
      :class="cn('shrink-0 pointer-events-none', props.class)"
      as-child
    >
      <Icon :name="active ? activeIcon || icon : icon" />
    </Motion>
  </AnimatePresence>
</template>
