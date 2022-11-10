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

export const Main = styled('main', {
  maxWidth: '1200px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$md',
  padding: '3rem 1.25rem'
})

export const ImageWrapper = styled('div', {
  width: '100%',
  maxWidth: '800px',
  height: '400px',
  position: 'relative',

  img: {
    width: '100%',
    height: '100%'
  },

  '@bp2': {
    height: '300px'
  },

  '@bp3': {
    height: '250px'
  },

  '@media(max-width: 400px)': {
    height: '150px'
  }
})

export const Subtitle = styled('h2', {
  fontWeight: 400,
  fontSize: '$2xl',
  textAlign: 'center',
  margin: '1rem 0',

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
