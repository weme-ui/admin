<script lang="ts" setup>
import type { FloatProps } from './float.props'
import { Primitive } from 'reka-ui'
import { computed } from 'vue'
import { cn } from '~/utils/styles'
import { useFloatStyle } from './float.style'

const props = withDefaults(defineProps<FloatProps>(), {
  placement: 'top-right',
  offset: '0',
})

const ui = computed(() => useFloatStyle({ placement: props.placement }))
</script>

<template>
  <Primitive
    :data-slot="$attrs['data-slot'] || 'float'"
    :as="as"
    :as-child="asChild"
    :style="{
      '--offset': offset,
      '--offset-x': `${offsetX || offset}`,
      '--offset-y': `${offsetY || offset}`,
    }"
    :class="cn(ui, props.class)"
  >
    <slot />
  </Primitive>
</template>
