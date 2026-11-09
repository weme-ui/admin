<script lang="ts" setup>
import type { BadgeProps } from './badge.props'
import { Primitive } from 'reka-ui'
import { computed, ref, useSlots } from 'vue'
import { cn } from '~/utils/styles'
import Icon from '../icon/icon.vue'
import linkOverlay from '../link-overlay/link-overlay.vue'
import { useBadgeStyle } from './badge.style'

const props = withDefaults(defineProps<BadgeProps>(), {
  as: 'span',
  variant: 'solid',
  color: 'default',
  size: 'md',
})

const slots = useSlots()

const iconOnly = computed(() => (!!slots.icon || !!props.icon) && !(!!props.label || !!slots.default))
const clickable = computed(() => !!props.clickable || !!props.href)

const ui = computed(() => useBadgeStyle({
  variant: props.variant,
  color: props.color,
  size: props.size,
  clickable: clickable.value,
  iconOnly: iconOnly.value,
}))

const pressed = ref(false)
</script>

<template>
  <Primitive
    :data-slot="$attrs['data-slot'] || 'badge'"
    :as="as"
    :as-child="asChild"
    :aria-pressed="clickable ? pressed : undefined"
    :class="cn(ui.root(), props.ui?.root, props.class)"
    @mousedown="pressed = true"
    @mouseup="pressed = false"
    @touchstart="pressed = true"
    @touchend="pressed = false"
  >
    <slot>
      <slot v-if="!!$slots.icon || icon" name="icon">
        <Icon v-if="icon" :name="icon" :class="cn(ui.icon(), props.ui?.icon)" />
      </slot>
      {{ label }}
    </slot>
    <linkOverlay v-if="clickable" :href="href" :target="target" :rel="rel" />
  </Primitive>
</template>
