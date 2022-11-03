import { ButtonHTMLAttributes, ReactNode } from 'react'
import { RotatingLines } from 'react-loader-spinner'
import { PrimitiveButton } from './styles'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  theme: 'dark' | 'light'
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

export function Button({ children, isLoading, ...props }: ButtonProps) {
  // const theme = theme ? theme : globalStyles.theme    - Todos os componentes vão mudar de acordo com o tema padrão
  return (
    <PrimitiveButton {...props}>
      {isLoading ? loader : children}
    </PrimitiveButton>
  )
}
