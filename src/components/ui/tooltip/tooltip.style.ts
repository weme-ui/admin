import type { VariantProps } from '~/utils/styles'
import { createVariants } from '~/utils/styles'

export const useTooltipStyle = createVariants({
  slots: {
    trigger: 'focus-visible:outline-none',
    content: 'text-xs text-tooltip px-sm py-xs rounded bg-tooltip flex gap-xs pointer-events-auto select-none origin-$reka-tooltip-content-transform-origin flex-center z-highest backdrop-blur-3xl',
    icon: 'shrink-0',
    arrow: 'fill-tooltip backdrop-blur-3xl',
  },

  variants: {
    loading: {
      true: { icon: 'animate-spin' },
    },
  },
})

export type TooltipStyleSlots = typeof useTooltipStyle['slots']
export type TooltipStyleProps = VariantProps<typeof useTooltipStyle>
