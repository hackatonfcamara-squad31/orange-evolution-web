import Head from 'next/head'
import { useTheme } from 'contexts/ThemeContext'
import { BodyWrapper, Main } from 'styles/pages/home'
import { ButtonToggleTheme } from 'components/ButtonToggleTheme'
import { Collapsible } from 'components/Accordion'
import { Flex } from '../../components/Accordion/styles'

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
            <Collapsible></Collapsible>
            <Collapsible></Collapsible>
            <Collapsible></Collapsible>
            <Collapsible></Collapsible>
          </Flex>
        </Main>
      </BodyWrapper>
    </>
  )
}
