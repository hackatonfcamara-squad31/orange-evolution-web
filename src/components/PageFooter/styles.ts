import { styled } from 'styles'

export const PageFooterWrapper = styled('footer', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  marginTop: '8rem',
  justifyContent: 'space-between',
  gap: '1.5rem',

  '@bp2': {
    flexDirection: 'column',
    gap: '5rem'
  }
})

export const FooterButtonWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '1.25rem',
  textAlign: 'center',
  fontWeight: 400
})
