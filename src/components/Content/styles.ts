import { styled } from 'styles'

export const ContentWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  borderRadius: '$full',
  padding: '0.75rem 1rem',
  boxShadow: '$default',

  variants: {
    theme: {
      light: {
        backgroundColor: 'white',
        span: {
          color: '$gray800'
        }
      },
      dark: {
        backgroundColor: '$gray700',
        boxShadow: 'none',
        span: {
          color: '$gray100'
        }
      }
    }
  }
})
