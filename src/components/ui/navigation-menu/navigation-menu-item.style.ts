import type { VariantProps } from '~/utils/styles'
import { createVariants } from '~/utils/styles'

export const useNavigationMenuItemStyle = createVariants({
  slots: {
    root: 'relative',
    base: 'group flex gap-2 items-center',
    icon: '',
    label: 'cursor-default select-none',
    append: 'ml-auto flex flex-center',
  },

  variants: {
    variant: {
      default: {
        icon: 'size-4',
      },
      muted: {
        icon: 'size-3',
      },
    },
    type: {
      label: {},
      link: {
        base: 'text-sm px-3 py-1.5 rounded-md transition-colors data-[active]:(text-highlighted font-medium bg-muted) not-[data-active]:text-foreground hover:not-[data-active]:(text-highlighted bg-muted/50)',
        icon: 'size-4 group-data-[active]:text-highlighted group-not-[[data-active]]:text-subtle group-not-[[data-active]]:group-hover:text-foreground',
      },
      separator: {
        root: 'my-2 b-b b-base h-px',
      },
    },
    disabled: {
      true: { root: 'is-disabled' },
    },
  },

  compoundVariants: [
    {
      type: ['label', 'link'],
      class: {
        root: 'flex flex-col gap-1',
      },
    },

    {
      variant: 'default',
      type: 'label',
      class: {
        base: 'text-sm px-3 py-1.5 text-foreground',
        icon: 'text-subtle',
      },
    },
    {
      variant: 'muted',
      type: 'label',
      class: { base: 'text-xs text-muted px-2 py-1 uppercase' },
    },
  ],

  defaultVariants: {
    variant: 'default',
    type: 'link',
  },
})

export type NavigationMenuItemStyleSlots = typeof useNavigationMenuItemStyle['slots']
export type NavigationMenuItemStyleProps = VariantProps<typeof useNavigationMenuItemStyle>
