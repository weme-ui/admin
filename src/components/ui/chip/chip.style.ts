import type { VariantProps } from '~/utils/styles'
import { createVariants } from '~/utils/styles'

export const useChipStyle = createVariants({
  slots: {
    root: 'flex-inline flex-y-center',
    indicatorWrapper: 'pointer-events-none',
    indicator: 'rounded-full block ring ring-$background-base',
    label: 'leading-none font-medium ml-sm select-none whitespace-nowrap text-nowrap',
  },

  variants: {
    variant: {
      default: {
        indicatorWrapper: 'before:bg-inverted/50',
        indicator: 'bg-inverted',
      },
      accent: {
        indicatorWrapper: 'before:bg-accent/50',
        indicator: 'bg-accent',
      },
      neutral: {
        indicatorWrapper: 'before:bg-neutral/50',
        indicator: 'bg-neutral',
      },
      info: { indicatorWrapper: 'before:bg-info/50', indicator: 'bg-info' },
      success: {
        indicatorWrapper: 'before:bg-success/50',
        indicator: 'bg-success',
      },
      warning: {
        indicatorWrapper: 'before:bg-warning/50',
        indicator: 'bg-warning',
      },
      error: { indicatorWrapper: 'before:bg-error/50', indicator: 'bg-error' },
    },
    size: {
      sm: { indicator: 'size-1.5', label: 'text-xs' },
      md: { indicator: 'size-2', label: 'text-sm' },
      lg: { indicator: 'size-3', label: 'text-sm' },
    },
    animate: {
      true: {
        indicatorWrapper:
          'relative before:(rounded-full block content-[""] inset-0 abs animate-ping)',
      },
    },
  },

  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
})

export type ChipStyleSlots = (typeof useChipStyle)['slots']
export type ChipStyleProps = VariantProps<typeof useChipStyle>
