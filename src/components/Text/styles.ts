import { Slot } from '@radix-ui/react-slot'
import { styled } from 'styles'

export const StyledText = styled(Slot, {
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
      xs: {
        fontSize: '$xs'
      },
      sm: {
        fontSize: '$sm'
      },
      md: {
        fontSize: '$md'
      },
      lg: {
        fontSize: '$lg'
      },
      xl: {
        fontSize: '$xl'
      },
      '2xl': {
        fontSize: '$2xl'
      }
    }
  },

  defaultVariants: {
    theme: 'light',
    size: 'md'
  }
})
