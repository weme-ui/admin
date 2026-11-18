import type { Theme } from '@weme-ui/unocss-preset'
import type { UserExtendUnoConfig } from '@weme-ui/utilities'
import { hasParseableColor, isThemeNeutralColor } from '@weme-ui/utilities'

export default <UserExtendUnoConfig<Theme>>{
  shortcuts: [
    [
      /^anchor-(.+)$/,
      ([, color]) => {
        if (hasParseableColor(color)) {
          const classNames: string[] = []

          if (isThemeNeutralColor(color)) {
            classNames.push(`text-${color}-11 hover:text-${color}-12`)
          } else {
            classNames.push(`text-${color} hover:text-${color}-11`)
          }

          return classNames.join(' ')
        }
      },
      { autocomplete: `anchor-$colors` },
    ],
  ],
}
