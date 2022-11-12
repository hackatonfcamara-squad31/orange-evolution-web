import { styled } from 'styles'

const lightStyles = {
  backgroundColor: '$orange600',
  color: '$gray100',

  svg: {
    stroke: '$gray100'
  },

  '&:focus': {
    outline: '2px solid $gray800'
  }
}

const darkStyles = {
  backgroundColor: '$orange600',
  color: '$gray100',

  svg: {
    stroke: '$gray100'
  },

  '&:focus': {
    outline: '2px solid $gray100'
  }
}

const grayDarkStyles = {
  backgroundColor: '$gray700',
  color: '$gray100',

  svg: {
    stroke: '$gray100'
  }
}

const grayLightStyles = {
  backgroundColor: '$white',
  boxShadow: '$default',
  color: '$gray800',

  svg: {
    stroke: '$gray800'
  }
}

const redStyles = {
  backgroundColor: '$red600',
  color: '$gray100',

  svg: {
    stroke: '$gray100'
  }
}

const greenStyles = {
  backgroundColor: '$green600',
  color: '$gray100',

  svg: {
    stroke: '$gray100'
  }
}

const purpleStyles = {
  backgroundColor: '#7600CE',
  color: '$white',

  svg: {
    stroke: '$white'
  }
}

export const PrimitiveButton = styled('button', {
  borderRadius: '$full',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 8,
  textDecoration: 'none',
  fontWeight: 500,

  transition: 'all 0.2s ease-out',

  '&:disabled': {
    opacity: 0.8,
    cursor: 'not-allowed'
  },

  '&:not(:disabled):hover': {
    filter: 'brightness(1.1)'
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
      gray: { ...grayLightStyles },
      purple: { ...purpleStyles },
      default: {
        backgroundColor: '$gray300',
        color: '$gray800'
      }
    },

    size: {
      sm: {
        fontSize: '$xs',
        padding: '0.75rem 1.25rem'
      },
      md: {
        fontSize: '$sm',
        padding: '0.75rem 2.5rem'
      },
      lg: {
        fontSize: '$lg',
        padding: '0.75rem 3rem'
      },
      xl: {
        fontSize: '$xl',
        padding: '0.75rem 2rem'
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
        padding: '0.75rem !important'
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
      css: {
        ...lightStyles
      }
    },
    {
      theme: 'dark',
      color: 'default',
      css: {
        ...darkStyles
      }
    },
    {
      theme: 'light',
      color: 'gray',
      css: {
        ...grayLightStyles
      }
    },
    {
      theme: 'dark',
      color: 'gray',
      css: {
        ...grayDarkStyles
      }
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
    },
    {
      theme: 'light',
      color: 'purple',
      css: {
        ...purpleStyles
      }
    },
    {
      theme: 'dark',
      color: 'purple',
      css: {
        ...purpleStyles
      }
    }
  ],

  defaultVariants: {
    size: 'md',
    theme: 'light',
    color: 'default'
  }
})
