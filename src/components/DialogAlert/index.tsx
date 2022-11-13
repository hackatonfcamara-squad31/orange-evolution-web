import { AlertDialogProps, Portal } from '@radix-ui/react-alert-dialog'
import { Button, ButtonProps } from 'components/Button'
import { Theme, useTheme } from 'contexts/ThemeContext'
import { ReactNode, useState } from 'react'
import { MdClose } from 'react-icons/md'
import {
  AlertDialog,
  AlertDialogDescription,
  AlertDialogTitle,
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
  triggerText: string
  confirmText: string
  cancelText: string
  triggerButtonProps?: ButtonProps
  cancelButtonProps?: ButtonProps
  confirmButtonProps?: ButtonProps
  onConfirm: () => void
}

export function DialogAlert({
  title,
  description,
  triggerText,
  confirmText,
  cancelText,
  triggerButtonProps,
  cancelButtonProps,
  confirmButtonProps,
  onConfirm
}: DialogAlertProps) {
  const { theme } = useTheme()
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleConfirm = () => {
    onConfirm()
    handleClose()
  }

  return (
    <AlertDialog open={open}>
      <Button
        onClick={handleOpen}
        title={triggerText}
        color="red"
        type="button"
        isFullWidth
        {...triggerButtonProps}
      >
        {triggerText}
      </Button>

      <DialogAlertContent theme={theme} onClickOverlay={handleClose}>
        <AlertDialogTitle theme={theme}>{title}</AlertDialogTitle>

        <AlertDialogDescription theme={theme}>
          {description}
        </AlertDialogDescription>

        <DialogAlertBbuttonsContainer>
          <Button
            size="sm"
            isFullWidth
            color="green"
            onClick={handleClose}
            title={cancelText}
            {...cancelButtonProps}
          >
            {cancelText}
          </Button>

          <Button
            size="sm"
            isFullWidth
            color="red"
            onClick={handleConfirm}
            title={confirmText}
            {...confirmButtonProps}
          >
            {confirmText}
          </Button>
        </DialogAlertBbuttonsContainer>

        <DialogAlertCloseButton theme={theme} onClick={handleClose}>
          <MdClose />
        </DialogAlertCloseButton>
      </DialogAlertContent>
    </AlertDialog>
  )
}
