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
      padding: '0 1rem',
      fontSize: '$sm'
    }
  },
  '@bp3': {
    p: {
      fontSize: '$xs'
    }
  }
})

export const CardWrapper = styled('div', {
  maxWidth: '1200px',
  width: '100%',
  flexWrap: 'wrap',

  '@media(max-width:900px)': {
    flexWrap: 'nowrap'
  }
})

export const Card = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  textAlign: 'center',
  minwidth: '280px',
  width: '280px',
  height: '350px',
  margin: '1rem 0',
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
