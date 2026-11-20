import type {
  ThemeAppearanceValue,
  ThemeRadiusValue,
  ThemeScalingValue,
  ThemeValue,
} from '~/composables/use-theme'

export interface ThemeProviderProps {
  name?: ThemeValue
  appearance?: ThemeAppearanceValue
  radius?: ThemeRadiusValue
  scaling?: ThemeScalingValue
}
