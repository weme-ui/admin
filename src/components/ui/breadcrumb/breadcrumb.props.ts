import type { IconifyIconProps } from '@iconify/vue'
import type { PrimitiveProps } from 'reka-ui'
import type { RouteLocationRaw } from 'vue-router'
import type { BreadcrumbStyleSlots } from './breadcrumb.style'

export interface BreadcrumbItem {
  label: string
  icon?: IconifyIconProps['icon']
  to?: RouteLocationRaw
  disabled?: boolean
}

export interface BreadcrumbProps extends PrimitiveProps {
  items: BreadcrumbItem[]
  separator?: string
  separatorIcon?: IconifyIconProps['icon']
  class?: any
  ui?: Partial<BreadcrumbStyleSlots>
}
