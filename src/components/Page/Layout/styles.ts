import { styled } from 'styles'

export const BodyWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: '100vh',
  height: '100%',

  variants: {
    theme: {
      light: {
        color: '$gray900',
        backgroundColor: '$gray100'
      },
      dark: {
        color: '$gray100',
        backgroundColor: '$gray900'
      }
    }
  },

  defaultVariants: {
    theme: 'light'
  }
})

export const Main = styled('main', {
  maxWidth: '1200px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$md',
  padding: '6.25rem 1.5rem'
})
