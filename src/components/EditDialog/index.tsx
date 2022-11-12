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
  DialogRoot,
  DialogTitle,
  StyledContent,
  StyledOverlay
} from './styles'
import { BiEdit } from 'react-icons/bi'
import { InputGeneral } from 'components/Inputs/InputGeneral'

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
  children?: ReactNode
  title: string
  description?: string
  triggerText?: string
  confirmText: string
  cancelText: string
  triggerButtonProps?: ButtonProps
  cancelButtonProps?: ButtonProps
  confirmButtonProps?: ButtonProps
  onConfirm: () => void
}

export function EditDialog({
  children,
  title,
  confirmText,
  cancelText,
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
      <BiEdit
        style={{
          position: 'absolute',
          right: '1rem',
          top: '1rem',
          fontSize: '1.3rem'
        }}
        onClick={handleOpen}
      />

      <DialogContent theme={theme} onClickOverlay={handleClose}>
        <DialogCloseButton theme={theme} onClick={handleClose}>
          <MdClose />
        </DialogCloseButton>

        <DialogTitle theme={theme}>{title}</DialogTitle>
        <InputGeneral />

        <DialogBbuttonsContainer>
          <Button
            isFullWidth
            onClick={handleConfirm}
            title={confirmText}
            {...confirmButtonProps}
          >
            {confirmText}
          </Button>
          <Button
            isFullWidth
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
