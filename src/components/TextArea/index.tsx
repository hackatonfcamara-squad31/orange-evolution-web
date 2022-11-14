import { InputErrorMessage } from 'components/TextInput/styles'
import { useTheme } from 'contexts/ThemeContext'
import {
  Control,
  Controller,
  FieldError,
  RegisterOptions
} from 'react-hook-form'
import { TextAreaStyled } from './styles'

interface TextAreaProps {
  name?: string
  placeholder?: string
  control: Control
  validate?: RegisterOptions
  error?: FieldError
}

export function TextArea({
  name,
  placeholder,
  control,
  validate,
  error,
  ...props
}: TextAreaProps) {
  const { theme } = useTheme()

  return (
    <>
      <Controller
        rules={validate}
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <>
            <TextAreaStyled
              {...props}
              name="Description"
              placeholder="Descrição"
              value={value}
              onChange={onChange}
              error={!!error}
            />

            {error && (
              <InputErrorMessage theme={theme}>
                {error.message}
              </InputErrorMessage>
            )}
          </>
        )}
      ></Controller>
    </>
  )
}
