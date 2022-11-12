import { createStitches } from '@stitches/react'

export const {
  config,
  theme,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  createTheme
} = createStitches({
  theme: {
    colors: {
      white: '#fff',
      black: '#000',

      orange600: '#FF5A23',
      orange500: '#FF7823',
      orange400: '#FFA000',

      green900: '#14532d',
      green800: '#166534',
      green700: '#15803d',
      green600: '#16a34a',
      green500: '#22c55e',
      green400: '#4ade80',
      green300: '#86efac',
      green200: '#bbf7d0',
      green100: '#dcfce7',
      green50: '#f0fdf4',

      red900: '#7f1d1d',
      red800: '#991b1b',
      red700: '#b91c1c',
      red600: '#dc2626',
      red500: '#ef4444',
      red400: '#f87171',
      red300: '#fca5a5',
      red200: '#fecaca',
      red100: '#fee2e2',
      red50: '#fef2f2',

      gray900: '#171717',
      gray800: '#262626',
      gray700: '#404040',
      gray600: '#525252',
      gray500: '#737373',
      gray400: '#a3a3a3',
      gray300: '#d4d4d4',
      gray200: '#e5e5e5',
      gray100: '#f5f5f5',
      gray50: '#fafafa'
    },

    space: {
      xs: '0.5rem', // 8px
      sm: '0.75rem', // 12px
      md: '1.25rem', // 20px
      lg: '1.5rem', // 24px
      xl: '2rem', // 32px
      '2xl': '2.5rem', // 40px
      '3xl': '3rem' // 48px
    },

    lineHeights: {
      xs: '1.25rem', // 20px
      sm: '1.5rem', // 24px
      md: '1.75rem', // 28px
      lg: '2rem', // 32px
      xl: '2.25rem', // 36px
      '2xl': '2.5rem' // 40px
    },

    fonts: {
      montserrat: 'Montserrat, sans-serif'
    },

    fontSizes: {
      xs: '0.875rem', // 14px
      sm: '1rem', // 16px
      md: '1.125rem', // 18px
      lg: '1.25rem', // 20px
      xl: '1.5rem', // 24px
      '2xl': '2rem', // 32px
      '3xl': '2.5rem' // 40px
    },

    transitions: {
      default: 'all 0.3s ease-in-out',
      fast: 'all 0.15s ease-in-out',
      slow: 'all 0.45s ease-in-out'
    },

    shadows: {
      default: '4px 4px 8px rgba(0, 0, 0, 0.25)'
    },

    radii: {
      sm: '0.125rem', // 2px
      md: '0.25rem', // 4px
      lg: '0.5rem', // 8px
      xl: '0.75rem', // 12px
      '2xl': '1rem', // 16px
      full: '9999px'
    }
  },

  media: {
    bp1: '(max-width: 1200px)',
    bp2: '(max-width: 768px)',
    bp3: '(max-width: 576px)',
    bp4: '(max-width: 480px)'
  }
})
