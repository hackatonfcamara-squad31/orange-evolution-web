import { ButtonHTMLAttributes, ReactNode } from 'react'
import { RotatingLines } from 'react-loader-spinner'
import { PrimitiveButton } from './styles'
import { useTheme } from '../../contexts/ThemeContext'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  isLoading?: boolean
}

const loader = (
  <RotatingLines
    strokeColor="black"
    strokeWidth="5"
    animationDuration="1"
    width="1.25rem"
    visible={true}
  />
)
export function Button({
  size = 'md',
  children,
  isLoading,
  ...props
}: ButtonProps) {
  
  const { theme } = useTheme()

  return (
    <PrimitiveButton size={size} theme={theme} {...props}>
      {isLoading ? loader : children}
    </PrimitiveButton>
  )
}
