import { TextInput } from 'components/TextInput'
import { ForwardedRef, InputHTMLAttributes } from 'react'
import { TbMail } from 'react-icons/tb'

interface InputEmailProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
  errorMessage?: string
  emailRef?: ForwardedRef<HTMLInputElement>
}

export function InputEmail({
  error = false,
  errorMessage = '',
  emailRef = null,
  ...props
}: InputEmailProps) {
  return (
    <TextInput.Root
      label="E-mail"
      labelFor="email"
      error={error}
      required={props.required}
      errorMessage={errorMessage}
    >
      <TextInput.Icon>
        <TbMail />
      </TextInput.Icon>

      <TextInput.Input
        id="email"
        type="email"
        placeholder="Digite seu e-mail"
        inputRef={emailRef}
        {...props}
      />
    </TextInput.Root>
  )
}
