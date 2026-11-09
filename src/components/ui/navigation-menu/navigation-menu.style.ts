import { createVariants } from '~/utils/styles'

export const useNavigationMenuStyle = createVariants({
  slots: {
    root: 'flex flex-col gap-3 relative',
    list: 'py-1 flex flex-col gap-1',
    collapsibleIcon: '',
    item: 'flex flex-col gap-1 data-[disabled]:is-disabled',
    label: 'text-xs text-muted px-2 py-1 cursor-default select-none uppercase',
    labelIcon: 'size-3',
    link: 'group text-sm px-3 py-1.5 rounded-md transition-colors data-[active]:(text-highlighted font-medium bg-muted) not-[data-active]:text-foreground hover:not-[data-active]:(text-highlighted bg-muted/50)',
    linkIcon: 'size-4 group-data-[active]:text-highlighted group-not-[[data-active]]:text-subtle group-not-[[data-active]]:group-hover:text-foreground',
    append: 'ml-auto flex flex-center',
    subList: 'pl-6 flex flex-col gap-1',
    subLabel: 'group text-sm text-foreground px-3 py-1.5',
    subLabelIcon: 'size-4',
    separator: 'my-2 b-b b-base h-px',
  },

  compoundSlots: [
    {
      slots: ['label', 'link', 'subLabel'],
      class: 'flex gap-2 items-center',
    },
  ],
})

export type NavigationMenuStyleSlots = typeof useNavigationMenuStyle['slots']
