import {
  DialogContentProps as RadixDialogContentProps,
  Portal
} from '@radix-ui/react-dialog'
import { Button, ButtonProps } from 'components/Button'
import { Theme, useTheme } from 'contexts/ThemeContext'
import { ReactNode } from 'react'
import { MdClose } from 'react-icons/md'
import {
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
  isDialogOpen: boolean
  setIsDialogOpen: (value: boolean) => void
  children: ReactNode
  title: string
  description?: string
  triggerText: string
  triggerButtonProps?: ButtonProps
}

export function Dialog({
  isDialogOpen,
  setIsDialogOpen,
  children,
  title,
  description,
  triggerText,
  triggerButtonProps
}: DialogProps) {
  const { theme } = useTheme()

  const handleOpenDialog = () => {
    setIsDialogOpen(true)
  }

  const handleCloseDialog = () => {
    setIsDialogOpen(false)
  }

  return (
    <DialogRoot open={isDialogOpen}>
      <Button
        onClick={handleOpenDialog}
        title={triggerText}
        {...triggerButtonProps}
      >
        {triggerButtonProps?.children}
        {triggerText}
      </Button>

      <DialogContent theme={theme} onClickOverlay={handleCloseDialog}>
        <DialogCloseButton theme={theme} onClick={handleCloseDialog}>
          <MdClose />
        </DialogCloseButton>

        <DialogTitle theme={theme}>{title}</DialogTitle>
        {description && (
          <DialogDescription theme={theme}>{description}</DialogDescription>
        )}

        {children}
      </DialogContent>
    </DialogRoot>
  )
}
