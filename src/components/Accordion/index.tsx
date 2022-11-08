import React from 'react'
import {
  CollapsibleRoot,
  Text,
  Flex,
  CollapsibleTrigger,
  CollapsibleIconButton,
  Repository,
  CollapsibleContent
} from './styles'
import { MdKeyboardArrowDown, MdKeyboardArrowLeft } from 'react-icons/md'

export function Collapsible() {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <CollapsibleRoot open={open} onOpenChange={setOpen}>
        <Repository>
          <Flex css={{ alignItems: 'center', justifyContent: 'space-between' }}>
            <Text>Módulo</Text>
            <Text css={{ color: 'white' }}>Teste</Text>
            <CollapsibleTrigger asChild>
              <CollapsibleIconButton>
                {open ? <MdKeyboardArrowDown /> : <MdKeyboardArrowLeft />}
              </CollapsibleIconButton>
            </CollapsibleTrigger>
          </Flex>
        </Repository>

        <CollapsibleContent>
          <Repository>
            <Text>Conteúdo</Text>
          </Repository>
          <Repository>
            <Text>Conteúdo</Text>
          </Repository>
          <Repository>
            <Text>Conteúdo</Text>
          </Repository>
        </CollapsibleContent>
      </CollapsibleRoot>
    </>
  )
}
