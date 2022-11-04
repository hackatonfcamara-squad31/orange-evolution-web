import { styled } from 'styles'

export const PrimitiveButton = styled('button', {
  borderRadius: '$md',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 8,

  transition: 'all 0.2s ease-in-out',

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed'
  },

  variants: {
    theme: {
      dark: {
        backgroundColor: '$gray800',
        color: '$gray100',

        svg: {
          stroke: '$gray100'
        },

        '&:not(:disabled):hover': {
          backgroundColor: '$gray700'
        },
        '&:focus': {
          outline: '1px solid $gray100'
        }
      },

      light: {
        backgroundColor: '$gray300',
        color: '$gray800',

        svg: {
          stroke: '$gray800'
        },

        '&:not(:disabled):hover': {
          backgroundColor: '$gray200'
        },
        '&:focus': {
          outline: '1px solid $gray800'
        }
      }
    },

    size: {
      sm: {
        fontSize: '$xs',
        padding: '0.75rem 1rem'
      },
      md: {
        fontSize: '$md',
        padding: '0.75rem 1.25rem'
      },
      lg: {
        fontSize: '$xl',
        padding: '0.75rem 1.5rem'
      },
      xl: {
        fontSize: '$2xl',
        padding: '0.75rem 1.75rem'
      }
    },

    isFullWidth: {
      true: {
        width: '100%'
      }
    },

    isOnlyIcon: {
      true: {
        fontSize: '$lg',
        padding: '0.5rem !important'
      }
    },

    isLoading: {
      true: {
        pointerEvents: 'none',
        cursor: 'not-allowed'
      }
    }
  },

  defaultVariants: {
    size: 'md'
  }
})
