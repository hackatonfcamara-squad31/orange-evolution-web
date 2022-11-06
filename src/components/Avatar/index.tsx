import { FiUser } from 'react-icons/fi'
import { AvatarContainer, AvatarFallback, AvatarImage } from './styles'
import { ComponentProps } from 'react'

export interface AvatarImageProps extends ComponentProps<typeof AvatarImage> {
  size?: 'sm' | 'md' | 'lg'  
}

export function PrimitiveAvatar({ size='md', ...props }: AvatarImageProps) {
  return (
    <AvatarContainer size={size} >
      < AvatarImage {...props} />
      <AvatarFallback delayMs={600}>
        <FiUser />
      </AvatarFallback>
    </AvatarContainer>
  )
}
