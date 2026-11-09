import type { VariantProps } from '~/utils/styles'
import { createVariants } from '~/utils/styles'

export const useBadgeStyle = createVariants({
  slots: {
    root: 'leading-none font-medium align-middle rounded flex-inline select-none text-nowrap flex-center',
    icon: 'shrink-0',
  },

  variants: {
    color: {
      default: {},
      accent: {},
      neutral: {},
      info: {},
      success: {},
      warning: {},
      error: {},
    },
    variant: {
      solid: {},
      soft: {},
      outline: {},
      plain: {},
      inverted: {},
    },
    size: {
      sm: { root: 'text-xs px-1 h-5', icon: 'size-3' },
      md: { root: 'text-xs px-1.5 h-6', icon: 'size-3' },
      lg: { root: 'text-sm px-3 h-8', icon: 'size-4' },
    },
    iconOnly: { true: {} },
    clickable: {
      true: {
        root: 'cursor-pointer transition-colors duration-200 ease-out relative aria-[pressed=true]:scale-97',
      },
    },
  },

  compoundVariants: [
    // #region default
    {
      color: 'default',
      variant: 'solid',
      class: {
        root: 'bg-inverted text-inverted',
      },
    },
    {
      color: 'default',
      variant: 'soft',
      class: {
        root: 'bg-muted text-highlighted',
      },
    },
    {
      color: 'default',
      variant: 'outline',
      class: {
        root: 'b b-base text-highlighted',
      },
    },
    {
      color: 'default',
      variant: 'plain',
      class: {
        root: 'text-highlighted',
      },
    },
    {
      color: 'default',
      variant: 'inverted',
      class: {
        root: 'bg-base text-highlighted',
      },
    },
    {
      color: 'default',
      variant: 'solid',
      clickable: true,
      class: {
        root: 'hover:(bg-inverted/90 text-inverted)',
      },
    },
    {
      color: 'default',
      variant: ['soft', 'outline', 'plain', 'inverted'],
      clickable: true,
      class: {
        root: 'hover:(bg-elevated text-highlighted)',
      },
    },
    // #endregion

    // #region accent
    {
      color: 'accent',
      variant: 'solid',
      class: {
        root: 'plain-accent',
      },
    },
    {
      color: 'accent',
      variant: 'soft',
      class: {
        root: 'plain-accent-soft',
      },
    },
    {
      color: 'accent',
      variant: 'outline',
      class: {
        root: 'plain-accent-outline',
      },
    },
    {
      color: 'accent',
      variant: 'plain',
      class: {
        root: 'text-accent',
      },
    },
    {
      color: 'accent',
      variant: 'inverted',
      class: {
        root: 'plain-accent-inverse',
      },
    },
    {
      color: 'accent',
      variant: 'solid',
      clickable: true,
      class: {
        root: 'fancy-accent',
      },
    },
    {
      color: 'accent',
      variant: 'soft',
      clickable: true,
      class: {
        root: 'fancy-accent-soft',
      },
    },
    {
      color: 'accent',
      variant: 'outline',
      clickable: true,
      class: {
        root: 'fancy-accent-outline',
      },
    },
    {
      color: 'accent',
      variant: 'plain',
      clickable: true,
      class: {
        root: 'fancy-accent-plain',
      },
    },
    {
      color: 'accent',
      variant: 'inverted',
      clickable: true,
      class: {
        root: 'fancy-accent-inverse',
      },
    },
    // #endregion

    // #region neutral
    {
      color: 'neutral',
      variant: 'solid',
      class: {
        root: 'plain-neutral',
      },
    },
    {
      color: 'neutral',
      variant: 'soft',
      class: {
        root: 'plain-neutral-soft',
      },
    },
    {
      color: 'neutral',
      variant: 'outline',
      class: {
        root: 'plain-neutral-outline',
      },
    },
    {
      color: 'neutral',
      variant: 'plain',
      class: {
        root: 'text-neutral',
      },
    },
    {
      color: 'neutral',
      variant: 'inverted',
      class: {
        root: 'plain-neutral-inverse',
      },
    },
    {
      color: 'neutral',
      variant: 'solid',
      clickable: true,
      class: {
        root: 'fancy-neutral',
      },
    },
    {
      color: 'neutral',
      variant: 'soft',
      clickable: true,
      class: {
        root: 'fancy-neutral-soft',
      },
    },
    {
      color: 'neutral',
      variant: 'outline',
      clickable: true,
      class: {
        root: 'fancy-neutral-outline',
      },
    },
    {
      color: 'neutral',
      variant: 'plain',
      clickable: true,
      class: {
        root: 'fancy-neutral-plain',
      },
    },
    {
      color: 'neutral',
      variant: 'inverted',
      clickable: true,
      class: {
        root: 'fancy-neutral-inverse',
      },
    },
    // #endregion

    // #region info
    {
      color: 'info',
      variant: 'solid',
      class: {
        root: 'plain-info',
      },
    },
    {
      color: 'info',
      variant: 'soft',
      class: {
        root: 'plain-info-soft',
      },
    },
    {
      color: 'info',
      variant: 'outline',
      class: {
        root: 'plain-info-outline',
      },
    },
    {
      color: 'info',
      variant: 'plain',
      class: {
        root: 'text-info',
      },
    },
    {
      color: 'info',
      variant: 'inverted',
      class: {
        root: 'plain-info-inverse',
      },
    },
    {
      color: 'info',
      variant: 'solid',
      clickable: true,
      class: {
        root: 'fancy-info',
      },
    },
    {
      color: 'info',
      variant: 'soft',
      clickable: true,
      class: {
        root: 'fancy-info-soft',
      },
    },
    {
      color: 'info',
      variant: 'outline',
      clickable: true,
      class: {
        root: 'fancy-info-outline',
      },
    },
    {
      color: 'info',
      variant: 'plain',
      clickable: true,
      class: {
        root: 'fancy-info-plain',
      },
    },
    {
      color: 'info',
      variant: 'inverted',
      clickable: true,
      class: {
        root: 'fancy-info-inverse',
      },
    },
    // #endregion

    // #region success
    {
      color: 'success',
      variant: 'solid',
      class: {
        root: 'plain-success',
      },
    },
    {
      color: 'success',
      variant: 'soft',
      class: {
        root: 'plain-success-soft',
      },
    },
    {
      color: 'success',
      variant: 'outline',
      class: {
        root: 'plain-success-outline',
      },
    },
    {
      color: 'success',
      variant: 'plain',
      class: {
        root: 'text-success',
      },
    },
    {
      color: 'success',
      variant: 'inverted',
      class: {
        root: 'plain-success-inverse',
      },
    },
    {
      color: 'success',
      variant: 'solid',
      clickable: true,
      class: {
        root: 'fancy-success',
      },
    },
    {
      color: 'success',
      variant: 'soft',
      clickable: true,
      class: {
        root: 'fancy-success-soft',
      },
    },
    {
      color: 'success',
      variant: 'outline',
      clickable: true,
      class: {
        root: 'fancy-success-outline',
      },
    },
    {
      color: 'success',
      variant: 'plain',
      clickable: true,
      class: {
        root: 'fancy-success-plain',
      },
    },
    {
      color: 'success',
      variant: 'inverted',
      clickable: true,
      class: {
        root: 'fancy-success-inverse',
      },
    },
    // #endregion

    // #region warning
    {
      color: 'warning',
      variant: 'solid',
      class: {
        root: 'plain-warning',
      },
    },
    {
      color: 'warning',
      variant: 'soft',
      class: {
        root: 'plain-warning-soft',
      },
    },
    {
      color: 'warning',
      variant: 'outline',
      class: {
        root: 'plain-warning-outline',
      },
    },
    {
      color: 'warning',
      variant: 'plain',
      class: {
        root: 'text-warning',
      },
    },
    {
      color: 'warning',
      variant: 'inverted',
      class: {
        root: 'plain-warning-inverse',
      },
    },
    {
      color: 'warning',
      variant: 'solid',
      clickable: true,
      class: {
        root: 'fancy-warning',
      },
    },
    {
      color: 'warning',
      variant: 'soft',
      clickable: true,
      class: {
        root: 'fancy-warning-soft',
      },
    },
    {
      color: 'warning',
      variant: 'outline',
      clickable: true,
      class: {
        root: 'fancy-warning-outline',
      },
    },
    {
      color: 'warning',
      variant: 'plain',
      clickable: true,
      class: {
        root: 'fancy-warning-plain',
      },
    },
    {
      color: 'warning',
      variant: 'inverted',
      clickable: true,
      class: {
        root: 'fancy-warning-inverse',
      },
    },
    // #endregion

    // #region error
    {
      color: 'error',
      variant: 'solid',
      class: {
        root: 'plain-error',
      },
    },
    {
      color: 'error',
      variant: 'soft',
      class: {
        root: 'plain-error-soft',
      },
    },
    {
      color: 'error',
      variant: 'outline',
      class: {
        root: 'plain-error-outline',
      },
    },
    {
      color: 'error',
      variant: 'plain',
      class: {
        root: 'text-error',
      },
    },
    {
      color: 'error',
      variant: 'inverted',
      class: {
        root: 'plain-error-inverse',
      },
    },
    {
      color: 'error',
      variant: 'solid',
      clickable: true,
      class: {
        root: 'fancy-error',
      },
    },
    {
      color: 'error',
      variant: 'soft',
      clickable: true,
      class: {
        root: 'fancy-error-soft',
      },
    },
    {
      color: 'error',
      variant: 'outline',
      clickable: true,
      class: {
        root: 'fancy-error-outline',
      },
    },
    {
      color: 'error',
      variant: 'plain',
      clickable: true,
      class: {
        root: 'fancy-error-plain',
      },
    },
    {
      color: 'error',
      variant: 'inverted',
      clickable: true,
      class: {
        root: 'fancy-error-inverse',
      },
    },
    // #endregion

    {
      size: 'sm',
      iconOnly: false,
      class: { icon: 'mr-1' },
    },
    {
      size: 'md',
      iconOnly: false,
      class: { icon: 'mr-1' },
    },
    {
      size: 'lg',
      iconOnly: false,
      class: { icon: 'mr-1.5' },
    },
  ],

  defaultVariants: {
    color: 'default',
    variant: 'solid',
    size: 'md',
  },
})

export type BadgeStyleSlots = (typeof useBadgeStyle)['slots']
export type BadgeStyleProps = VariantProps<typeof useBadgeStyle>
