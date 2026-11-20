import type { IconifyIconProps } from '@iconify/vue'
import type {
  AvatarFallbackProps,
  AvatarImageEmits,
  AvatarImageProps,
  AvatarRootProps,
} from 'reka-ui'
import type { AvatarStyleProps, AvatarStyleSlots } from './avatar.style'

export interface AvatarProps extends AvatarRootProps {
  crossOrigin?: AvatarImageProps['crossOrigin']
  referrerPolicy?: AvatarImageProps['referrerPolicy']
  delayMs?: AvatarFallbackProps['delayMs']
  color?: AvatarStyleProps['color']
  size?: AvatarStyleProps['size']
  src?: string
  fallback?: string
  icon?: IconifyIconProps['icon']
  class?: any
  ui?: Partial<AvatarStyleSlots>
}

export interface AvatarEmits extends AvatarImageEmits {}
