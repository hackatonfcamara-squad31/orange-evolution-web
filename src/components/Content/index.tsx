import { Checkbox } from 'components/Checkbox'
import { RepositoryContent } from 'components/Content/styles'
import { useTheme } from 'contexts/ThemeContext'
import { ReactNode } from 'react'

export interface ContentProps {
  children?: ReactNode
}

export function Content({ children }: ContentProps) {
  const { theme } = useTheme()
  return (
    <RepositoryContent theme={theme}>
      <Checkbox size="sm" />
      {children}
    </RepositoryContent>
  )
}
