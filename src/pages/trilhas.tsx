import { orangeEvolutionLogo } from 'components/@constants'
import { ButtonLink } from 'components/ButtonLink'
import { Header } from 'components/Header'
import { Heading } from 'components/Heading'
import { Text } from 'components/Text'
import { useTheme } from 'contexts/ThemeContext'
import { getCookie } from 'cookies-next'
import useWindowSize from 'hooks/useWindowSize'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { getAuthUser } from 'libs/auth/api'
import { useTrails } from 'libs/trail/hooks'
import { useTrailStore } from 'libs/trail/store'
import { User } from 'libs/user/types'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { BodyWrapper, Main } from 'styles/pages/home'
import {
  ButtonWrapper,
  Card,
  CardImage,
  CardList,
  CardListWrapper,
  TextWrapper
} from 'styles/pages/trilhas'

interface TrailsProps {
  token: string
  user: User
}

export default function Trails({ token, user }: TrailsProps) {
  const [sliderRef] = useKeenSlider({
    initial: 0,
    slides: {
      perView: 2,
      spacing: 20
    },
    breakpoints: {
      '(max-width: 480px)': {
        slides: {
          perView: 1,
          spacing: 20
        }
      }
    }
  })

  const { theme } = useTheme()

  const { width } = useWindowSize()

  const { isLoading } = useTrails(token)

  const { trails } = useTrailStore()

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

          <TextWrapper>
            <Text asChild>
              <p>
                O Orange Evolution consiste em trilhas totalmente gratuitas para
                que você possa iniciar a sua carreira na tecnologia. Você terá
                acesso a vídeos, lives, artigos, apostilas e até cursos
                gratuitos, além desses conteúdos serem da Orange Juice, de
                parceiros e empresas que confiamos.
              </p>
            </Text>

            <br />

            <Text asChild>
              <p>
                Essa trilha foi montada pensando em quem está começando na área,
                ou passando por uma migração de carreira e ainda não sabe
                exatamente o que é esse mundo. Então, aperta o cinto e vem com a
                gente nessa jornada!
              </p>
            </Text>
          </TextWrapper>

          <CardListWrapper>
            <CardList
              ref={width <= 768 ? sliderRef : null}
              className={width <= 768 ? 'keen-slider' : ''}
            >
              {trails.map((trail) => (
                <Card
                  key={trail.id}
                  theme={theme}
                  className={width <= 768 ? 'keen-slider__slide' : ''}
                >
                  <Heading>{trail.title}</Heading>

                  <CardImage
                    src={trail.icon_url}
                    alt={trail.title}
                    width={100}
                    height={100}
                  />

                  <ButtonWrapper>
                    <ButtonLink href={`/admin/trilha/${trail.id}`}>
                      Acesssar
                    </ButtonLink>
                  </ButtonWrapper>
                </Card>
              ))}
            </CardList>
          </CardListWrapper>
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

  return {
    props: {
      token,
      user
    }
  }
}
