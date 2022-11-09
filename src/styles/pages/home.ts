import { styled } from 'styles'

export const BodyWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: '100vh',
  // padding: '3rem 1.25rem',

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

export const H2 = styled('h2', {
  fontWeight: 400,
  fontSize: '$2xl'
})
export const Main = styled('main', {
  maxWidth: '1200px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$2xl',
  padding: '3rem 1.5rem'
})

export const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$md',

  span: {
    fontSize: '$xs'
  }
})
