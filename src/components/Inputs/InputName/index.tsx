import { TextInput } from 'components/TextInput'
import { InputHTMLAttributes } from 'react'
import { Control, FieldError, RegisterOptions } from 'react-hook-form'
import { MdPersonOutline } from 'react-icons/md'

interface NameImputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError
  errorMessage?: string
  control?: Control
  isBig?: boolean
  validate?: RegisterOptions
}

export function InputName({
  error,
  errorMessage = '',
  control,
  validate,
  isBig,
  ...props
}: NameImputProps) {
  return (
    <TextInput.Root
      label="Nome Completo"
      labelFor="name"
      error={error}
      required={props.required}
      isBig={isBig}
    >
      <TextInput.Icon>
        <MdPersonOutline />
      </TextInput.Icon>

      <TextInput.Input
        id="name"
        name="name"
        type="text"
        placeholder="Digite seu nome completo"
        control={control}
        validate={validate}
        {...props}
      />
    </TextInput.Root>
  )
}
