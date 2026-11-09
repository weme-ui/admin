import type { IconifyIconProps } from '@iconify/vue'
import type { PrimitiveProps } from 'reka-ui'
import type { ActivityBarStyleSlots } from './activity-bar.style'

export interface ActivityBarItem {
  id?: string
  label?: string
  tooltip?: string
  icon?: IconifyIconProps['icon']
  activeIcon?: IconifyIconProps['icon']
  disabled?: boolean
  chipped?: boolean
  onActive?: (item: ActivityBarItem) => void | Promise<void>
  class?: any
}

export interface ActivityBarGroup {
  slot: 'content' | 'footer'
  items: ActivityBarItem[]
}

export interface ActivityBarProps extends PrimitiveProps {
  active?: string
  defaultActive?: string
  groups?: ActivityBarGroup[]
  class?: any
  ui?: Partial<ActivityBarStyleSlots>
}

export interface ActivityBarEmits {
  'update:active': [active: string | undefined]
}
