import type { Theme } from '@weme-ui/unocss-preset'
import type { UserExtendUnoConfig } from '@weme-ui/utilities'

export default <UserExtendUnoConfig<Theme>>{
  animations: {
    keyframes: {
      'tooltip-in': '{0%{transform:scale(0.95);opacity:0}100%{transform:scale(1);opacity:1}}',
      'tooltip-out': '{0%{transform:scale(1);opacity:1}100%{transform:scale(0.95);opacity:0}}',
    },

    durations: {
      'tooltip-in': '0.1s',
      'tooltip-out': '0.1s',
    },

    timingFns: {
      'tooltip-in': 'ease-out',
      'tooltip-out': 'ease-in',
    },
  },
}
