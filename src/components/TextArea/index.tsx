import { TextAreaStyled } from './styles'

interface TextAreaProps {
  name?: string
  placeholder?: string
}

export function TextArea({ name, placeholder, ...props }: TextAreaProps) {
  return (
    <>
      <TextAreaStyled name="Description" placeholder="Descrição" />
    </>
  )
}
