import { styled } from 'styles'

export const ContentWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  width: '100%',
  gap: '0.5rem',
  borderRadius: '$full',
  padding: '0.75rem 0',
  paddingLeft: '1.75rem',
  paddingRight: '1rem',
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

export const TitleWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1.5rem',

  '@bp3': {
    gap: '0.75rem'
  }
})

export const Badges = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '2rem',

  '@bp3': {
    gap: '0.5rem',
    marginLeft: '2.25rem',
    marginTop: '0.75rem'
  }
})

export const Badge = styled('div', {
  backgroundColor: '$orange600',
  borderRadius: '$full',
  padding: '0.25rem 1rem',
  color: '$white',
  fontWeight: 500,
  fontSize: '$xs',
  maxWidth: '150px',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',

  '@bp3': {
    maxWidth: '100px'
  }
})
