import type { IconifyIconProps } from '@iconify/vue'
import type { PrimitiveProps } from 'reka-ui'
import type { BadgeStyleProps, BadgeStyleSlots } from './badge.style'

export interface BadgeProps extends PrimitiveProps {
  variant?: BadgeStyleProps['variant']
  color?: BadgeStyleProps['color']
  size?: BadgeStyleProps['size']
  icon?: IconifyIconProps['icon']
  label?: string
  href?: string
  target?: string
  rel?: string
  clickable?: boolean
  class?: any
  ui?: Partial<BadgeStyleSlots>
}
