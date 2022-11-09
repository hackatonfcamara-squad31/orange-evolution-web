import {
  CollapsibleContent,
  CollapsibleContentWrapper,
  RepositoryContent
} from 'components/Content/styles'
import { Checkbox } from 'components/Checkbox'
import { useTheme } from 'contexts/ThemeContext'
import { ReactNode } from 'react'

export interface ContentProps {
  children?: ReactNode
}

export function Content({ children }: ContentProps) {
  const { theme } = useTheme()
  return (
    <>
      <CollapsibleContentWrapper>
        <CollapsibleContent>
          <RepositoryContent theme={theme}>
            <Checkbox size="md" />
            {children}
          </RepositoryContent>
        </CollapsibleContent>
      </CollapsibleContentWrapper>
    </>
  )
}
