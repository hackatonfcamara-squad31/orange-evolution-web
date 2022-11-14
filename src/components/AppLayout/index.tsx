import { Header } from 'components/Header'
import { useTheme } from 'contexts/ThemeContext'
import { ReactNode } from 'react'
import { BodyWrapper, Main } from 'styles/app'

interface AppLayoutProps {
  children: ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
  const { theme } = useTheme()

  return (
    <BodyWrapper theme={theme}>
      <Header />

      <Main>{children}</Main>
    </BodyWrapper>
  )
}
