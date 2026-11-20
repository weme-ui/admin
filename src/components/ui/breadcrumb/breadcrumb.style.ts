import type { VariantProps } from '~/utils/styles'
import { createVariants } from '~/utils/styles'

export const useBreadcrumbStyle = createVariants({
  slots: {
    root: 'flex items-center text-subtle',
    list: 'flex items-center gap-2',
    item: 'flex items-center gap-2',
    link: 'flex items-center gap-2 text-nowrap',
    icon: '',
    separator: 'text-muted',
    separatorIcon: '',
  },

  variants: {
    active: {
      true: {
        item: 'text-highlighted font-medium',
      },
    },
    disabled: {
      true: {
        item: 'is-disabled',
      },
    },
    linkable: {
      true: {
        link: 'hover:(text-highlighted underline underline-offset-2)',
      },
    },
  },
})

export type BreadcrumbStyleSlots = (typeof useBreadcrumbStyle)['slots']
export type BreadcrumbStyleProps = VariantProps<typeof useBreadcrumbStyle>
