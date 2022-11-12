import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react'
import { BallTriangle } from 'react-loader-spinner'
import { useTheme } from '../../contexts/ThemeContext'
import { PrimitiveButton } from './styles'

export type ButtonColors = 'red' | 'green' | 'default' | 'gray' | 'purple'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl'
  disabled?: boolean
  isLoading?: boolean
  isFullWidth?: boolean
  isOnlyIcon?: boolean
  color?: ButtonColors
  asAnchor?: boolean
  target?: '_blank' | '_self' | '_parent' | '_top'
  rel?: 'noreferrer noopener'
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

export const Button = forwardRef(
  (
    {
      size = 'md',
      children,
      color = 'default',
      asAnchor = false,
      ...props
    }: ButtonProps,
    ref
  ) => {
    const { theme } = useTheme()
    const Comp = asAnchor ? 'a' : 'button'

    return (
      <PrimitiveButton
        size={size}
        theme={theme}
        {...props}
        color={color}
        as={Comp}
      >
        {!props.isLoading && children}

        {props.isLoading && !props.isOnlyIcon && children}
        {props.isLoading && <ButtonLoader />}
      </PrimitiveButton>
    )
  }
)

Button.displayName = 'Button'
