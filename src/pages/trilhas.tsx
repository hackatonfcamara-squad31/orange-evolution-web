import { Button } from 'components/Button'
import { ButtonToggleTheme } from 'components/ButtonToggleTheme'
import { Header } from 'components/Header'
import { Text } from 'components/Text'
import { useTheme } from 'contexts/ThemeContext'
import { getCookie } from 'cookies-next'
import { getAuthUser } from 'libs/auth/api'
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
  TextWrapper,
  Title
} from 'styles/pages/trilhas'
import orangeEvolutionLogo from '../../public/orangeEvolutionLogo.svg'
import logoAvatarUser from '../../public/user.svg'
import logoPrancheta from '../../public/prancheta.svg'
import logoNotebook from '../../public/notebook.svg'
import logoEsquadro from '../../public/esquadro.svg'
import { Progress } from 'components/Progress'
import { Trail } from 'libs/trails/types'
import { getAllTrails } from 'libs/trails/api'

interface TrailsProps {
  user: User
  trails: Trail[]
}

export default function Trails({ user, trails }: TrailsProps) {
  const { theme } = useTheme()

  // const { name, email } = user

  return (
    <>
      <Head>
        <title>Trilhas</title>
      </Head>
      <BodyWrapper theme={theme}>
        <Header />
        <ButtonToggleTheme style={{ position: 'absolute', right: '1rem' }} />
        <Main>
          <Image
            src={orangeEvolutionLogo}
            alt="logo da orange evolution"
            width={197}
            height={122}
          />
          <TextWrapper>
            <Text>
              O Orange Evolution consiste em trilhas totalmente gratuitas para
              que você possa iniciar a sua carreira na tecnologia. Você terá
              acesso a vídeos, lives, artigos, apostilas e até cursos gratuitos,
              além desses conteúdos serem da Orange Juice, de parceiros e
              empresas que confiamos.
            </Text>
          </TextWrapper>
          <TextWrapper>
            <Text>
              Essa trilha foi montada pensando em quem está começando na área,
              ou passando por uma migração de carreira e ainda não sabe
              exatamente o que é esse mundo. Então, aperta o cinto e vem com a
              gente nessa jornada!
            </Text>
          </TextWrapper>

          {/* Provisório */}
          <CardWrapper>
            <Card theme={theme}>
              <Title>O início</Title>
              <CardImage src={logoPrancheta} alt="imagem prancheta" />
              <Progress done={13} />
              <ButtonWrapper>
                <Button size="md" isFullWidth>
                  Acessar
                </Button>
              </ButtonWrapper>
            </Card>

            <Card theme={theme}>
              <Title>
                Desenvolvimento <br /> Full Stack
              </Title>
              <CardImage src={logoNotebook} alt="imagem notebook" />
              <Progress done={17} />
              <ButtonWrapper>
                <Button size="md" isFullWidth>
                  Acessar
                </Button>
              </ButtonWrapper>
            </Card>

            <Card theme={theme}>
              <Title>UX/UI Design</Title>
              <CardImage src={logoEsquadro} alt="imagem esquadro " />
              <Progress done={52} />
              <ButtonWrapper>
                <Button size="md" isFullWidth>
                  Acessar
                </Button>
              </ButtonWrapper>
            </Card>

            <Card theme={theme}>
              <Title>
                Quality Assurance <br /> QA
              </Title>
              <CardImage src={logoAvatarUser} alt="imagem avatar" />
              <Progress done={80} />
              <ButtonWrapper>
                <Button size="md" isFullWidth>
                  Acessar
                </Button>
              </ButtonWrapper>
            </Card>
          </CardWrapper>
          {/* Provisório */}

          {/* <CardWrapper>
            {trails.map((trail) => {
              return (
                <Card theme={theme}>
                  <Title>{trail.title}</Title>
                  <CardImage src={trail.icon_url} fill alt="imagem avatar" />
                  <Progress done={80} />
                  <ButtonWrapper>
                    <Button size="md" isFullWidth>
                      Acessar
                    </Button>
                  </ButtonWrapper>
                </Card>
              )
            })}
          </CardWrapper> */}
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

  const trails = await getAllTrails(token.toString())

  return {
    props: {
      // user,
      trails
    }
  }
}
