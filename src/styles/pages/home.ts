import { styled } from 'styles'

export const BodyWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',

  variants: {
    theme: {
      light: {
        color: '$gray900',
        backgroundColor: '$gray50'
      },
      dark: {
        color: '$gray50',
        backgroundColor: '$gray900'
      }
    }
  }
})

export const Main = styled('main', {
  maxWidth: '1200px',
  display: 'flex',
  flexDirection: 'column',
  gap: '$md'
})
