import { TextInput } from 'components/TextInput'
import { InputHTMLAttributes } from 'react'
import { Control, FieldError, RegisterOptions } from 'react-hook-form'

interface NameImputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError
  control?: Control
  isBig?: boolean
  validate?: RegisterOptions
}

export function InputGeneral({
  control,
  validate,
  isBig,
  ...props
}: NameImputProps) {
  return (
    <TextInput.Root required={props.required} isBig={isBig}>
      <TextInput.Input
        id="title"
        name="title"
        type="text"
        placeholder="Título"
        control={control}
        validate={validate}
        {...props}
      />
    </TextInput.Root>
  )
}
