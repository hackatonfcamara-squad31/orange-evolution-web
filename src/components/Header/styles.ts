import Image from 'next/image'
import { styled } from 'styles'

export const HeaderWrapper = styled('header', {
  width: '100%',
  background: '$orange500',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1rem 1.25rem'
})

export const HeaderContent = styled('div', {
  width: '100%',
  maxWidth: '1200px',
  display: 'flex',
  alignItems: 'center',
  gap: '1.5rem',

  '@bp2': {
    flexDirection: 'column-reverse'
  }
})

export const HeaderImages = styled('div', {
  width: '100%',
  position: 'relative',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: '3rem',
  flex: 1,

  '@bp2': {
    justifyContent: 'center'
  },
  '@bp3': {
    gap: '1.5rem',
    justifyContent: 'center'
  }
})

export const LogoFCamara = styled(Image, {
  '@bp3': {
    width: '35%'
  }
})

export const LogoOrangeJuice = styled(Image, {
  '@bp3': {
    width: '20%'
  }
})

export const LogoPdeFormacao = styled(Image, {
  '@bp3': {
    width: '35%'
  }
})
