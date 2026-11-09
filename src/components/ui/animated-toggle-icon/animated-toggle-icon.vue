<script lang="ts" setup>
import type { AnimatedToggleIconProps } from './animated-toggle-icon.props'
import { AnimatePresence, Motion } from 'motion-v'
import { toBoolDataAttrValue } from '~/utils/props'
import { cn } from '~/utils/styles'
import Icon from '../icon/icon.vue'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<AnimatedToggleIconProps>()
</script>

<template>
  <AnimatePresence mode="wait">
    <Motion
      v-bind="$attrs"
      :key="active ? 'active' : 'inactive'"
      data-slot="animated-toggle-icon"
      :data-active="toBoolDataAttrValue(active)"
      :initial="{ scale: 0.85 }"
      :animate="{ scale: 1 }"
      :exit="{ scale: 0.75 }"
      :transition="{
        ease: 'easeOut',
        duration: 0.15,
        bounce: 0.3,
      }"
      :class="cn('shrink-0 pointer-events-none', props.class)"
      as-child
    >
      <Icon :name="active ? (activeIcon || icon) : icon" />
    </Motion>
  </AnimatePresence>
</template>
