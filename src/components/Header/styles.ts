import Image from 'next/image'
import { styled } from 'styles'

export const HeaderWrapper = styled('header', {
  width: '100%',
  background: '$orange500',
  display: 'flex',
  alignItems: 'center',
  padding: '1rem 1.25rem',
  gap: '1.5rem',

  '@bp3': {
    flexDirection: 'column-reverse'
  }
})

export const HeaderImages = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '3rem',

  '@bp2': {
    gap: '1.5rem'
  }
})

export const LogoFCamara = styled(Image, {
  '@bp2': {
    width: '112px',
    height: '25px'
  },

  '@bp4': {
    width: '84px',
    height: '18px'
  }
})
export const LogoOrangeJuice = styled(Image, {
  '@bp2': {
    width: '50px',
    height: '36px'
  },

  '@bp4': {
    width: '33px',
    height: '24px'
  }
})
export const LogoPdeFormacao = styled(Image, {
  '@bp2': {
    width: '132px',
    height: '42px'
  },

  '@bp4': {
    width: '88px',
    height: '28px'
  }
})

export const HeaderUserWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem'
})

export const HeaderTextWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column'
})
