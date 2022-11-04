import { AlertDialogProps, Portal } from '@radix-ui/react-alert-dialog'
import { Theme, useTheme } from 'contexts/ThemeContext'
import { ReactNode, useState } from 'react'
import { MdClose } from 'react-icons/md'
import {
  AlertDialog,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
  DialogAlertBbuttonsContainer,
  DialogAlertCloseButton,
  StyledContent,
  StyledOverlay
} from './styles'

interface DialogAlertContentProps extends AlertDialogProps {
  children: ReactNode
  onClickOverlay: () => void
  theme: Theme
}

function DialogAlertContent({
  children,
  onClickOverlay,
  theme,
  ...props
}: DialogAlertContentProps) {
  return (
    <Portal>
      <StyledOverlay onClick={onClickOverlay} />
      <StyledContent theme={theme} {...props}>
        {children}
      </StyledContent>
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
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <AlertDialog open={open}>
      <AlertDialogTrigger asChild>
        <button onClick={handleOpen} title={triggerLabel}>
          {triggerLabel}
        </button>
      </AlertDialogTrigger>

      <DialogAlertContent theme={theme} onClickOverlay={handleClose}>
        <AlertDialogTitle theme={theme}>{title}</AlertDialogTitle>

        <AlertDialogDescription theme={theme}>
          {description}
        </AlertDialogDescription>

        <DialogAlertBbuttonsContainer>
          <button onClick={handleClose} title={cancelLabel}>
            {cancelLabel}
          </button>

          <button onClick={handleClose} title={confirmLabel}>
            {confirmLabel}
          </button>
        </DialogAlertBbuttonsContainer>

        <DialogAlertCloseButton theme={theme} onClick={handleClose}>
          <MdClose />
        </DialogAlertCloseButton>
      </DialogAlertContent>
    </AlertDialog>
  )
}
