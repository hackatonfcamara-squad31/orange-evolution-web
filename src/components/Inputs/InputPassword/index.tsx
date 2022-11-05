import { TextInput } from 'components/TextInput'
import { ForwardedRef, InputHTMLAttributes } from 'react'
import { TbLock } from 'react-icons/tb'

interface InputPasswordProps extends InputHTMLAttributes<HTMLInputElement> {
  error: boolean
  errorMessage: string
  passwordRef: ForwardedRef<HTMLInputElement>
}

export function InputPassword({
  error,
  errorMessage,
  passwordRef,
  ...props
}: InputPasswordProps) {
  return (
    <TextInput.Root
      label="Senha"
      labelFor="password"
      error={error}
      required={props.required}
      errorMessage={errorMessage}
    >
      <TextInput.Icon>
        <TbLock />
      </TextInput.Icon>

      <TextInput.Input
        id="password"
        type="password"
        placeholder="Digite sua senha"
        inputRef={passwordRef}
        {...props}
      />
    </TextInput.Root>
  )
}
