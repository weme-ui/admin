import type { IconifyIconProps } from '@iconify/vue'
import type { PrimitiveProps } from 'reka-ui'
import type { NavigationMenuItem } from './navigation-menu-item.props'
import type { NavigationMenuStyleSlots } from './navigation-menu.style'

export interface NavigationMenuProps extends PrimitiveProps {
  active?: string
  defaultActive?: string
  items?: NavigationMenuItem[] | NavigationMenuItem[][]
  externalIcon?: IconifyIconProps['icon']
  class?: any
  ui?: Partial<NavigationMenuStyleSlots>
}

export interface NavigationMenuEmits {
  'update:active': [active: string | undefined]
}
