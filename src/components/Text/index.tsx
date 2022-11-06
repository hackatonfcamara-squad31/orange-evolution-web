import { Slot } from '@radix-ui/react-slot'
import { useTheme } from 'contexts/ThemeContext'
import { ReactNode } from 'react'
import { StyledText } from './styles'

export type TextSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

interface TextProps {
  size?: TextSizes
  children: ReactNode
  asChild?: boolean
}

export function Text({ size = 'md', asChild, children }: TextProps) {
  const { theme } = useTheme()
  const Comp = asChild ? Slot : 'span'

  return (
    <StyledText theme={theme} size={size} as={Comp}>
      {children}
    </StyledText>
  )
}
