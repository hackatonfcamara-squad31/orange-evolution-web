import Link from 'next/link'
import { styled } from 'styles'

export const ProfileAvatarDropzone = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
  marginBottom: '3rem'
})

export const ButtonWrapper = styled('div', {
  marginTop: '1.5rem',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem'
})

export const BackLinkWrapper = styled('div', {
  width: '100%',
  maxWidth: '500px',
  display: 'flex',
  alignItems: 'center'
})

export const BackLink = styled(Link, {
  display: 'flex',
  alignItems: 'center',
  gap: '0.25rem',
  color: '$orange400',
  textDecoration: 'none',

  fontSize: '$lg',
  fontWeight: 500,

  transition: 'all 0.2s ease-in-out',

  '&:hover': {
    textDecoration: 'underline',
    textUnderlineOffset: '0.25rem'
  }
})
