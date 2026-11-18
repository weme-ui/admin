import { createVariants } from '~/utils/styles'

export const useNavigationMenuStyle = createVariants({
  slots: {
    root: 'flex flex-col gap-3 relative',
    list: '',
    item: '',
    icon: '',
    label: '',
    append: '',
    separator: '',
  },
})

export type NavigationMenuStyleSlots = (typeof useNavigationMenuStyle)['slots']
