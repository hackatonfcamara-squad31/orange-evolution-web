import { TextInput } from 'components/TextInput'
import { InputHTMLAttributes } from 'react'
import { Control, FieldError, RegisterOptions } from 'react-hook-form'
import { TbMail } from 'react-icons/tb'

interface InputEmailProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError
  control: Control
  validate?: RegisterOptions
}

export function InputEmail({
  error,
  control,
  validate,
  ...props
}: InputEmailProps) {
  return (
    <TextInput.Root
      label="E-mail"
      labelFor="email"
      error={error}
      required={props.required}
    >
      <TextInput.Icon>
        <TbMail />
      </TextInput.Icon>

      <TextInput.Input
        id="email"
        name="email"
        type="email"
        placeholder="Digite seu e-mail"
        control={control}
        validate={validate}
        {...props}
      />
    </TextInput.Root>
  )
}
