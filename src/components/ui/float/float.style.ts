import type { VariantProps } from '~/utils/styles'
import { createVariants } from '~/utils/styles'

export const useFloatStyle = createVariants({
  base: 'flex size-fit flex-center abs',

  variants: {
    placement: {
      'top-left': '',
      'top': '',
      'top-right': '',
      'left': '',
      'center': '',
      'right': '',
      'bottom-left': '',
      'bottom': '',
      'bottom-right': '',
    },
  },

  compoundVariants: [
    {
      placement: ['top', 'top-left', 'top-right'],
      class: 'inset-bs-$offset-y inset-be-auto -translate-y-[50%]',
    },
    {
      placement: ['bottom', 'bottom-left', 'bottom-right'],
      class: 'inset-bs-auto inset-be-$offset-y translate-y-[50%]',
    },
    {
      placement: ['left', 'center', 'right'],
      class: 'inset-block-[50%] -translate-y-[50%]',
    },

    {
      placement: ['left', 'top-left', 'bottom-left'],
      class: 'inset-s-$offset-x inset-e-auto -translate-x-[50%]',
    },
    {
      placement: ['right', 'top-right', 'bottom-right'],
      class: 'inset-s-auto inset-e-$offset-x translate-x-[50%]',
    },

    {
      placement: ['top', 'center', 'bottom'],
      class: 'inset-inline-[50%] -translate-x-[50%]',
    },
  ],

  defaultVariants: {
    placement: 'top-right',
  },
})

export type FloatStyleProps = VariantProps<typeof useFloatStyle>
