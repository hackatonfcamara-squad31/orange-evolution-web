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
import { Card, CardWrapper, TextWrapper } from 'styles/pages/trilhas'
import logoOrangeEvolution from '../../public/logoorangeevolution.svg'

interface TrailsProps {
  user: User
}

export default function Trails({ user }: TrailsProps) {
  const { theme } = useTheme()

  const { name, email } = user

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
            src={logoOrangeEvolution}
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
          <CardWrapper>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </CardWrapper>
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
      user
    }
  }
}
