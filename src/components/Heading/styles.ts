import { Slot } from '@radix-ui/react-slot'
import { styled } from 'styles'

export const StyledHeading = styled(Slot, {
  variants: {
    theme: {
      light: {
        color: '$orange400'
      },
      dark: {
        color: '$orange400'
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

  defaultVariants: {
    theme: 'light',
    size: 'md'
  }
})
