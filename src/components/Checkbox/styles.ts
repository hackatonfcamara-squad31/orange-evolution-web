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

  transition: 'all 0.2s ease',

  '&[data-state="checked"]': {
    backgroundColor: '$orange400',
    border: 'none'
  },

  variants: {
    theme: {
      dark: {
        backgroundColor: '$transparent',
        border: '1px solid $gray600',
        color: '$white'
      },
      light: {
        backgroundColor: 'transparent',
        border: '1px solid $gray400',
        color: '$white'
      }
    },

    size: {
      sm: {
        width: '1.5rem',
        height: '1.5rem',
        fontSize: '$sm'
      },
      md: {
        width: '1.75rem',
        height: '1.75rem',
        fontSize: '$md'
      },
      lg: {
        width: '2rem',
        height: '2rem',
        fontSize: '$lg'
      }
    }
  },

  defaultVariants: {
    size: 'sm'
  }
})

export const CheckboxIndicator = styled(CheckboxPrimitive.Indicator, {
  // border: '1px solid red',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$white',
  zIndex: 10,

  svg: {
    stroke: '$white'
  }
})
