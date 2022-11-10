import { Button } from 'components/Button'
import { ButtonLink } from 'components/ButtonLink'
import { ButtonToggleTheme } from 'components/ButtonToggleTheme'
import { Header } from 'components/Header'
import { useTheme } from 'contexts/ThemeContext'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { BodyWrapper, Subtitle, Main, ButtonWrapper } from 'styles/pages/home'
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
        <ButtonToggleTheme style={{ position: 'absolute', right: '1rem' }} />
        <Main>
          <div
            style={{
              width: '50vw',
              minWidth: '350px',
              height: '50vh',
              minHeight: '200px',
              maxHeight: '500px',
              position: 'relative'
            }}
          >
            <Image
              src={logoOrangeEvolution}
              alt="logo da orange evolution"
              fill
            />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '2rem'
            }}
          >
            <Subtitle>
              Um guia de desenvolvimento para <br />
              seu start no mundo da tecnologia
            </Subtitle>

            <ButtonWrapper>
              <Button size="lg" isFullWidth>
                Acesse aqui
              </Button>
            </ButtonWrapper>
          </div>
        </Main>
      </BodyWrapper>
    </>
  )
}
