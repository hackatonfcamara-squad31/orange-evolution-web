import Image from 'next/image'
import { styled } from 'styles'

export const HeaderWrapper = styled('header', {
  width: '100vw',
  background: '$orange500'
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
  '@bp1': {
    width: '126px',
    height: '27px'
  },
  '@bp2': {
    width: '84px',
    height: '18px'
  },
  '@bp4': {
    width: '56px',
    height: '13px'
  }
})
export const LogoOrangeJuice = styled(Image, {
  '@bp1': { width: '50px', height: '36px' },
  '@bp2': {
    width: '33px',
    height: '24px'
  },
  '@bp4': {
    width: '22px',
    height: '17px'
  }
})
export const LogoPdeFormacao = styled(Image, {
  '@bp1': { width: '132px', height: '42px' },
  '@bp2': {
    width: '88px',
    height: '28px'
  },
  '@bp4': {
    width: '59px',
    height: '19px'
  }
})

export const HeaderUserWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$xs',
  paddingLeft: '3rem',

  '@bp2': {
    gap: '0',
    paddingLeft: '0',
    svg: {
      width: '2rem',
      height: '2rem'
    }
  },
  '@bp3': {
    svg: {
      width: '1.7rem',
      height: '1.7rem'
    }
  }
})

export const HeaderTextWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  span: {
    color: 'white'
  },
  '@bp2': {
    span: {
      fontSize: '0.7rem'
    }
  },
  '@bp3': {
    span: {
      fontSize: '0.6rem'
    }
  }
})
