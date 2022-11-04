import { Slot } from '@radix-ui/react-slot'
import { styled } from 'styles'

export const StyledHeading = styled(Slot, {
  variants: {
    theme: {
      light: {
        color: '$gray800'
      },
      dark: {
        color: '$gray100'
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
