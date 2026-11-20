import type { VariantProps } from '~/utils/styles'
import { createVariants } from '~/utils/styles'

export const useAvatarStyle = createVariants({
  slots: {
    root: 'rounded-full flex shrink-0 select-none flex-center relative',
    image: 'rounded-inherit size-full object-cover',
    fallback: 'leading-none font-semibold rounded-inherit flex size-full text-nowrap flex-center',
    icon: 'shrink-0',
  },

  variants: {
    color: {
      default: { fallback: 'text-highlighted bg-muted' },
      accent: { fallback: 'text-accent bg-accent-3' },
      neutral: { fallback: 'text-neutral-11 bg-neutral-3' },
      info: { fallback: 'text-info bg-info-3' },
      success: { fallback: 'text-success bg-success-3' },
      warning: { fallback: 'text-warning bg-warning-3' },
      error: { fallback: 'text-error bg-error-3' },
      inverse: { fallback: 'text-inverted bg-inverted' },
    },
    size: {
      xs: { root: 'size-5', fallback: 'text-2.5' },
      sm: { root: 'size-6', fallback: 'text-3' },
      md: { root: 'size-8', fallback: 'text-3' },
      lg: { root: 'size-10', fallback: 'text-3.5' },
      xl: { root: 'size-16', fallback: 'text-6' },
      '2xl': { root: 'size-20', fallback: 'text-10' },
      '3xl': { root: 'size-24', fallback: 'text-12' },
      '4xl': { root: 'size-32', fallback: 'text-16' },
    },
  },

  defaultVariants: {
    color: 'default',
    size: 'md',
  },
})

export type AvatarStyleSlots = (typeof useAvatarStyle)['slots']
export type AvatarStyleProps = VariantProps<typeof useAvatarStyle>
