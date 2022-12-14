import { orangeEvolutionLogo } from 'components/@constants'
import { ButtonLink } from 'components/ButtonLink'
import { TrailForm } from 'components/Forms/TrailForm'
import { Heading } from 'components/Heading'
import { Loader } from 'components/Loader'
import { Layout } from 'components/Page/Layout'
import { Text } from 'components/Text'
import { getCookie } from 'cookies-next'
import { getAuthUser } from 'libs/auth/api'
import { useTrails } from 'libs/trail/hooks'
import { useTrailStore } from 'libs/trail/store'
import { User } from 'libs/user/types'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {
  ButtonWrapper,
  Card,
  CardImage,
  CardList,
  TextWrapper
} from 'styles/pages/trilhas'

interface TrailsProps {
  token: string
  user: User
}

export default function Trails({ token, user }: TrailsProps) {
  const { isLoading } = useTrails(token)

  const { trails } = useTrailStore()

  return (
    <>
      <Head>
        <title>Orange Evolution - Trilhas</title>
      </Head>

      <Layout>
        <Image
          src={orangeEvolutionLogo}
          alt="Logo da orange evolution"
          width={197}
          height={122}
        />

        <TextWrapper>
          <Heading asChild size="lg">
            <h1>Escolha sua trilha!</h1>
          </Heading>

          <Text asChild>
            <p>
              O Orange Evolution consiste em trilhas totalmente gratuitas para
              que você possa iniciar a sua carreira na tecnologia. Você terá
              acesso a vídeos, lives, artigos, apostilas e até cursos gratuitos,
              além desses conteúdos serem da Orange Juice, de parceiros e
              empresas que confiamos.
            </p>
          </Text>
        </TextWrapper>

        <TrailForm />

        {isLoading ? (
          <Loader />
        ) : (
          <CardList>
            {trails.map((trail) => (
              <Card
                key={trail.id}
                css={{
                  paddingTop: '2rem'
                }}
              >
                <Heading size="sm">{trail.title}</Heading>

                <TrailForm trail={trail} />

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
        )}
      </Layout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const token = getCookie(process.env.NEXT_PUBLIC_AUTH_COOKIE_NAME, ctx)

  if (!token) {
    return {
      redirect: {
        destination: '/admin/login',
        permanent: false
      }
    }
  }

  const user = await getAuthUser(token.toString())

  if (!user?.is_admin) {
    return {
      redirect: {
        destination: '/admin/login',
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
