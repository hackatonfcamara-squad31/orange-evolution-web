import { ButtonToggleTheme } from 'components/ButtonToggleTheme'
import { Collapsible } from 'components/Collapsible'
import { Content } from 'components/Content'
import { useTheme } from 'contexts/ThemeContext'
import Head from 'next/head'
import { BodyWrapper, Main } from 'styles/pages/home'

export default function Home() {
  const { theme } = useTheme()

  return (
    <>
      <Head>
        <title>Collapsible</title>
      </Head>
      <BodyWrapper theme={theme}>
        <Main>
          <h1>Collapsible</h1>

          <ButtonToggleTheme />

          <Collapsible title="Módulo 1">
            <Content>teste</Content>
            <Content>teste</Content>
            <Content>teste</Content>
            <Content>teste</Content>
          </Collapsible>
          <Collapsible title="Módulo 2">
            <Content>teste</Content>
            <Content>teste</Content>
            <Content>teste</Content>
            <Content>teste</Content>
          </Collapsible>
        </Main>
      </BodyWrapper>
    </>
  )
}
