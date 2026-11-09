import type { PrimitiveProps } from 'reka-ui'
import type { ChipStyleProps, ChipStyleSlots } from './/chip.style'

export interface ChipProps extends PrimitiveProps {
  variant?: ChipStyleProps['variant']
  size?: ChipStyleProps['size']
  label?: string
  animate?: boolean
  class?: any
  ui?: Partial<ChipStyleSlots>
}
