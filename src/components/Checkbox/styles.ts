import { styled } from 'styles'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'

export const CheckboxRoot = styled(CheckboxPrimitive.Root, {
  width: '20px',
  height: '20px',
  backgroundColor: 'gray',
  borderRadius: '2px',

  svg: {
    width: '1rem',
    height: '1rem',
    color: 'white'
  },

  variants: {
    theme: {
      dark: {
        backgroundColor: '$gray300',
        transition: '0.2s',

        svg: {
          color: '$gray900'
        }
      },
      light: {
        backgroundColor: '$gray500',
        transition: '0.2s',

        svg: {
          color: '$white'
        }
      }
    }
  }
})
