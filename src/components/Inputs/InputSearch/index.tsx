import { TextInput } from 'components/TextInput'
import useDebounce from 'hooks/useDebounce'
import { Content } from 'libs/content/types'
import { Module } from 'libs/module/types'
import {
  ChangeEvent,
  Dispatch,
  InputHTMLAttributes,
  SetStateAction,
  useEffect,
  useState
} from 'react'
import { TbSearch } from 'react-icons/tb'

export type ItemsArrayType = Array<Content | Module>

interface InputSearchProps extends InputHTMLAttributes<HTMLInputElement> {
  items: ItemsArrayType
  setFilteredItems: Dispatch<SetStateAction<ItemsArrayType>>
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

    filteredItems.sort((a, b) => {
      return a?.order - b?.order
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
