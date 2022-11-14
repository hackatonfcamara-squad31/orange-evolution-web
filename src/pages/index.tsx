import { orangeEvolutionLogo } from 'components/@constants'
import { AppLayout } from 'components/AppLayout'
import { ButtonLink } from 'components/ButtonLink'
import Head from 'next/head'
import Image from 'next/image'
import { ButtonWrapper, ImageWrapper, Subtitle } from 'styles/pages/home'

export default function Home() {
  return (
    <>
      <Head>
        <title>Orange Evolution | Home</title>
      </Head>

      <AppLayout>
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
      </AppLayout>
    </>
  )
}
