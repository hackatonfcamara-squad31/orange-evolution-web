import { ButtonHTMLAttributes, ReactNode } from 'react'
import { BallTriangle } from 'react-loader-spinner'
import { useTheme } from '../../contexts/ThemeContext'
import { PrimitiveButton } from './styles'

export type ButtonColors = 'red' | 'green' | 'default'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl'
  disabled?: boolean
  isLoading?: boolean
  isFullWidth?: boolean
  isOnlyIcon?: boolean
  color?: ButtonColors
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

export function Button({
  size = 'md',
  children,
  color = 'default',
  ...props
}: ButtonProps) {
  const { theme } = useTheme()

  return (
    <PrimitiveButton size={size} theme={theme} {...props} color={color}>
      {!props.isLoading && props.isOnlyIcon && children}
      {!props.isLoading && !props.isOnlyIcon && children}

      {props.isLoading && !props.isOnlyIcon && children}
      {props.isLoading && <ButtonLoader />}
    </PrimitiveButton>
  )
}
