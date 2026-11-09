import type { IconifyIconProps } from '@iconify/vue'
import type { TooltipArrowProps, TooltipContentEmits, TooltipContentProps, TooltipPortalProps, TooltipRootEmits, TooltipRootProps, TooltipTriggerProps } from 'reka-ui'
import type { TooltipStyleSlots } from './tooltip.style'
import type { EmitsToProps } from '~/utils/props'

export interface TooltipProps extends TooltipRootProps {
  side?: 'top' | 'right' | 'bottom' | 'left' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  content?: string
  icon?: IconifyIconProps['icon']
  loadingIcon?: IconifyIconProps['icon']
  triggerProps?: Partial<TooltipTriggerProps>
  portalProps?: Partial<TooltipPortalProps>
  contentProps?: Partial<Omit<TooltipContentProps, 'as' | 'asChild'>> & Partial<EmitsToProps<TooltipContentEmits>>
  arrowProps?: boolean | Partial<Omit<TooltipArrowProps, 'as' | 'asChild'>>
  loading?: boolean
  asChild?: boolean
  class?: any
  ui?: Partial<TooltipStyleSlots>
}

export interface TooltipEmits extends TooltipRootEmits {}
