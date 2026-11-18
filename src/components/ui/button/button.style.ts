import type { VariantProps } from '~/utils/styles'
import { createVariants } from '~/utils/styles'

export const useButtonStyle = createVariants({
  slots: {
    root: 'font-medium flex-(inline center) w-fit cursor-pointer select-none text-nowrap relative',
    icon: 'shrink-0',
  },

  variants: {
    variant: {
      solid: {},
      soft: {},
      outline: {},
      ghost: {},
      plain: {},
      inverse: {},
    },
    color: {
      default: {},
      accent: {},
      neutral: {},
      info: {},
      error: {},
      success: {},
      warning: {},
    },
    size: {
      sm: { root: 'text-xs px-md gap-xs h-6', icon: 'size-3' },
      md: { root: 'text-sm px-lg gap-sm h-8', icon: 'size-3.5' },
      lg: { root: 'text-base px-xl gap-md h-10', icon: 'size-4' },
    },
    disabled: {
      true: { root: 'is-disabled' },
    },
    loading: {
      true: { root: 'is-loading', icon: 'animate-spin' },
    },
    scalable: { true: {} },
    unstyled: {
      false: { root: 'rounded' },
    },
  },

  compoundVariants: [
    // #region default
    {
      variant: 'solid',
      color: 'default',
      unstyled: false,
      class: {
        root: 'bg-inverted text-inverted hover:bg-inverted/90 focus-visible:(outline-accent-7 z-raised)',
      },
    },
    {
      variant: 'soft',
      color: 'default',
      unstyled: false,
      class: {
        root: 'bg-muted text-highlighted hover:bg-elevated focus-visible:(outline-accent-7 z-raised)',
      },
    },
    {
      variant: 'outline',
      color: 'default',
      unstyled: false,
      class: {
        root: 'b b-default text-highlighted hover:(bg-elevated b-elevated) focus-visible:(outline-accent-7 z-raised)',
      },
    },
    {
      variant: 'ghost',
      color: 'default',
      unstyled: false,
      class: {
        root: 'text-highlighted hover:bg-elevated focus-visible:(outline-accent-7 z-raised)',
      },
    },
    {
      variant: 'plain',
      color: 'default',
      unstyled: false,
      class: {
        root: 'text-default hover:text-highlighted focus-visible:(outline-accent-7 z-raised)',
      },
    },
    {
      variant: 'inverse',
      color: 'default',
      unstyled: false,
      class: {
        root: 'text-bg-inverted bg-text-inverted hover:(text-highlighted bg-elevated) focus-visible:(outline-accent-7 z-raised)',
      },
    },
    // #endregion default

    // #region accent
    {
      variant: 'solid',
      color: 'accent',
      unstyled: false,
      class: { root: 'btn-accent' },
    },
    {
      variant: 'soft',
      color: 'accent',
      unstyled: false,
      class: { root: 'btn-accent-soft' },
    },
    {
      variant: 'outline',
      color: 'accent',
      unstyled: false,
      class: { root: 'btn-accent-outline' },
    },
    {
      variant: 'ghost',
      color: 'accent',
      unstyled: false,
      class: { root: 'btn-accent-ghost' },
    },
    {
      variant: 'plain',
      color: 'accent',
      unstyled: false,
      class: { root: 'btn-accent-plain' },
    },
    {
      variant: 'inverse',
      color: 'accent',
      unstyled: false,
      class: { root: 'btn-accent-inverse' },
    },
    // #endregion accent

    // #region neutral
    {
      variant: 'solid',
      color: 'neutral',
      unstyled: false,
      class: { root: 'btn-neutral' },
    },
    {
      variant: 'soft',
      color: 'neutral',
      unstyled: false,
      class: { root: 'btn-neutral-soft' },
    },
    {
      variant: 'outline',
      color: 'neutral',
      unstyled: false,
      class: { root: 'btn-neutral-outline' },
    },
    {
      variant: 'ghost',
      color: 'neutral',
      unstyled: false,
      class: { root: 'btn-neutral-ghost' },
    },
    {
      variant: 'plain',
      color: 'neutral',
      unstyled: false,
      class: { root: 'btn-neutral-plain' },
    },
    {
      variant: 'inverse',
      color: 'neutral',
      unstyled: false,
      class: { root: 'btn-neutral-inverse' },
    },
    // #endregion neutral

    // #region info
    {
      variant: 'solid',
      color: 'info',
      unstyled: false,
      class: { root: 'btn-info' },
    },
    {
      variant: 'soft',
      color: 'info',
      unstyled: false,
      class: { root: 'btn-info-soft' },
    },
    {
      variant: 'outline',
      color: 'info',
      unstyled: false,
      class: { root: 'btn-info-outline' },
    },
    {
      variant: 'ghost',
      color: 'info',
      unstyled: false,
      class: { root: 'btn-info-ghost' },
    },
    {
      variant: 'plain',
      color: 'info',
      unstyled: false,
      class: { root: 'btn-info-plain' },
    },
    {
      variant: 'inverse',
      color: 'info',
      unstyled: false,
      class: { root: 'btn-info-inverse' },
    },
    // #endregion info

    // #region error
    {
      variant: 'solid',
      color: 'error',
      unstyled: false,
      class: { root: 'btn-error' },
    },
    {
      variant: 'soft',
      color: 'error',
      unstyled: false,
      class: { root: 'btn-error-soft' },
    },
    {
      variant: 'outline',
      color: 'error',
      unstyled: false,
      class: { root: 'btn-error-outline' },
    },
    {
      variant: 'ghost',
      color: 'error',
      unstyled: false,
      class: { root: 'btn-error-ghost' },
    },
    {
      variant: 'plain',
      color: 'error',
      unstyled: false,
      class: { root: 'btn-error-plain' },
    },
    {
      variant: 'inverse',
      color: 'error',
      unstyled: false,
      class: { root: 'btn-error-inverse' },
    },
    // #endregion error

    // #region success
    {
      variant: 'solid',
      color: 'success',
      unstyled: false,
      class: { root: 'btn-success' },
    },
    {
      variant: 'soft',
      color: 'success',
      unstyled: false,
      class: { root: 'btn-success-soft' },
    },
    {
      variant: 'outline',
      color: 'success',
      unstyled: false,
      class: { root: 'btn-success-outline' },
    },
    {
      variant: 'ghost',
      color: 'success',
      unstyled: false,
      class: { root: 'btn-success-ghost' },
    },
    {
      variant: 'plain',
      color: 'success',
      unstyled: false,
      class: { root: 'btn-success-plain' },
    },
    {
      variant: 'inverse',
      color: 'success',
      unstyled: false,
      class: { root: 'btn-success-inverse' },
    },
    // #endregion success

    // #region warning
    {
      variant: 'solid',
      color: 'warning',
      unstyled: false,
      class: { root: 'btn-warning' },
    },
    {
      variant: 'soft',
      color: 'warning',
      unstyled: false,
      class: { root: 'btn-warning-soft' },
    },
    {
      variant: 'outline',
      color: 'warning',
      unstyled: false,
      class: { root: 'btn-warning-outline' },
    },
    {
      variant: 'ghost',
      color: 'warning',
      unstyled: false,
      class: { root: 'btn-warning-ghost' },
    },
    {
      variant: 'plain',
      color: 'warning',
      unstyled: false,
      class: { root: 'btn-warning-plain' },
    },
    {
      variant: 'inverse',
      color: 'warning',
      unstyled: false,
      class: { root: 'btn-warning-inverse' },
    },
    // #endregion warning

    {
      disabled: false,
      loading: false,
      scalable: true,
      unstyled: false,
      class: { root: 'transition-all duration-200 ease-out aria-[pressed=true]:scale-97' },
    },
  ],

  defaultVariants: {
    variant: 'solid',
    color: 'default',
    size: 'md',
    scalable: true,
    unstyled: false,
  },
})

export type ButtonStyleSlots = (typeof useButtonStyle)['slots']
export type ButtonStyleProps = VariantProps<typeof useButtonStyle>
