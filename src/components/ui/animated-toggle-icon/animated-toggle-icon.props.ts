import type { IconifyIconProps } from '@iconify/vue'

export interface AnimatedToggleIconProps {
  icon: IconifyIconProps['icon']
  activeIcon?: IconifyIconProps['icon']
  active: boolean
  class?: any
}
