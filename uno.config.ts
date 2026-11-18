import type { Theme } from '@weme-ui/unocss-preset'
import { presetWemeUI } from '@weme-ui/unocss-preset'
import { defineConfig } from 'unocss'

export default defineConfig<Theme>({
  presets: [presetWemeUI()],

  content: {
    pipeline: {
      include: [
        /\.(vue|svelte|[jt]sx|vine.ts|style.[jt]s|mdx?|astro|elm|php|phtml|marko|html)($|\?)/,
      ],
    },
  },
})
