import { styled } from 'styles'

export const RepositoryContent = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  borderRadius: '$full',
  padding: '0.75rem 2rem',
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
