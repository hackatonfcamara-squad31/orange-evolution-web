import {
  DialogContentProps as RadixDialogContentProps,
  Portal
} from '@radix-ui/react-dialog'
import { Button, ButtonProps } from 'components/Button'
import { Theme, useTheme } from 'contexts/ThemeContext'
import { ReactNode, useState } from 'react'
import { MdClose } from 'react-icons/md'
import {
  DialogBbuttonsContainer,
  DialogCloseButton,
  DialogDescription,
  DialogRoot,
  DialogTitle,
  StyledContent,
  StyledOverlay
} from './styles'

interface DialogContentProps extends RadixDialogContentProps {
  children: ReactNode
  onClickOverlay: () => void
  theme: Theme
}

function DialogContent({
  children,
  onClickOverlay,
  theme,
  ...props
}: DialogContentProps) {
  return (
    <Portal>
      <StyledOverlay onClick={onClickOverlay} />
      <StyledContent theme={theme} {...props}>
        {children}
      </StyledContent>
    </Portal>
  )
}

interface DialogProps {
  children: ReactNode
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

export function Dialog({
  children,
  title,
  description,
  triggerText,
  confirmText,
  cancelText,
  triggerButtonProps,
  cancelButtonProps,
  confirmButtonProps,
  onConfirm
}: DialogProps) {
  const { theme } = useTheme()
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleConfirm = () => {
    onConfirm()
    handleClose()
  }

  return (
    <DialogRoot open={open}>
      <Button onClick={handleOpen} title={triggerText} {...triggerButtonProps}>
        {triggerButtonProps?.children}
        {triggerText}
      </Button>

      <DialogContent theme={theme} onClickOverlay={handleClose}>
        <DialogCloseButton theme={theme} onClick={handleClose}>
          <MdClose />
        </DialogCloseButton>

        <DialogTitle theme={theme}>{title}</DialogTitle>
        <DialogDescription theme={theme}>{description}</DialogDescription>

        {children}

        <DialogBbuttonsContainer>
          <Button
            isFullWidth
            color="green"
            onClick={handleConfirm}
            title={confirmText}
            {...confirmButtonProps}
          >
            {confirmText}
          </Button>
          <Button
            isFullWidth
            color="red"
            onClick={handleClose}
            title={cancelText}
            {...cancelButtonProps}
          >
            {cancelText}
          </Button>
        </DialogBbuttonsContainer>
      </DialogContent>
    </DialogRoot>
  )
}
