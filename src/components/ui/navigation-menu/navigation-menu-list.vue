<script lang="ts" setup>
import type { NavigationMenuListProps } from './navigation-menu-list.props'
import { Primitive } from 'reka-ui'
import { computed } from 'vue'
import { cn } from '~/utils/styles'

const props = withDefaults(defineProps<NavigationMenuListProps>(), { as: 'ul' })
const classNames = computed(() => props.isSubmenu ? 'pl-6' : 'py-1')
</script>

<template>
  <Primitive :as="as" :class="cn(classNames, 'flex flex-col gap-1', props.class)">
    <slot />
  </Primitive>
</template>
