import { orangeEvolutionLogo } from 'components/@constants'
import { ButtonLink } from 'components/ButtonLink'
import { Header } from 'components/Header'
import { Heading } from 'components/Heading'
import { Progress } from 'components/Progress'
import { Text } from 'components/Text'
import { useTheme } from 'contexts/ThemeContext'
import { getCookie } from 'cookies-next'
import useWindowSize from 'hooks/useWindowSize'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { getAuthUser } from 'libs/auth/api'
import { getAllTrails } from 'libs/trail/api'
import { Trail } from 'libs/trail/types'
import { User } from 'libs/user/types'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { BodyWrapper, Main } from 'styles/pages/home'
import {
  ButtonWrapper,
  Card,
  CardImage,
  CardWrapper,
  TextWrapper
} from 'styles/pages/trilhas'

interface TrailsProps {
  user: User
  trails: Trail[]
}
interface Size {
  width: number | undefined
  height: number | undefined
}

export default function Trails({ user, trails }: TrailsProps) {
  const { theme } = useTheme()
  const size: Size = useWindowSize()
  // const { name, email } = user

  const [sliderRef] = useKeenSlider({
    breakpoints: {
      '(max-width: 900px)': {
        slides: { origin: 'center', perView: 2.5, spacing: 10 }
      },
      '(max-width: 768px)': {
        slides: { origin: 'center', perView: 2, spacing: 10 }
      },
      '(max-width: 600px)': {
        slides: { origin: 'center', perView: 1.8, spacing: 10 }
      },
      '(max-width: 400px)': {
        slides: { origin: 'center', perView: 1.35, spacing: 7 }
      }
    },
    slides: { origin: 'center', perView: 2.5, spacing: 10 }
  })

  return (
    <>
      <Head>
        <title>Trilhas</title>
      </Head>
      <BodyWrapper theme={theme}>
        <Header />
        <Main style={{ padding: '2rem 0' }}>
          <Image
            src={orangeEvolutionLogo}
            alt="Logo da orange evolution"
            width={197}
            height={122}
          />
          <Heading asChild size="lg">
            <h1>Escolha sua trilha!</h1>
          </Heading>

          {size.width > 900 ? (
            <>
              <TextWrapper>
                <Text asChild>
                  <p>
                    O Orange Evolution consiste em trilhas totalmente gratuitas
                    para que você possa iniciar a sua carreira na tecnologia.
                    Você terá acesso a vídeos, lives, artigos, apostilas e até
                    cursos gratuitos, além desses conteúdos serem da Orange
                    Juice, de parceiros e empresas que confiamos.
                  </p>
                </Text>

                <br />

                <Text asChild>
                  <p>
                    Essa trilha foi montada pensando em quem está começando na
                    área, ou passando por uma migração de carreira e ainda não
                    sabe exatamente o que é esse mundo. Então, aperta o cinto e
                    vem com a gente nessa jornada!
                  </p>
                </Text>
              </TextWrapper>

              <CardWrapper>
                {trails.map((trail) => (
                  <Card key={trail.id} theme={theme}>
                    <Heading>{trail.title}</Heading>

                    <CardImage
                      src={trail.icon_url}
                      alt={trail.title}
                      width={100}
                      height={100}
                    />

                    <Progress
                      isTrailPage
                      donePercentage={
                        trail.total === 0
                          ? 0
                          : (trail.completed / trail.total) * 100
                      }
                    />

                    <ButtonWrapper>
                      <ButtonLink href={`/trilha/${trail.id}`}>
                        Acesssar
                      </ButtonLink>
                    </ButtonWrapper>
                  </Card>
                ))}
              </CardWrapper>
            </>
          ) : (
            <>
              <TextWrapper>
                <Text asChild>
                  <p>
                    O Orange Evolution consiste em trilhas totalmente gratuitas
                    para que você possa iniciar a sua carreira na tecnologia e
                    ainda não sabe exatamente o que é esse mundo. Então, aperta
                    o cinto e vem com a gente nessa jornada!
                  </p>
                </Text>
              </TextWrapper>

              <CardWrapper ref={sliderRef} className="keen-slider">
                {trails.map((trail) => {
                  return (
                    <Card
                      key={trail.id}
                      theme={theme}
                      className="keen-slider__slide"
                    >
                      <Heading>{trail.title}</Heading>
                      <CardImage
                        src={trail.icon_url}
                        alt={trail.title}
                        width={100}
                        height={100}
                      />
                      <Progress
                        isTrailPage
                        donePercentage={
                          trail.total === 0
                            ? 0
                            : (trail.completed / trail.total) * 100
                        }
                      />
                      <ButtonWrapper>
                        <ButtonLink href={`/trilha/${trail.id}`}>
                          Acessar
                        </ButtonLink>
                      </ButtonWrapper>
                    </Card>
                  )
                })}
              </CardWrapper>
            </>
          )}
        </Main>
      </BodyWrapper>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const token = getCookie(process.env.NEXT_PUBLIC_AUTH_COOKIE_NAME, ctx)

  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  const user = await getAuthUser(token.toString())

  if (!user) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  try {
    const trails = await getAllTrails(token.toString())

    return {
      props: {
        user,
        trails
      }
    }
  } catch (error) {
    return {
      notFound: true
    }
  }
}
