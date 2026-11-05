import type { ProjectConfigSchema } from '@weme-ui/schema'
import type { Theme } from '@weme-ui/unocss-preset/types'
import type { InferInput } from 'valibot'
import { presetWemeUI } from '@weme-ui/unocss-preset'
import { mergeConfigs } from 'unocss'
import baseConfig from './.weme/uno.config'
import { unoTheme } from './src/themes/slim.theme'
import wemeConfigJson from './weme.config.json' with { type: 'json' }

const wemeConfig = wemeConfigJson as InferInput<typeof ProjectConfigSchema>

export default mergeConfigs<Theme>([
  baseConfig,
  {
    theme: unoTheme,
    presets: [
      presetWemeUI({
        colors: wemeConfig.unocss?.colors || {},
        cssVars: wemeConfig.unocss?.cssVars || {},
      }),
    ],
  },
])
