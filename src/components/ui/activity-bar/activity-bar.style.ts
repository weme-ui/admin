import { createVariants } from '~/utils/styles'

export const useActivityBarStyle = createVariants({
  slots: {
    root: 'w-activity-bar relative',
    header: 'flex-center',
    content: 'py-2 grow',
    footer: '',
    group: 'py-2 gap-2 items-center',
    item: 'text-subtle p-2 rounded-lg flex transition-colors flex-center relative aria-[current=true]:(text-activity-bar-active bg-activity-bar-active) disabled:is-disabled hover:not-[[aria-current=true]]:text-activity-bar-active',
    itemIcon: 'shrink-0 size-4',
    itemChip: 'rounded-full bg-accent size-1.5',
  },

  compoundSlots: [
    {
      slots: ['root', 'header', 'content', 'footer', 'group'],
      class: 'flex flex-col',
    },
  ],
})

export type ActivityBarStyleSlots = (typeof useActivityBarStyle)['slots']
