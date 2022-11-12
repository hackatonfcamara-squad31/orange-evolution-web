import { TextInput } from 'components/TextInput'
import useDebounce from 'hooks/useDebounce'
import { Content } from 'libs/content/types'
import { Module } from 'libs/module/types'
import { ChangeEvent, InputHTMLAttributes, useEffect, useState } from 'react'
import { TbSearch } from 'react-icons/tb'

interface InputSearchProps extends InputHTMLAttributes<HTMLInputElement> {
  // items as array of Module or Content
  items: Array<Content | Module>
  setFilteredItems: (items: any[]) => void
  setIsSearching: (isSearching: boolean) => void
}

export function InputSearch({
  items,
  setFilteredItems,
  setIsSearching,
  ...props
}: InputSearchProps) {
  const [search, setSearch] = useState('')
  const debouncedValue = useDebounce<string>(search, 500)

  useEffect(() => {
    setIsSearching(true)
    const filteredItems = items.filter((item) => {
      return item.title.toLowerCase().includes(debouncedValue.toLowerCase())
    })

    setFilteredItems(filteredItems)

    setIsSearching(false)
  }, [debouncedValue, items, setFilteredItems, setIsSearching])

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
