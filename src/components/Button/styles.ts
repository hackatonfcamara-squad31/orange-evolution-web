import { styled } from 'styles'

export const PrimitiveButton = styled('button', {
  width: '100%',
  marginTop: '1rem',
  borderRadius: '8px',
  fontFamily: 'Roboto, sans-serif',
  padding: '1.5rem 0.75rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 2,

  variants: {
    theme: {
      dark: {
        backgroundColor: '$gray300',
        color: '$gray900',
        transition: '0.2s',

        '&:hover': {
          backgroundColor: '$gray200'
        },
        '&:focus': {
          border: '1px solid $gray500'
        },
        '&:active': {
          boxShadow: '2px 2px 5px $white'
        }
      },
      light: {
        backgroundColor: '$gray500',
        color: '$white',
        fontFamily: 'Roboto, sans-serif',

        '&:hover': {
          backgroundColor: '$gray400'
        },
        '&:focus': {
          border: '1px solid $gray200'
        },
        '&:active': {
          boxShadow: '2px 2px 5px $white'
        }
      }
    },
    size: {
      sm: {
        fontSize: '$sm'
      },
      md: {
        fontSize: '$md'
      },
      lg: {
        fontSize: '$lg'
      }
    },
    disabled: {
      true: {
        cursor: 'not-allowed',
        backgroundColor: '$gray600',
        color: '$gray500',
        border: 'none',

        '&:hover': {
          backgroundColor: '$gray600'
        },
        '&:focus': {
          border: 'none'
        },
        '&:active': {
          boxShadow: 'none'
        }
      }
    }
  }
})