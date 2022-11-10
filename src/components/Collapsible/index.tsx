import { Text } from 'components/Text'
import { useTheme } from 'contexts/ThemeContext'
import { ReactNode, useState } from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { CollapsibleRoot, CollapsibleTrigger, ContentWrapper } from './styles'

export interface CollapsibleProps {
  title: string
  children: ReactNode
}

export function Collapsible({ title, children }: CollapsibleProps) {
  const [open, setOpen] = useState(false)
  const { theme } = useTheme()

  return (
    <>
      <CollapsibleRoot open={open} onOpenChange={setOpen}>
        <CollapsibleTrigger theme={theme}>
          <MdKeyboardArrowRight />

          <Text size="md" asChild>
            <h2>{title}</h2>
          </Text>
        </CollapsibleTrigger>

        <ContentWrapper>{children}</ContentWrapper>
      </CollapsibleRoot>
    </>
  )
}
