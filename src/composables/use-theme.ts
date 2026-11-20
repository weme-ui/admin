import type { ThemeRadius, ThemeScaling } from '@weme-ui/utilities'
import type { Ref } from 'vue'
import { useLocalStorage } from '@vueuse/core'

export type ThemeValue = 'default' | string
export type ThemeAppearanceValue = 'auto' | 'light' | 'dark'
export type ThemeRadiusValue = 'default' | ThemeRadius
export type ThemeScalingValue = 'default' | ThemeScaling

export interface ThemePreferences {
  theme: Ref<ThemeValue>
  appearance: Ref<ThemeAppearanceValue>
  radius: Ref<ThemeRadiusValue>
  scaling: Ref<ThemeScalingValue>
}

const localTheme = useLocalStorage<ThemeValue>('weme-theme', 'default')
const localAppearance = useLocalStorage<ThemeAppearanceValue>('weme-theme-appearance', 'auto')
const localRadius = useLocalStorage<ThemeRadiusValue>('weme-theme-radius', 'default')
const localScaling = useLocalStorage<ThemeScalingValue>('weme-theme-scaling', 'default')

export function useTheme(): ThemePreferences {
  return {
    theme: localTheme,
    appearance: localAppearance,
    radius: localRadius,
    scaling: localScaling,
  }
}
