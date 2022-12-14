import { useTheme } from 'contexts/ThemeContext'
import { InputHTMLAttributes, ReactNode, useState } from 'react'
import {
  Control,
  Controller,
  FieldError,
  RegisterOptions
} from 'react-hook-form'
import { TbEye, TbEyeOff } from 'react-icons/tb'
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
  label?: string
  labelFor?: string
  disabled?: boolean
  error?: FieldError
  isBig?: boolean
  required?: boolean
}

export interface TextInputIconProps {
  children: ReactNode
}

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  control?: Control
  validate?: RegisterOptions
  name: string
}

function TextInputRoot({
  children,
  labelFor = '',
  label = '',
  isBig,
  disabled = false,
  error,
  required = false
}: TextInputRootProps) {
  const { theme } = useTheme()

  return (
    <InputContainer>
      {label && (
        <InputLabel htmlFor={labelFor} theme={theme}>
          {label} {required && <span>*</span>}
        </InputLabel>
      )}

      <InputWrapper
        error={!!error}
        disabled={disabled}
        theme={theme}
        isBig={isBig}
      >
        {children}
      </InputWrapper>

      {error && (
        <InputErrorMessage theme={theme}>{error.message}</InputErrorMessage>
      )}
    </InputContainer>
  )
}

function TextInputIcon({ children }: TextInputIconProps) {
  const { theme } = useTheme()

  return <InputIcon theme={theme}>{children}</InputIcon>
}

export function TextInputInput({
  validate,
  control,
  ...props
}: TextInputInputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const { theme } = useTheme()

  const handleShowPassword = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }

  const showPassword = props.type === 'password' && isPasswordVisible

  return (
    <>
      {control ? (
        <Controller
          rules={validate}
          control={control}
          name={props.name}
          render={({ field: { onChange, value } }) => (
            <>
              <Input
                {...props}
                type={showPassword ? 'text' : props.type}
                theme={theme}
                onChange={onChange}
                value={value}
              />
            </>
          )}
        />
      ) : (
        <Input
          {...props}
          type={showPassword ? 'text' : props.type}
          theme={theme}
        />
      )}

      {props.type === 'password' && (
        <ShowPasswordButton
          type="button"
          title={isPasswordVisible ? 'Esconder senha' : 'Mostrar senha'}
          theme={theme}
          onClick={handleShowPassword}
        >
          {isPasswordVisible ? <TbEyeOff size={20} /> : <TbEye size={20} />}
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
