import { TextInput } from 'components/TextInput'
import { ForwardedRef, InputHTMLAttributes } from 'react'
import { MdPersonOutline } from 'react-icons/md'

interface NameImputProps extends InputHTMLAttributes<HTMLInputElement> {
  error: boolean
  errorMessage: string
  nameRef: ForwardedRef<HTMLInputElement>
}

export function InputName({
  error,
  errorMessage,
  nameRef,
  ...props
}: NameImputProps) {
  return (
    <TextInput.Root
      label="Nome Completo"
      labelFor="name"
      error={error}
      required={props.required}
      errorMessage={errorMessage}
    >
      <TextInput.Icon>
        <MdPersonOutline />
      </TextInput.Icon>

      <TextInput.Input
        id="name"
        name="name"
        type="text"
        placeholder="Digite seu nome completo"
        inputRef={nameRef}
        {...props}
      />
    </TextInput.Root>
  )
}
