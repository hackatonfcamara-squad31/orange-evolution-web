import * as SelectPrimitive from '@radix-ui/react-select'
import {
  Content,
  Item,
  ItemIndicator,
  Label,
  ScrollDownButton,
  ScrollUpButton,
  SelectIcon,
  SelectTrigger,
  Separator,
  Viewport
} from '@radix-ui/react-select'
import { styled } from 'styles'

export const StyledTrigger = styled(SelectTrigger, {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0.5rem 1rem',
  fontSize: '$sm',
  lineHeight: 1,
  gap: 8,

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed'
  },

  variants: {
    theme: {
      light: {
        backgroundColor: '$gray100',
        color: '$gray800',

        '&:not(:disabled):hover': { backgroundColor: '$gray100' },
        '&:not(:disabled):focus': { outline: '1px solid $gray800' },
        '&[data-placeholder]': { color: '$gray800' },
        boxShadow:
          'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset'
      },
      dark: {
        backgroundColor: '$gray800',
        color: '$gray100',

        '&:not(:disabled):hover': { backgroundColor: '$gray700' },
        '&:not(:disabled):focus': { outline: '1px solid $gray100' },
        '&[data-placeholder]': { color: '$gray200' },
        boxShadow: 'none'
      }
    }
  }
})

export const StyledIcon = styled(SelectIcon, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

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

export const StyledContent = styled(Content, {
  overflow: 'hidden',
  borderRadius: 6,
  zIndex: 3,
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',

  variants: {
    theme: {
      light: {
        backgroundColor: '$gray100',
        color: '$gray800'
      },
      dark: {
        backgroundColor: '$gray700',
        color: '$gray100'
      }
    }
  }
})

export const StyledViewport = styled(Viewport, {
  padding: 5
})

export const StyledItem = styled(Item, {
  all: 'unset',
  fontSize: '$xs',
  lineHeight: 1,
  color: '$gray800',
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
  padding: '0.5rem 2rem',
  position: 'relative',
  userSelect: 'none',

  '&[data-disabled]': {
    color: '$gray800',
    pointerEvents: 'none'
  },

  variants: {
    theme: {
      light: {
        backgroundColor: '$gray100',
        color: '$gray800',

        '&[data-highlighted]': {
          backgroundColor: '$gray300',
          color: '$gray800'
        }
      },
      dark: {
        backgroundColor: '$gray700',
        color: '$gray100',

        '&[data-highlighted]': {
          backgroundColor: '$gray100',
          color: '$gray800'
        }
      }
    }
  }
})

export const StyledLabel = styled(Label, {
  padding: '0 25px',
  fontSize: 12,
  lineHeight: '25px',
  color: '$gray800'
})

export const StyledSeparator = styled(Separator, {
  height: 1,
  margin: 5,

  variants: {
    theme: {
      light: {
        backgroundColor: '$gray500'
      },
      dark: {
        backgroundColor: '$gray300'
      }
    }
  }
})

export const StyledItemIndicator = styled(ItemIndicator, {
  position: 'absolute',
  left: 0,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center'
})

export const scrollButtonStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 25,
  cursor: 'default',

  variants: {
    theme: {
      light: {
        backgroundColor: '$gray200',
        color: '$gray800'
      },
      dark: {
        backgroundColor: '$gray700',
        color: '$gray100'
      }
    }
  }
}

export const StyledScrollUpButton = styled(ScrollUpButton, scrollButtonStyles)

export const StyledScrollDownButton = styled(
  ScrollDownButton,
  scrollButtonStyles
)

// Exports
export const SelectRoot = SelectPrimitive.Root
export const SelectValue = SelectPrimitive.Value
export const SelectGroup = SelectPrimitive.Group
export const SelectItemText = SelectPrimitive.ItemText
