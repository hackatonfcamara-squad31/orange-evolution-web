import { Slot } from '@radix-ui/react-slot'
import { styled } from 'styles'

export const InputContainer = styled('div', {
  width: '100%'
})

export const InputWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$xs',
  padding: '4px 8px',
  borderRadius: '$md',
  width: '100%',

  variants: {
    theme: {
      light: {
        backgroundColor: '$gray200',

        '&:focus-within': {
          outline: '1px solid $gray800 !important'
        }
      },
      dark: {
        backgroundColor: '$gray800',

        '&:focus-within': {
          outline: '1px solid $gray100 !important'
        }
      }
    },
    error: {
      true: {
        outline: '1px solid $red500',

        '& > svg': {
          color: '$red500'
        },

        '&:focus-within': {
          outline: '1px solid $red500'
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
  }
})

export const InputLabel = styled('label', {
  display: 'block',
  fontSize: '$xs',
  marginBottom: '$xs',
  paddingLeft: '4px',
  fontWeight: 500,

  variants: {
    theme: {
      light: {
        color: '$gray800'
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
  paddingLeft: '4px',
  color: '$red500'
})

export const InputIcon = styled(Slot, {
  height: 24,
  width: 24,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

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
  fontSize: '$sm',
  borderRadius: '$md',
  padding: '8px 4px',
  backgroundColor: 'transparent',
  width: '100%',

  variants: {
    theme: {
      light: {
        color: '$gray800',
        backgroundColor: '$gray200',

        '&::placeholder': {
          color: '$gray500'
        }
      },
      dark: {
        colorScheme: 'dark',

        color: '$gray100',
        backgroundColor: '$gray800',

        '&::placeholder': {
          color: '$gray400'
        }
      }
    }
  }
})
