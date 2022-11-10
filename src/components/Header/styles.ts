import Image from 'next/image'
import { styled } from 'styles'

export const HeaderWrapper = styled('header', {
  width: '100vw',
  background: '$orange500',
  '@bp2': {
    padding: '0 0'
  }
})

export const HeaderImages = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$3xl',
  '@bp2': {
    gap: '$xs'
  }
})

export const LogoFCamara = styled(Image, {
  '@bp2': {
    width: '84px',
    height: '18px'
  }
})
export const LogoOrangeJuice = styled(Image, {
  '@bp2': {
    width: '33px',
    height: '24px'
  }
})
export const LogoPdeFormacao = styled(Image, {
  '@bp2': {
    width: '88px',
    height: '28px'
  }
})

export const HeaderAvatarWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$xs',
  paddingLeft: '3rem',

  '@bp2': {
    gap: '0',
    paddingLeft: '0',
    svg: {
      width: '2rem'
    },

    span: {
      fontSize: '0.7rem'
    }
  },
  '@bp3': {
    svg: {
      width: '1.7rem'
    },

    span: {
      fontSize: '0.65rem'
    }
  }
})

export const HeaderTextWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  span: {
    color: 'white'
  }
})
