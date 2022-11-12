import * as DialogPrimitive from '@radix-ui/react-dialog'
import { keyframes, styled } from 'styles'

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 }
})

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' }
})

export const StyledOverlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  position: 'fixed',
  inset: 0,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
  }
})

export const StyledContent = styled(DialogPrimitive.Content, {
  borderRadius: '$md',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '400px',
  minWidth: '300px',
  maxHeight: '85vh',
  padding: 25,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
  },
  '&:focus': { outline: 'none' },

  variants: {
    theme: {
      light: {
        backgroundColor: '$gray100',
        color: '$gray800'
      },
      dark: {
        backgroundColor: '$gray800',
        color: '$gray100'
      }
    }
  }
})

export const StyledTitle = styled(DialogPrimitive.Title, {
  fontSize: '$lg',
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

export const StyledDescription = styled(DialogPrimitive.Description, {
  marginTop: '1rem',
  marginBottom: '1.25rem',
  fontSize: '$sm',
  lineHeight: 1.6,

  variants: {
    theme: {
      light: {
        color: '$gray700'
      },
      dark: {
        color: '$gray200'
      }
    }
  }
})

export const DialogCloseButton = styled('button', {
  position: 'absolute',
  backgroundColor: 'transparent',
  fontSize: '$lg',
  top: 8,
  right: 8,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.25rem',
  borderRadius: '50%',

  variants: {
    theme: {
      light: {
        color: '$gray600',

        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.05)'
        }
      },
      dark: {
        color: '$gray300',

        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.05)'
        }
      }
    }
  }
})

export const DialogBbuttonsContainer = styled('div', {
  marginTop: '1.5rem',
  display: 'flex',
  justifyContent: 'space-around',
  gap: '$lg'
})

export const DialogRoot = DialogPrimitive.Root
export const DialogTrigger = DialogPrimitive.Trigger
export const DialogTitle = StyledTitle
export const DialogDescription = StyledDescription
export const DialogClose = DialogPrimitive.Close
