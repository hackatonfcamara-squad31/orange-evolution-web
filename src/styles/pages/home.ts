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
        backgroundColor: '#F5F5F5'
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
  }
})
export const Main = styled('main', {
  maxWidth: '1200px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$sm',
  padding: '1rem 1.5rem',
  margin: 'auto'
})

export const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$md',

  span: {
    fontSize: '$xs'
  }
})
