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
  required?: boolean
}

export interface TextInputIconProps {
  children: ReactNode
}

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  control?: Control
  validate?: RegisterOptions
}

function TextInputRoot({
  children,
  labelFor = '',
  label = '',
  disabled = false,
  error,
  required = false
}: TextInputRootProps) {
  const { theme } = useTheme()

  return (
    <InputContainer>
      <InputLabel htmlFor={labelFor}>
        {label} {required && <span>*</span>}
      </InputLabel>

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

  if (control) {
    return (
      <>
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

        {props.type === 'password' && (
          <ShowPasswordButton
            type="button"
            theme={theme}
            onClick={handleShowPassword}
          >
            {isPasswordVisible ? <TbEyeOff /> : <TbEye />}
          </ShowPasswordButton>
        )}
      </>
    )
  }

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
          theme={theme}
          onClick={handleShowPassword}
        >
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
