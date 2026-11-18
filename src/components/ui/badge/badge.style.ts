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
        root: 'b b-default text-highlighted',
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
        root: 'bg-default text-highlighted',
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
        root: 'box-accent',
      },
    },
    {
      color: 'accent',
      variant: 'soft',
      class: {
        root: 'box-accent-soft',
      },
    },
    {
      color: 'accent',
      variant: 'outline',
      class: {
        root: 'box-accent-outline',
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
        root: 'box-accent-inverse',
      },
    },
    {
      color: 'accent',
      variant: 'solid',
      clickable: true,
      class: {
        root: 'btn-accent',
      },
    },
    {
      color: 'accent',
      variant: 'soft',
      clickable: true,
      class: {
        root: 'btn-accent-soft',
      },
    },
    {
      color: 'accent',
      variant: 'outline',
      clickable: true,
      class: {
        root: 'btn-accent-outline',
      },
    },
    {
      color: 'accent',
      variant: 'plain',
      clickable: true,
      class: {
        root: 'btn-accent-plain',
      },
    },
    {
      color: 'accent',
      variant: 'inverted',
      clickable: true,
      class: {
        root: 'btn-accent-inverse',
      },
    },
    // #endregion

    // #region neutral
    {
      color: 'neutral',
      variant: 'solid',
      class: {
        root: 'box-neutral',
      },
    },
    {
      color: 'neutral',
      variant: 'soft',
      class: {
        root: 'box-neutral-soft',
      },
    },
    {
      color: 'neutral',
      variant: 'outline',
      class: {
        root: 'box-neutral-outline',
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
        root: 'box-neutral-inverse',
      },
    },
    {
      color: 'neutral',
      variant: 'solid',
      clickable: true,
      class: {
        root: 'btn-neutral',
      },
    },
    {
      color: 'neutral',
      variant: 'soft',
      clickable: true,
      class: {
        root: 'btn-neutral-soft',
      },
    },
    {
      color: 'neutral',
      variant: 'outline',
      clickable: true,
      class: {
        root: 'btn-neutral-outline',
      },
    },
    {
      color: 'neutral',
      variant: 'plain',
      clickable: true,
      class: {
        root: 'btn-neutral-plain',
      },
    },
    {
      color: 'neutral',
      variant: 'inverted',
      clickable: true,
      class: {
        root: 'btn-neutral-inverse',
      },
    },
    // #endregion

    // #region info
    {
      color: 'info',
      variant: 'solid',
      class: {
        root: 'box-info',
      },
    },
    {
      color: 'info',
      variant: 'soft',
      class: {
        root: 'box-info-soft',
      },
    },
    {
      color: 'info',
      variant: 'outline',
      class: {
        root: 'box-info-outline',
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
        root: 'box-info-inverse',
      },
    },
    {
      color: 'info',
      variant: 'solid',
      clickable: true,
      class: {
        root: 'btn-info',
      },
    },
    {
      color: 'info',
      variant: 'soft',
      clickable: true,
      class: {
        root: 'btn-info-soft',
      },
    },
    {
      color: 'info',
      variant: 'outline',
      clickable: true,
      class: {
        root: 'btn-info-outline',
      },
    },
    {
      color: 'info',
      variant: 'plain',
      clickable: true,
      class: {
        root: 'btn-info-plain',
      },
    },
    {
      color: 'info',
      variant: 'inverted',
      clickable: true,
      class: {
        root: 'btn-info-inverse',
      },
    },
    // #endregion

    // #region success
    {
      color: 'success',
      variant: 'solid',
      class: {
        root: 'box-success',
      },
    },
    {
      color: 'success',
      variant: 'soft',
      class: {
        root: 'box-success-soft',
      },
    },
    {
      color: 'success',
      variant: 'outline',
      class: {
        root: 'box-success-outline',
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
        root: 'box-success-inverse',
      },
    },
    {
      color: 'success',
      variant: 'solid',
      clickable: true,
      class: {
        root: 'btn-success',
      },
    },
    {
      color: 'success',
      variant: 'soft',
      clickable: true,
      class: {
        root: 'btn-success-soft',
      },
    },
    {
      color: 'success',
      variant: 'outline',
      clickable: true,
      class: {
        root: 'btn-success-outline',
      },
    },
    {
      color: 'success',
      variant: 'plain',
      clickable: true,
      class: {
        root: 'btn-success-plain',
      },
    },
    {
      color: 'success',
      variant: 'inverted',
      clickable: true,
      class: {
        root: 'btn-success-inverse',
      },
    },
    // #endregion

    // #region warning
    {
      color: 'warning',
      variant: 'solid',
      class: {
        root: 'box-warning',
      },
    },
    {
      color: 'warning',
      variant: 'soft',
      class: {
        root: 'box-warning-soft',
      },
    },
    {
      color: 'warning',
      variant: 'outline',
      class: {
        root: 'box-warning-outline',
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
        root: 'box-warning-inverse',
      },
    },
    {
      color: 'warning',
      variant: 'solid',
      clickable: true,
      class: {
        root: 'btn-warning',
      },
    },
    {
      color: 'warning',
      variant: 'soft',
      clickable: true,
      class: {
        root: 'btn-warning-soft',
      },
    },
    {
      color: 'warning',
      variant: 'outline',
      clickable: true,
      class: {
        root: 'btn-warning-outline',
      },
    },
    {
      color: 'warning',
      variant: 'plain',
      clickable: true,
      class: {
        root: 'btn-warning-plain',
      },
    },
    {
      color: 'warning',
      variant: 'inverted',
      clickable: true,
      class: {
        root: 'btn-warning-inverse',
      },
    },
    // #endregion

    // #region error
    {
      color: 'error',
      variant: 'solid',
      class: {
        root: 'box-error',
      },
    },
    {
      color: 'error',
      variant: 'soft',
      class: {
        root: 'box-error-soft',
      },
    },
    {
      color: 'error',
      variant: 'outline',
      class: {
        root: 'box-error-outline',
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
        root: 'box-error-inverse',
      },
    },
    {
      color: 'error',
      variant: 'solid',
      clickable: true,
      class: {
        root: 'btn-error',
      },
    },
    {
      color: 'error',
      variant: 'soft',
      clickable: true,
      class: {
        root: 'btn-error-soft',
      },
    },
    {
      color: 'error',
      variant: 'outline',
      clickable: true,
      class: {
        root: 'btn-error-outline',
      },
    },
    {
      color: 'error',
      variant: 'plain',
      clickable: true,
      class: {
        root: 'btn-error-plain',
      },
    },
    {
      color: 'error',
      variant: 'inverted',
      clickable: true,
      class: {
        root: 'btn-error-inverse',
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
