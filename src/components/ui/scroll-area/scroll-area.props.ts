import type { ScrollAreaRootProps } from 'reka-ui'
import type { ScrollAreaStyleProps, ScrollAreaStyleSlots } from './scroll-area.style'

export interface ScrollAreaProps extends Omit<ScrollAreaRootProps, 'asChild'> {
  orientation?: ScrollAreaStyleProps['orientation']
  class?: any
  ui?: Partial<ScrollAreaStyleSlots>
}
