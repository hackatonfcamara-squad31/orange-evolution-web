import Head from 'next/head'
import { useTheme } from 'contexts/ThemeContext'
import { BodyWrapper, Main } from 'styles/pages/home'
import { ButtonToggleTheme } from 'components/ButtonToggleTheme'
import { Collapsible } from 'components/Collapsible'
import { Flex } from '../../components/Collapsible/styles'
import { Content } from 'components/Content'

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
          <Flex css={{ flexDirection: 'column' }}>
            <Collapsible>Módulo 1 </Collapsible>
            <Collapsible>Módulo 2</Collapsible>
            <Collapsible>Módulo 3</Collapsible>
          </Flex>
        </Main>
      </BodyWrapper>
    </>
  )
}
