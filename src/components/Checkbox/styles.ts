import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { styled } from 'styles'

export const CheckboxWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$xs',

  label: {
    cursor: 'pointer'
  }
})

export const CheckboxRoot = styled(CheckboxPrimitive.Root, {
  borderRadius: '$full',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  svg: {
    fontSize: '0.875rem'
  },

  variants: {
    theme: {
      dark: {
        backgroundColor: '$gray100',
        transition: '0.2s',
        color: '$gray800'
      },
      light: {
        backgroundColor: 'white',
        border: '1px solid $gray600',
        '&[data-state="checked"]': {
          backgroundColor: '#FF5A23',
          border: 'none'
        },
        svg: {
          color: 'white'
        }
      }
    },

    size: {
      sm: {
        width: '1.25rem',
        height: '1.25rem',
        fontSize: '0.75rem'
      },
      md: {
        width: '1.5rem',
        height: '1.5rem',
        fontSize: '$md'
      },
      lg: {
        width: '1.75rem',
        height: '1.75rem',
        fontSize: '$lg'
      }
    }
  },

  defaultVariants: {
    size: 'sm'
  }
})
