import { useTheme } from 'contexts/ThemeContext'
import { ReactNode } from 'react'
import { Header } from '../Header'
import { BodyWrapper, Main } from './styles'

interface AppLayoutProps {
  children: ReactNode
}

export function Layout({ children }: AppLayoutProps) {
  const { theme } = useTheme()

  return (
    <BodyWrapper theme={theme}>
      <Header />

      <Main>{children}</Main>
    </BodyWrapper>
  )
}
