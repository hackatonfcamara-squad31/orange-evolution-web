import { TextAreaStyled } from './styles'
import { Control, Controller, RegisterOptions } from 'react-hook-form'

interface TextAreaProps {
  name?: string
  placeholder?: string
  control: Control
  validate?: RegisterOptions
}

export function TextArea({
  name,
  placeholder,
  control,
  validate,
  ...props
}: TextAreaProps) {
  return (
    <>
      <Controller
        rules={validate}
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <TextAreaStyled
            {...props}
            name="Description"
            placeholder="Descrição"
            value={value}
            onChange={onChange}
          />
        )}
      ></Controller>
    </>
  )
}
