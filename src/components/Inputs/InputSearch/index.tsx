import { TextInput } from 'components/TextInput'
import useDebounce from 'hooks/useDebounce'
import { ChangeEvent, InputHTMLAttributes, useEffect, useState } from 'react'
import { TbSearch } from 'react-icons/tb'

interface InputSearchProps extends InputHTMLAttributes<HTMLInputElement> {}

export function InputSearch({ ...props }: InputSearchProps) {
  const [search, setSearch] = useState('')
  const debouncedValue = useDebounce<string>(search, 500)

  console.log('🚀 ~ search', search)

  useEffect(() => {
    // Triggers when "debouncedValue" changes
  }, [debouncedValue])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  return (
    <TextInput.Root>
      <TextInput.Icon>
        <TbSearch />
      </TextInput.Icon>

      <TextInput.Input
        id="search-content"
        name="search-content"
        type="search"
        placeholder="Buscar conteúdo"
        onChange={handleChange}
        value={search}
        {...props}
      />
    </TextInput.Root>
  )
}
