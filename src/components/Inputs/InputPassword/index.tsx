import { TextInput } from 'components/TextInput'
import { InputHTMLAttributes } from 'react'
import { Control, FieldError, RegisterOptions } from 'react-hook-form'
import { TbLock } from 'react-icons/tb'

interface InputPasswordProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError
  control?: Control
  isBig?: boolean
  validate?: RegisterOptions
}

export function InputPassword({
  error,
  control,
  validate,
  isBig,
  ...props
}: InputPasswordProps) {
  return (
    <TextInput.Root
      label="Senha"
      labelFor="password"
      error={error}
      required={props.required}
      isBig={isBig}
    >
      <TextInput.Icon>
        <TbLock />
      </TextInput.Icon>

      <TextInput.Input
        id="password"
        type="password"
        name="password"
        placeholder="Senha:"
        control={control}
        validate={validate}
        {...props}
      />
    </TextInput.Root>
  )
}
