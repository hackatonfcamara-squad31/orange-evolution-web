import { styled } from 'styles'

export const InputContainer = styled('fieldset', {
  width: '100%',
  border: 'none'
})

export const InputWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$xs',
  padding: '0.25rem 1.5rem',
  borderRadius: '$full',
  width: '100%',
  boxShadow: '$default',

  '&:focus-within': {
    '& > div > svg': {
      color: '$orange600 !important'
    },

    outline: '2px solid $orange600 '
  },

  variants: {
    theme: {
      light: {
        backgroundColor: '$white'
      },
      dark: {
        backgroundColor: '$gray800'
      }
    },

    isBig: {
      true: {
        padding: '0.85rem 1.5rem'
      }
    },

    error: {
      true: {
        outline: '2px solid $red500',

        '& > div > svg': {
          color: '$red500'
        },

        '&:focus-within': {
          outline: '2px solid $red500'
        }
      }
    },

    disabled: {
      true: {
        opacity: 0.5,

        '&:hover': {
          cursor: 'not-allowed'
        },

        input: {
          cursor: 'not-allowed'
        }
      }
    }
  },

  compoundVariants: [
    {
      theme: 'light',
      error: true,

      css: {
        outline: '2px solid $red600',

        '& > div > svg': {
          color: '$red600'
        },

        '&:focus-within': {
          outline: '2px solid $red600'
        }
      }
    },
    {
      theme: 'dark',
      error: true,

      css: {
        outline: '2px solid $red500',

        '& > div > svg': {
          color: '$red500'
        },

        '&:focus-within': {
          outline: '2px solid $red500'
        }
      }
    }
  ],

  '@bp3': {
    padding: '0.25rem 1rem'
  }
})

export const InputLabel = styled('label', {
  display: 'inline-flex',
  fontSize: '$xs',
  marginBottom: '$xs',
  paddingLeft: '1.5rem',
  fontWeight: 600,

  span: {
    color: '$red500'
  },

  variants: {
    theme: {
      light: {
        color: '$gray600'
      },
      dark: {
        color: '$gray100'
      }
    }
  }
})

export const InputErrorMessage = styled('span', {
  display: 'block',
  fontSize: '$xs',
  marginTop: '$xs',
  paddingLeft: '1rem',

  variants: {
    theme: {
      light: {
        color: '$red600'
      },
      dark: {
        color: '$red500'
      }
    }
  },
  fontWeight: 600
})

export const InputIcon = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '$xl',

  variants: {
    theme: {
      light: {
        color: '$gray600'
      },
      dark: {
        color: '$gray400'
      }
    }
  },

  '@bp3': {
    fontSize: '$md'
  }
})

export const ShowPasswordButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '$md',
  backgroundColor: 'transparent',

  variants: {
    theme: {
      light: {
        color: '$gray800'
      },
      dark: {
        color: '$gray400'
      }
    }
  }
})

export const Input = styled('input', {
  outline: 'none',
  fontSize: '$md',
  borderRadius: '$md',
  padding: '8px 4px',
  backgroundColor: 'transparent',
  width: '100%',

  '&::placeholder': {
    color: '$gray400'
  },

  variants: {
    theme: {
      light: {
        color: '$gray800',
        backgroundColor: '$white'
      },
      dark: {
        colorScheme: 'dark',

        color: '$gray100',
        backgroundColor: '$gray800'
      }
    }
  },

  '@bp3': {
    fontSize: '$sm'
  }
})
