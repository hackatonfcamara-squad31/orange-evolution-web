import { Theme } from 'contexts/ThemeContext'
import { ComponentProps } from 'react'
import { BsPersonCircle } from 'react-icons/bs'
import { AvatarContainer, AvatarFallback, AvatarImage } from './styles'

export interface AvatarImageProps extends ComponentProps<typeof AvatarImage> {
  theme: Theme
  size?: 'sm' | 'md' | 'lg'
  withBorder?: boolean
}

export function PrimitiveAvatar({
  theme,
  size = 'md',
  withBorder,
  ...props
}: AvatarImageProps) {
  function getFallbackIconSize() {
    switch (size) {
      case 'sm':
        return 24
      case 'md':
        return 32
      case 'lg':
        return 48
      default:
        return 32
    }
  }

  return (
    <AvatarContainer size={size} withBorder={withBorder} theme={theme}>
      <AvatarImage {...props} />
      <AvatarFallback delayMs={600} theme={theme}>
        <BsPersonCircle size={getFallbackIconSize()} />
      </AvatarFallback>
    </AvatarContainer>
  )
}
