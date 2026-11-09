import type { Theme } from '@weme-ui/unocss-preset/types'

export const unoTheme = {
  animation: {
    keyframes: {
      carousel:
        '{0%,100%{width:50%}0%{transform:translateX(-100%)}100%{transform:translateX(200%)}}',

      // Toast
      'toast-close':
        '{0%{transform:var(--transform)}100%{transform:translateY(calc((var(--offset)-var(--height))*var(--translate-factor)))}}',
      'toast-collapse':
        '{0%{transform:var(--transform)}100%{transform:translateY(calc((var(--before)-var(--height))*var(--gap))) scale(var(--scale))}}',
      'toast-swipe-left':
        '{0%{transform:translateX(0) translateY(var(--translate))}100%{transform:translateX(-100%) translateY(var(--translate))}}',
      'toast-swipe-right':
        '{0%{transform:translateX(0) translateY(var(--translate))}100%{transform:translateX(100%) translateY(var(--translate))}}',
      'toast-swipe-up':
        '{0%{transform:translateX(var(--translate)) translateY(0)}100% {transform:translateX(var(--translate)) translateY(-100%)}}',
      'toast-swipe-down':
        '{0%{transform:translateX(var(--translate)) translateY(0)}100%{transform:translateX(var(--translate)) translateY(100%)}}',
    },
    durations: {
      carousel: '2s',

      // Toast
      'toast-close': '0.2s',
      'toast-collapse': '0.2s',
      'toast-swipe-left': '0.2s',
      'toast-swipe-right': '0.2s',
      'toast-swipe-up': '0.2s',
      'toast-swipe-down': '0.2s',
    },
    timingFns: {
      carousel: 'linear',

      // Toast
      'toast-close': 'ease-in-out',
      'toast-collapse': 'ease-in-out',
      'toast-swipe-left': 'ease-out',
      'toast-swipe-right': 'ease-out',
      'toast-swipe-up': 'ease-out',
      'toast-swipe-down': 'ease-out',
    },
    counts: {
      carousel: 'infinite',
    },
  },
} satisfies Theme
