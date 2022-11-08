import React from 'react'
import {
  CollapsibleRoot,
  Text,
  Flex,
  CollapsibleTrigger,
  CollapsibleIconButton,
  RepositoryContent,
  RepositoryModule,
  CollapsibleContent
} from './styles'
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from 'react-icons/md'
import { useTheme } from 'contexts/ThemeContext'
import { Checkbox } from 'components/Checkbox'

export function Collapsible() {
  const [open, setOpen] = React.useState(false)
  const { theme } = useTheme()

  return (
    <>
      <CollapsibleRoot open={open} onOpenChange={setOpen}>
        <RepositoryModule theme={theme}>
          <Flex
            css={{
              alignItems: 'center',
              justifyContent: 'flex-start',
              gap: '0.5rem'
            }}
          >
            <CollapsibleTrigger asChild>
              <CollapsibleIconButton theme={theme}>
                {open ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
              </CollapsibleIconButton>
            </CollapsibleTrigger>
            <Text>O início</Text>
          </Flex>
        </RepositoryModule>

        <CollapsibleContent>
          <RepositoryContent theme={theme}>
            <Checkbox size="md" />
            <Text>Conteúdo</Text>
          </RepositoryContent>
          <RepositoryContent theme={theme}>
            <Checkbox size="md" />
            <Text>Conteúdo</Text>
          </RepositoryContent>
          <RepositoryContent theme={theme}>
            <Checkbox size="md" />
            <Text>Conteúdo</Text>
          </RepositoryContent>
        </CollapsibleContent>
      </CollapsibleRoot>
    </>
  )
}
