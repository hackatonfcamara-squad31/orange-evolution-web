import { ReactNode } from 'react'
import { StyledText } from './styles'
import { Slot } from '@radix-ui/react-slot'

interface TextProps {
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  asChild?: boolean
}

export function Text({ size = 'md', asChild, children }: TextProps) {
  const Comp = asChild && typeof children !== 'string' ? Slot : 'span'

  return (
    <StyledText size={size} as={Comp}>
      {children}
    </StyledText>
  )
}
