import { ButtonHTMLAttributes, ReactNode } from 'react'
import { BallTriangle } from 'react-loader-spinner'
import { useTheme } from '../../contexts/ThemeContext'
import { PrimitiveButton } from './styles'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl'
  disabled?: boolean
  isLoading?: boolean
  isFullWidth?: boolean
  isOnlyIcon?: boolean
}

const ButtonLoader = () => {
  return (
    <BallTriangle
      height={24}
      width={24}
      radius={5}
      ariaLabel="carregando..."
      visible={true}
    />
  )
}

export function Button({ size = 'md', children, ...props }: ButtonProps) {
  const { theme } = useTheme()

  return (
    <PrimitiveButton size={size} theme={theme} {...props}>
      {!props.isLoading && props.isOnlyIcon && children}
      {!props.isLoading && !props.isOnlyIcon && children}

      {props.isLoading && !props.isOnlyIcon && children}
      {props.isLoading && <ButtonLoader />}
    </PrimitiveButton>
  )
}
