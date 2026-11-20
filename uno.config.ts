import type { Theme } from '@weme-ui/unocss-preset'
import { presetWemeUI } from '@weme-ui/unocss-preset'
import { defineConfig, transformerDirectives } from 'unocss'

export default defineConfig<Theme>({
  presets: [presetWemeUI()],

  transformers: [transformerDirectives()],

  safelist: ['isolate'],

  content: {
    pipeline: {
      include: [
        /\.(vue|svelte|[jt]sx|vine.ts|style.[jt]s|mdx?|astro|elm|php|phtml|marko|html)($|\?)/,
      ],
    },
  },
})
