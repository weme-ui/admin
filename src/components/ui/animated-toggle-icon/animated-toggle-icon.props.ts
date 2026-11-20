import type { IconifyIconProps } from '@iconify/vue'

export interface AnimatedToggleIconProps {
  variant?: 'scale' | 'forward' | 'backward'
  icon: IconifyIconProps['icon']
  activeIcon?: IconifyIconProps['icon']
  active: boolean
  class?: any
}
