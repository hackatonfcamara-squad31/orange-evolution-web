import { Portal } from '@radix-ui/react-alert-dialog'
import { useTheme } from 'contexts/ThemeContext'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
  DialogAlertBbuttonsContainer,
  StyledContent,
  StyledOverlay
} from './styles'

function DialogAlertContent({ children, ...props }) {
  return (
    <Portal>
      <StyledOverlay />
      <StyledContent {...props}>{children}</StyledContent>
    </Portal>
  )
}

interface DialogAlertProps {
  title: string
  description: string
  triggerLabel: string
  confirmLabel: string
  cancelLabel: string
}

export function DialogAlert({
  title,
  description,
  triggerLabel,
  cancelLabel,
  confirmLabel
}: DialogAlertProps) {
  const { theme } = useTheme()

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button title={triggerLabel}>{triggerLabel}</button>
      </AlertDialogTrigger>

      <DialogAlertContent theme={theme}>
        <AlertDialogTitle theme={theme}>{title}</AlertDialogTitle>

        <AlertDialogDescription theme={theme}>
          {description}
        </AlertDialogDescription>

        <DialogAlertBbuttonsContainer>
          <AlertDialogCancel asChild>
            <button title={cancelLabel}>{cancelLabel}</button>
          </AlertDialogCancel>

          <AlertDialogAction asChild>
            <button title={confirmLabel}>{confirmLabel}</button>
          </AlertDialogAction>
        </DialogAlertBbuttonsContainer>
      </DialogAlertContent>
    </AlertDialog>
  )
}
