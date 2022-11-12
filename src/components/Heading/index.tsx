import { Slot } from '@radix-ui/react-slot'
import { useTheme } from 'contexts/ThemeContext'
import { ReactNode } from 'react'
import { StyledHeading } from './styles'

export interface HeadingProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  children: ReactNode
  asChild?: boolean
  color?: 'default' | 'gray'
}

export function Heading({
  size,
  children,
  asChild,
  color = 'default'
}: HeadingProps) {
  const { theme } = useTheme()
  const Comp = asChild ? Slot : 'h2'

  return (
    <StyledHeading theme={theme} size={size} as={Comp} color={color}>
      {children}
    </StyledHeading>
  )
}
