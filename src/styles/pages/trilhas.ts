import Image from 'next/image'
import { styled } from 'styles'

export const TextWrapper = styled('div', {
  maxWidth: '1000px',
  marginTop: '2rem',

  p: {
    textAlign: 'justify'
  },

  '@bp2': {
    p: {
      fontSize: '$xs'
    }
  }
})

export const CardWrapper = styled('div', {
  maxWidth: '1200px',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-around',
  gap: '$md',
  flexWrap: 'wrap',
  height: 'auto'
})

export const Card = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  textAlign: 'center',
  width: '25%',
  minWidth: '270px',
  maxWidth: '280px',
  height: '350px',

  marginTop: '1rem',
  borderRadius: '35px',
  padding: '0.5rem 1.5rem',

  variants: {
    theme: {
      dark: {
        backgroundColor: '$gray600'
      },
      light: {
        backgroundColor: '$white',
        boxShadow: '4px 4px 8px gray'
      }
    }
  }
})

export const CardImage = styled(Image, {
  width: '100px',
  height: '100px',
  objectFit: 'contain'
})

export const ButtonWrapper = styled('div', {
  width: '170px'
})
