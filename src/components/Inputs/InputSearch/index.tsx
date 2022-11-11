import { TextInput } from 'components/TextInput'
import useDebounce from 'hooks/useDebounce'
import { ChangeEvent, InputHTMLAttributes, useEffect, useState } from 'react'
import { TbSearch } from 'react-icons/tb'

interface InputSearchProps extends InputHTMLAttributes<HTMLInputElement> {}

export function InputSearch({ ...props }: InputSearchProps) {
  const [search, setSearch] = useState('')
  const debouncedValue = useDebounce<string>(search, 500)

  // console.log('🚀 ~ search', search)

  useEffect(() => {
    // Triggers when "debouncedValue" changes
  }, [debouncedValue])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  return (
    <TextInput.Root>
      <TextInput.Input
        id="search-content"
        name="search-content"
        type="search"
        onChange={handleChange}
        value={search}
        {...props}
      />
      <TextInput.Icon>
        <TbSearch color="#FF5A23" />
      </TextInput.Icon>
    </TextInput.Root>
  )
}
