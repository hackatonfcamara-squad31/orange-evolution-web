import 'keen-slider/keen-slider.min.css'
import Image from 'next/image'
import { styled } from 'styles'

export const TextWrapper = styled('div', {
  maxWidth: '1000px',
  marginTop: '2rem',
  padding: '0 4rem',
  p: {
    textAlign: 'justify'
  },

  '@bp2': {
    padding: '0 2.5rem',
    p: {
      fontSize: '$sm'
    }
  },
  '@bp3': {
    padding: '0 2rem',
    p: {
      fontSize: '$xs'
    }
  }
})

export const CardListWrapper = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 1.5rem'
})

export const CardList = styled('div', {
  width: 'calc(100% - 4rem)',
  position: 'relative',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.125rem',
  flexWrap: 'wrap',

  padding: '1rem 0',

  '@bp2': {
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',

    gap: 0,

    '&:hover': {
      cursor: 'grab'
    },

    '&:active': {
      cursor: 'grabbing'
    }
  }
})

export const Card = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  textAlign: 'center',
  gap: '2rem',
  position: 'relative',

  width: '280px',
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
