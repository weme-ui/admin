<script lang="ts" setup>
import type { ChipProps } from './chip.props'
import { Primitive } from 'reka-ui'
import { computed } from 'vue'
import { toBoolValue } from '~/utils/props'
import { cn } from '~/utils/styles'
import { useChipStyle } from './chip.style'

const props = withDefaults(defineProps<ChipProps>(), {
  as: 'span',
  variant: 'default',
  size: 'md',
})

const ui = computed(() =>
  useChipStyle({
    variant: props.variant,
    size: props.size,
    animate: toBoolValue(props.animate),
  }),
)
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :data-slot="$attrs['data-slot'] || 'chip'"
    :aria-label="$attrs['aria-label'] || label"
    :class="cn(ui.root(), props.ui?.root)"
  >
    <span v-if="!!animate" :class="cn(ui.indicatorWrapper(), props.ui?.indicatorWrapper)">
      <span :class="cn(ui.indicator(), props.ui?.indicator, props.class)" />
    </span>
    <span v-else :class="cn(ui.indicator(), props.ui?.indicator, props.class)" />

    <span v-if="!!$slots.default || !!label" :class="cn(ui.label(), props.ui?.label)">
      <slot>{{ label }}</slot>
    </span>
  </Primitive>
</template>
