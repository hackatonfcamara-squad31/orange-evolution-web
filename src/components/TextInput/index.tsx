import { useTheme } from 'contexts/ThemeContext'
import { InputHTMLAttributes, ReactNode, useState } from 'react'
import { TbEye, TbEyeOff } from 'react-icons/tb'
import {
  useForm,
  Controller,
  RegisterOptions,
  FieldError
} from 'react-hook-form'
import {
  Input,
  InputContainer,
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
  error?: FieldError
  errorMessage?: string
}

export interface TextInputIconProps {
  children: ReactNode
}

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  control: any
  validate?: RegisterOptions
}

function TextInputRoot({
  children,
  labelFor,
  label,
  disabled = false,
  error
}: TextInputRootProps) {
  const { theme } = useTheme()

  return (
    <InputContainer>
      <InputLabel htmlFor={labelFor}>{label}</InputLabel>

      <InputWrapper error={!!error} disabled={disabled} theme={theme}>
        {children}
      </InputWrapper>
      {error && <InputErrorMessage>{error.message}</InputErrorMessage>}
    </InputContainer>
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
      <Controller //monitora o componente Input
        rules={props.validate} //pode usar no lugar do yup caso queira, RegisterOptions do react-hook-form
        control={props.control}
        name={props.name}
        render={({ field: { onChange, value } }) => (
          <>
            <Input
              {...props}
              type={showPassword ? 'text' : props.type}
              theme={theme}
              onChange={onChange} // manda o value para o hook form
              value={value}
            />
          </>
        )}
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
