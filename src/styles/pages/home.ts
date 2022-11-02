import { styled } from 'styles'

export const Main = styled('main', {
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
