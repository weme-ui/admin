<script lang="ts" setup>
import type { AvatarEmits, AvatarProps } from './avatar.props'
import { reactivePick } from '@vueuse/core'
import { AvatarFallback, AvatarImage, AvatarRoot, useForwardPropsEmits } from 'reka-ui'
import { computed } from 'vue'
import { cn } from '~/utils/styles'
import Icon from '../icon/icon.vue'
import { useAvatarStyle } from './avatar.style'

const props = withDefaults(defineProps<AvatarProps>(), {
  color: 'default',
  size: 'md',
  icon: 'ri:user-line',
})

const emits = defineEmits<AvatarEmits>()
const delegated = reactivePick(props, 'crossOrigin', 'referrerPolicy')
const forwarded = useForwardPropsEmits(delegated, emits)

const ui = computed(() =>
  useAvatarStyle({
    color: props.color,
    size: props.size,
  }),
)
</script>

<template>
  <AvatarRoot
    :as="as"
    :data-slot="$attrs['data-slot'] || 'avatar'"
    :class="cn(ui.root(), props.ui?.root, props.class)"
  >
    <AvatarImage
      v-if="src"
      v-bind="forwarded"
      :src="src"
      :class="cn(ui.image(), props.ui?.image)"
    />
    <AvatarFallback :delay-ms="delayMs" :class="cn(ui.fallback(), props.ui?.fallback)">
      <slot>
        <slot v-if="$slots.fallback || fallback" name="fallback">
          {{ fallback }}
        </slot>
        <slot v-else-if="!$slots.default" name="icon">
          <Icon :name="icon" :class="cn(ui.icon(), props.ui?.icon)" />
        </slot>
      </slot>
    </AvatarFallback>
    <slot name="extend" />
  </AvatarRoot>
</template>
