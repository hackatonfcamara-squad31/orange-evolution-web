import React from 'react'
import {
  CollapsibleRoot,
  Flex,
  CollapsibleTrigger,
  CollapsibleIconButton,
  RepositoryModule
} from './styles'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { useTheme } from 'contexts/ThemeContext'

import { Text } from 'components/Text'
import { ReactNode } from 'react'
import { Content } from 'components/Content'

export interface CollapsibleProps {
  children?: ReactNode
}

export function Collapsible({ children }: CollapsibleProps) {
  const [open, setOpen] = React.useState(false)
  const { theme } = useTheme()

  const rotateStyle = {
    transform: open ? 'rotate(90deg)' : '',
    transition: 'transform 0.3s ease-in-out'
  }

  return (
    <>
      <CollapsibleRoot open={open} onOpenChange={setOpen}>
        <CollapsibleTrigger asChild>
          <RepositoryModule theme={theme}>
            <Flex
              css={{
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: '0.5rem'
              }}
            >
              <CollapsibleIconButton theme={theme}>
                <MdKeyboardArrowRight style={rotateStyle} />
              </CollapsibleIconButton>
              <Text>{children}</Text>
            </Flex>
          </RepositoryModule>
        </CollapsibleTrigger>

        <Content>teste</Content>
      </CollapsibleRoot>
    </>
  )
}
