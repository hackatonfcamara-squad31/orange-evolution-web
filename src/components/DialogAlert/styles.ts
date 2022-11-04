import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'
import { keyframes, styled } from 'styles'

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 }
})

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' }
})

export const StyledOverlay = styled(AlertDialogPrimitive.Overlay, {
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  position: 'fixed',
  inset: 0,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
  }
})

export const StyledContent = styled(AlertDialogPrimitive.Content, {
  borderRadius: 6,
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '500px',
  maxHeight: '85vh',
  padding: 25,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
  },
  '&:focus': { outline: 'none' },

  variants: {
    theme: {
      light: {
        backgroundColor: '$gray100'
      },
      dark: {
        backgroundColor: '$gray800'
      }
    }
  }
})

const StyledTitle = styled(AlertDialogPrimitive.Title, {
  margin: 0,
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

const StyledDescription = styled(AlertDialogPrimitive.Description, {
  margin: '1.5rem 0',
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

export const DialogAlertBbuttonsContainer = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '$lg'
})

export const AlertDialog = AlertDialogPrimitive.Root
export const AlertDialogTrigger = AlertDialogPrimitive.Trigger
export const AlertDialogTitle = StyledTitle
export const AlertDialogDescription = StyledDescription
export const AlertDialogAction = AlertDialogPrimitive.Action
export const AlertDialogCancel = AlertDialogPrimitive.Cancel
