import type { VariantProps } from '~/utils/styles'
import { createVariants } from '~/utils/styles'

export const useScrollAreaStyle = createVariants({
  slots: {
    root: '',
    viewport: 'outline-none rounded-inherit size-full transition-[color,box-shadow]',
    scrollbar:
      'bg-scrollbar rounded-full flex select-none animate-ease-in-out touch-none data-[state=hidden]:(animate-fade-out animate-duration-100) data-[state=visible]:(animate-fade-in animate-duration-150)',
    thumb:
      'bg-scrollbar-thumb hover:bg-scrollbar-thumb-hover rounded-inherit transition-colors relative',
  },

  variants: {
    orientation: {
      horizontal: {
        scrollbar: 'h-1.5',
      },
      vertical: {
        scrollbar: 'flex-col w-1.5',
      },
    },
  },
})

export type ScrollAreaStyleSlots = (typeof useScrollAreaStyle)['slots']
export type ScrollAreaStyleProps = VariantProps<typeof useScrollAreaStyle>
