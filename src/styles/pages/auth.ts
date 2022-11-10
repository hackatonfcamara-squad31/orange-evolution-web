import { Slot } from '@radix-ui/react-slot'
import { styled } from 'styles'

export const HeaderWrapper = styled('header', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$md',
  alignItems: 'center',
  marginBottom: '2rem'
})

export const ImageWrapper = styled('div', {
  width: '200px',
  height: '100px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  marginBottom: '0.5rem'
})

export const FormWrapper = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  alignItems: 'center',
  width: '100%',
  maxWidth: '450px',

  '@bp3': {
    maxWidth: '300px'
  }
})

export const LoginFormFooter = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  padding: '0 1rem',

  '@bp3': {
    flexDirection: 'column',
    gap: '1.5rem',
    marginTop: '1rem'
  }
})

export const ButtonWrapper = styled('div', {
  marginTop: '1.5rem',
  textAlign: 'center'
})

export const FooterLinkContainer = styled(Slot, {
  marginTop: '1.5rem'
})
