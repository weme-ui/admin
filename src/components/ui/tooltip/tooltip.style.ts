import type { VariantProps } from '~/utils/styles'
import { createVariants } from '~/utils/styles'

export const useTooltipStyle = createVariants({
  slots: {
    trigger: 'focus-visible:outline-none',
    content:
      'text-xs text-tooltip font-medium px-sm py-xs rounded bg-tooltip/90 flex gap-xs pointer-events-auto select-none origin-$reka-tooltip-content-transform-origin flex-center z-toast backdrop-blur-3xl data-[state=delayed-open]:animate-tooltip-in data-[state=closed]:animate-tooltip-out',
    icon: 'shrink-0',
    arrow: 'fill-tooltip/90 backdrop-blur-3xl',
  },

  variants: {
    loading: {
      true: { icon: 'animate-spin' },
    },
  },
})

export type TooltipStyleSlots = (typeof useTooltipStyle)['slots']
export type TooltipStyleProps = VariantProps<typeof useTooltipStyle>
