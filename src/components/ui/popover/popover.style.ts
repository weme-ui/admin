import type { VariantProps } from '~/utils/styles'
import { createVariants } from '~/utils/styles'

export const usePopoverStyle = createVariants({
  slots: {
    content: [
      'bg-popover rounded-lg shadow-xl ring-(~ border)',
      'pointer-events-auto origin-$reka-popover-content-transform-origin focus:outline-none',
      'data-[state=open]:animate-scale-in data-[state=closed]:animate-scale-out',
    ].join(' '),
    arrow: 'fill-popover stroke-border',
  },

  variants: {
    size: {
      sm: {
        content: 'p-sm',
      },
      md: {
        content: 'p-md',
      },
      lg: {
        content: 'p-lg',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export type PopoverStyleSlots = (typeof usePopoverStyle)['slots']
export type PopoverStyleProps = VariantProps<typeof usePopoverStyle>
