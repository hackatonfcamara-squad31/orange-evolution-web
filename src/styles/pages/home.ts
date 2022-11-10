import { styled } from 'styles'

export const BodyWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: '100vh',

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
  }
})

export const Subtitle = styled('h2', {
  fontWeight: 400,
  fontSize: '$2xl',

  '@bp2': {
    fontSize: '$xl'
  },
  '@bp3': {
    fontSize: '$lg'
  },
  '@bp4': {
    fontSize: '$md'
  }
})
export const Main = styled('main', {
  maxWidth: '1200px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$md',
  padding: '3rem 1.25rem'
})

export const ButtonWrapper = styled('div', {
  width: '300px',
  '@bp3': { width: '270px' },
  '@bp4': { width: '250px' }
})

export const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$md',

  span: {
    fontSize: '$xs'
  }
})
