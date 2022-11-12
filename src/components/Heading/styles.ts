import { Slot } from '@radix-ui/react-slot'
import { styled } from 'styles'

export const StyledHeading = styled(Slot, {
  fontWeight: 600,

  variants: {
    theme: {
      light: {
        color: '$orange400'
      },
      dark: {
        color: '$orange400'
      }
    },

    color: {
      default: {
        color: '$orange400'
      },
      gray: {
        color: '$gray800'
      }
    },

    size: {
      sm: {
        fontSize: '$lg'
      },
      md: {
        fontSize: '$xl'
      },
      lg: {
        fontSize: '$2xl'
      },
      xl: {
        fontSize: '$3xl'
      }
    }
  },

  compoundVariants: [
    {
      theme: 'light',
      color: 'gray',
      css: {
        color: '$gray800'
      }
    },
    {
      theme: 'dark',
      color: 'gray',
      css: {
        color: '$gray800'
      }
    }
  ],

  defaultVariants: {
    theme: 'light',
    size: 'md'
  }
})
