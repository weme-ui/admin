import type {
  HoverCardRootProps,
  HoverCardTriggerProps,
  PopoverArrowProps,
  PopoverContentEmits,
  PopoverContentProps,
  PopoverPortalProps,
  PopoverRootEmits,
  PopoverRootProps,
} from 'reka-ui'
import type { EmitsToProps } from '~/utils/props'
import type { PopoverStyleProps, PopoverStyleSlots } from './popover.style'

export type PopoverMode = 'click' | 'hover'

export interface PopoverProps<M extends PopoverMode = PopoverMode>
  extends PopoverRootProps, Pick<HoverCardRootProps, 'openDelay' | 'closeDelay'> {
  size?: PopoverStyleProps['size']
  mode?: M
  content?: Omit<PopoverContentProps, 'as' | 'asChild'> & Partial<EmitsToProps<PopoverContentEmits>>
  arrow?: boolean | Omit<PopoverArrowProps, 'as' | 'asChild'>
  portal?: Partial<PopoverPortalProps>
  reference?: HoverCardTriggerProps['reference']
  dismissible?: boolean
  asChild?: boolean
  class?: any
  ui?: Partial<PopoverStyleSlots>
}

export interface PopoverEmits extends PopoverRootEmits {
  'close:prevent': []
}
