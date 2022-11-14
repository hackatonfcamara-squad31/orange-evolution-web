import { styled } from 'styles'

export const Wrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem'
})

export const ProfileInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',

  h2: {
    color: '$white',
    fontSize: '$xs'
  },

  span: {
    fontWeight: 500,
    color: '$gray100'
  }
})

export const LogoutButton = styled('button', {
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  color: '$white',

  transition: 'all 0.2s ease-in-out',

  '&:hover': {
    textDecoration: 'underline'
  }
})
