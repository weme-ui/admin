<script lang="ts" setup>
import type { ThemeProviderProps } from './theme-provider.props'
import { watch, watchEffect } from 'vue'
import { useTheme } from '~/composables/use-theme'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<ThemeProviderProps>()

const html = document.documentElement
const { theme, appearance, radius, scaling } = useTheme()

watch(
  () => ({ ...props }),
  (updated, old) => {
    if (updated.name !== old?.name) {
      theme.value = updated.name ?? 'default'
    }
    if (updated.appearance !== old?.appearance) {
      appearance.value = updated.appearance ?? 'auto'
    }
    if (updated.radius !== old?.radius) {
      radius.value = updated.radius ?? 'default'
    }
    if (updated.scaling !== old?.scaling) {
      scaling.value = updated.scaling ?? 'default'
    }
  },
)

watchEffect(() => {
  if (appearance.value !== 'auto') {
    html.classList.toggle('dark', appearance.value === 'dark')
  }

  html.setAttribute('data-theme', theme.value)
  html.setAttribute('data-radius', radius.value)
  html.setAttribute('data-scaling', scaling.value)
})
</script>

<template>
  <slot />
</template>
