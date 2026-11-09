<script lang="ts" setup>
import type { IconProps } from './icon.props'
import { Icon } from '@iconify/vue'
import { reactiveOmit } from '@vueuse/core'
import { computed } from 'vue'
import { cn } from '~/utils/styles'

const props = defineProps<IconProps>()
const delegated = reactiveOmit(props, 'name', 'class')

const resolvedIcon = computed(() => props.icon ?? props.name)
</script>

<template>
  <Icon v-bind="delegated" data-slot="icon" :icon="resolvedIcon" :class="cn('outline-none shrink-0', props.class)" />
</template>
