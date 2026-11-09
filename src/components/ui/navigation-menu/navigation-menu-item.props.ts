import type { IconifyIconProps } from '@iconify/vue'
import type { PrimitiveProps } from 'reka-ui'
import type { RouteLocationRaw } from 'vue-router'
import type { BadgeProps } from '../badge/badge.props'
import type { ChipProps } from '../chip/chip.props'
import type {
  NavigationMenuItemStyleProps,
  NavigationMenuItemStyleSlots,
} from './navigation-menu-item.style'

export type NavigationMenuItemType = 'label' | 'link' | 'separator'

export interface NavigationMenuItem {
  id?: string
  type?: NavigationMenuItemType
  label: string
  icon?: IconifyIconProps['icon']
  activeIcon?: IconifyIconProps['icon']
  badge?: string | Partial<Omit<BadgeProps, 'asChild'>>
  chip?: boolean | Partial<Omit<ChipProps, 'asChild'>>
  to?: RouteLocationRaw
  target?: string
  rel?: string
  disabled?: boolean
  children?: NavigationMenuItem[]
  class?: any
}

export interface NavigationMenuItemProps
  extends PrimitiveProps, Omit<NavigationMenuItem, 'children' | 'class'> {
  variant?: NavigationMenuItemStyleProps['variant']
  active?: boolean
  externalIcon?: IconifyIconProps['icon']
  class?: any
  ui?: Partial<NavigationMenuItemStyleSlots>
}
