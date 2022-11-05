import { styled } from 'styles'

const darkStyles = {
  backgroundColor: '$gray700',
  color: '$gray100',

  svg: {
    stroke: '$gray100'
  },

  '&:not(:disabled):hover': {
    backgroundColor: '$gray600'
  },
  '&:focus': {
    outline: '1px solid $gray100'
  }
}

const lightStyles = {
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

const redStyles = {
  backgroundColor: '$red600',
  color: '$white',

  svg: {
    stroke: '$white'
  },

  '&:not(:disabled):hover': {
    backgroundColor: '$red500'
  }
}

const greenStyles = {
  backgroundColor: '$green600',
  color: '$white',

  svg: {
    stroke: '$white'
  },

  '&:not(:disabled):hover': {
    backgroundColor: '$green500'
  }
}

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
        ...darkStyles
      },

      light: {
        ...lightStyles
      }
    },

    color: {
      red: { ...redStyles },
      green: { ...greenStyles },
      default: {
        backgroundColor: '$gray300',
        color: '$gray800'
      }
    },

    size: {
      sm: {
        fontSize: '$xs',
        padding: '0.75rem 1rem'
      },
      md: {
        fontSize: '$sm',
        padding: '0.75rem 1.25rem'
      },
      lg: {
        fontSize: '$lg',
        padding: '0.75rem 1.5rem'
      },
      xl: {
        fontSize: '$xl',
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

  compoundVariants: [
    {
      theme: 'light',
      color: 'default',
      css: { ...lightStyles }
    },
    {
      theme: 'dark',
      color: 'default',
      css: { ...darkStyles }
    },
    {
      theme: 'light',
      color: 'red',
      css: {
        ...redStyles
      }
    },
    {
      theme: 'dark',
      color: 'red',
      css: {
        ...redStyles
      }
    },
    {
      theme: 'light',
      color: 'green',
      css: {
        ...greenStyles
      }
    },
    {
      theme: 'dark',
      color: 'green',
      css: {
        ...greenStyles
      }
    }
  ],

  defaultVariants: {
    size: 'md',
    theme: 'light',
    color: 'default'
  }
})
