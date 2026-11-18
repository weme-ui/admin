import type { ClassValue } from 'clsx'
import type { VariantProps } from 'tailwind-variants'
import { clsx } from 'clsx'
import { extendTailwindMerge, validators } from 'tailwind-merge'
import { createTV } from 'tailwind-variants/lite'

export { type VariantProps }

export const twMerge = extendTailwindMerge<any>({
  extend: {
    theme: {
      text: [(value: string) => !Number.isNaN(Number(value))],
    },
    classGroups: {
      btn: [{ btn: [validators.isAny] }],
      box: [{ box: [validators.isAny] }],
      anchor: [{ anchor: [validators.isAny] }],
    },
  },
})

export type ComponentProps<Props, Key extends string> =
  Props extends Record<string, any> ? Props[Key] : never

export const createVariants = createTV({
  twMerge,
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
