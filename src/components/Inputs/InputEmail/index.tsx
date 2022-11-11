import { TextInput } from 'components/TextInput'
import { InputHTMLAttributes } from 'react'
import { Control, FieldError, RegisterOptions } from 'react-hook-form'
import { TbMail } from 'react-icons/tb'

interface InputEmailProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError
  control?: Control
  isBig?: boolean
  validate?: RegisterOptions
}

export function InputEmail({
  error,
  control,
  validate,
  isBig,
  ...props
}: InputEmailProps) {
  return (
    <TextInput.Root
      label="Email"
      labelFor="email"
      error={error}
      required={props.required}
      isBig={isBig}
    >
      <TextInput.Icon>
        <TbMail />
      </TextInput.Icon>

      <TextInput.Input
        id="email"
        name="email"
        type="email"
        placeholder="Email:"
        control={control}
        validate={validate}
        {...props}
      />
    </TextInput.Root>
  )
}
