import { ButtonLink } from 'components/ButtonLink'
import { Header } from 'components/Header'
import { useTheme } from 'contexts/ThemeContext'
import Head from 'next/head'
import Image from 'next/image'
import {
  BodyWrapper,
  ButtonWrapper,
  ImageWrapper,
  Main,
  Subtitle
} from 'styles/pages/home'

import orangeEvolutionLogo from '@/public/orangeEvolutionLogo.svg'

export default function Home() {
  const { theme } = useTheme()

  return (
    <>
      <Head>
        <title>Orange Evolution | Home</title>
      </Head>
      <BodyWrapper theme={theme}>
        <Header />
        <Main>
          <ImageWrapper>
            <Image src={orangeEvolutionLogo} alt="Orange Evolution Logo" fill />
          </ImageWrapper>

          <Subtitle>
            Um guia de desenvolvimento para seu start no mundo da tecnologia
          </Subtitle>

          <ButtonWrapper>
            <ButtonLink size="lg" isFullWidth href="/login">
              Acesse aqui
            </ButtonLink>
          </ButtonWrapper>
        </Main>
      </BodyWrapper>
    </>
  )
}
