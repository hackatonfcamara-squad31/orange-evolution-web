import { Button } from 'components/Button'
import { ButtonToggleTheme } from 'components/ButtonToggleTheme'
import { Header } from 'components/Header'
import { Text } from 'components/Text'
import { useTheme } from 'contexts/ThemeContext'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { BodyWrapper, H2, Main } from 'styles/pages/home'
import logoOrangeEvolution from '../../public/logoorangeevolution.svg'

export default function Home() {
  const { theme } = useTheme()

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <BodyWrapper theme={theme}>
        <Header />
        {/* <ButtonToggleTheme /> não está incluído no design */}
        <Main>
          <div style={{ width: '50vw', height: '45vh', position: 'relative' }}>
            <Image
              src={logoOrangeEvolution}
              alt="logo da orange evolution"
              fill
            />
          </div>
          <div>
            <Text size="md">
              <H2>
                Um guia de desenvolvimento para <br />
                seu start no mundo da tecnologia
              </H2>
            </Text>
          </div>
          <div style={{ width: '20vw' }}>
            <Button size="lg" isFullWidth>
              Acesse aqui
            </Button>
          </div>
        </Main>
      </BodyWrapper>
    </>
  )
}
