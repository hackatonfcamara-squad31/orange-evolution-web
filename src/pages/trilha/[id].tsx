import { ButtonLink } from 'components/ButtonLink'
import { Header } from 'components/Header'
import { Heading } from 'components/Heading'
import { InputSearch } from 'components/Inputs/InputSearch'
import { PageFooter } from 'components/PageFooter'
import { PageHeader } from 'components/PageHeader'
import { Text } from 'components/Text'
import { useTheme } from 'contexts/ThemeContext'
import { getCookie } from 'cookies-next'
import { getAuthUser } from 'libs/auth/api'
import { Trail } from 'libs/trail/types'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { api } from 'services/api'
import { BodyWrapper, Main } from 'styles/pages/home'
import { SearchWrapper } from 'styles/pages/module'
import {
  ModuleCard,
  ModuleCardButtonWrapper,
  ModuleList,
  ModuleListWrapper,
  TrailWrapper
} from 'styles/pages/trail'

interface TrailPageProps {
  trail: Trail
}

export default function TrailPage({ trail }: TrailPageProps) {
  const { theme } = useTheme()

  console.log('💥 ~ trail', trail)

  return (
    <>
      <Head>
        <title>Orange Evolution | Trilha {trail.title}</title>
      </Head>
      <BodyWrapper theme={theme}>
        <Header />

        <Main>
          <PageHeader trailLinkName={trail.title} trailLink="#" />

          <TrailWrapper>
            <Heading asChild size="xl">
              <h1>{trail.title} - MÓDULOS</h1>
            </Heading>

            <ModuleListWrapper>
              <SearchWrapper>
                <InputSearch placeholder="Buscar módulo" />
              </SearchWrapper>

              <ModuleList>
                {trail.modules.map((module) => (
                  <ModuleCard key={module.id}>
                    <Heading size="md">{module.title}</Heading>

                    <Text size="sm">{module.description}</Text>

                    <ModuleCardButtonWrapper>
                      <ButtonLink href={`/modulo/${module.id}`}>
                        Acessar
                      </ButtonLink>
                    </ModuleCardButtonWrapper>
                  </ModuleCard>
                ))}
              </ModuleList>
            </ModuleListWrapper>
          </TrailWrapper>

          <PageFooter />
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

  const { id } = ctx.params

  try {
    const { data } = await api.get(`/trails/description/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    const { trail } = data

    return {
      props: {
        trail
      }
    }
  } catch (error) {
    console.log('💥 ~ error', error)

    return {
      redirect: {
        destination: '/trilhas',
        permanent: false
      }
    }
  }
}
