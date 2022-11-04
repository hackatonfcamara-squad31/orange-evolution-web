import { useTheme } from 'contexts/ThemeContext'
import { InputHTMLAttributes, ReactNode, useState } from 'react'
import { TbEye, TbEyeOff } from 'react-icons/tb'
import {
  Input,
  InputErrorMessage,
  InputIcon,
  InputLabel,
  InputWrapper,
  ShowPasswordButton
} from './styles'

export interface TextInputRootProps {
  children: ReactNode
  label: string
  labelFor: string
  disabled?: boolean
  error?: boolean
  errorMessage?: string
}

export interface TextInputIconProps {
  children: ReactNode
}

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputRoot({
  children,
  labelFor,
  label,
  disabled = false,
  error = false,
  errorMessage = ''
}: TextInputRootProps) {
  const { theme } = useTheme()

  return (
    <div>
      <InputLabel htmlFor={labelFor}>{label}</InputLabel>

      <InputWrapper error={error} disabled={disabled} theme={theme}>
        {children}
      </InputWrapper>

      {error && <InputErrorMessage>{errorMessage}</InputErrorMessage>}
    </div>
  )
}

function TextInputIcon({ children }: TextInputIconProps) {
  const { theme } = useTheme()

  return <InputIcon theme={theme}>{children}</InputIcon>
}

export function TextInputInput(props: TextInputInputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const { theme } = useTheme()

  const handleShowPassword = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }

  const showPassword = props.type === 'password' && isPasswordVisible

  return (
    <>
      <Input
        {...props}
        type={showPassword ? 'text' : props.type}
        theme={theme}
      />

      {props.type === 'password' && (
        <ShowPasswordButton theme={theme} onClick={handleShowPassword}>
          {isPasswordVisible ? <TbEyeOff /> : <TbEye />}
        </ShowPasswordButton>
      )}
    </>
  )
}

TextInputRoot.displayName = 'TextInput.Root'
TextInputIcon.displayName = 'TextInput.Icon'
TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon
}
