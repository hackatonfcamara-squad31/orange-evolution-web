import {
  DialogContentProps as RadixDialogContentProps,
  Portal
} from '@radix-ui/react-dialog'
import { Theme, useTheme } from 'contexts/ThemeContext'
import { ReactNode, useState } from 'react'
import { MdClose } from 'react-icons/md'
import {
  DialogBbuttonsContainer,
  DialogCloseButton,
  DialogDescription,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
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
  title: string
  description: string
  triggerLabel: string
  confirmLabel: string
  children: ReactNode
}

export function Dialog({
  title,
  description,
  triggerLabel,
  confirmLabel,
  children
}: DialogProps) {
  const { theme } = useTheme()
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <DialogRoot open={open}>
      <DialogTrigger asChild>
        <button onClick={handleOpen} title={triggerLabel}>
          {triggerLabel}
        </button>
      </DialogTrigger>

      <DialogContent theme={theme} onClickOverlay={handleClose}>
        <DialogTitle theme={theme}>{title}</DialogTitle>
        <DialogDescription theme={theme}>{description}</DialogDescription>

        {children}

        <DialogBbuttonsContainer>
          <button onClick={handleClose} title={confirmLabel}>
            {confirmLabel}
          </button>
        </DialogBbuttonsContainer>

        <DialogCloseButton theme={theme} onClick={handleClose}>
          <MdClose />
        </DialogCloseButton>
      </DialogContent>
    </DialogRoot>
  )
}
