import Image from 'next/image'
import { styled } from 'styles'

export const TextWrapper = styled('div', {
  width: '100%',
  maxWidth: '1000px',
  marginTop: '2rem',

  p: {
    textAlign: 'justify'
  },

  '@bp2': {
    p: {
      fontSize: '$sm'
    }
  }
})

export const CardList = styled('div', {
  position: 'relative',
  marginTop: '2rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.125rem',
  flexWrap: 'wrap'
})

export const Card = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  textAlign: 'center',
  gap: '2rem',
  position: 'relative',

  width: 280,
  alignSelf: 'stretch',

  borderRadius: '35px',
  padding: '1.5rem',

  variants: {
    theme: {
      dark: {
        backgroundColor: '$gray600'
      },
      light: {
        backgroundColor: '$white',
        boxShadow: '$default'
      }
    }
  },

  defaultVariants: {
    theme: 'light'
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
