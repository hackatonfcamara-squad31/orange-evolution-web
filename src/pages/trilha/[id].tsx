import { ButtonLink } from 'components/ButtonLink'
import { Header } from 'components/Header'
import { Heading } from 'components/Heading'
import { InputSearch } from 'components/Inputs/InputSearch'
import { PageFooter } from 'components/PageFooter'
import { PageHeader } from 'components/PageHeader'
import { Progress } from 'components/Progress'
import { SearchLoader } from 'components/SearchLoader'
import { Text } from 'components/Text'
import { useTheme } from 'contexts/ThemeContext'
import { getCookie } from 'cookies-next'
import { getAuthUser } from 'libs/auth/api'
import { Module } from 'libs/module/types'
import { getTrail } from 'libs/trails/api'
import { Trail } from 'libs/trails/types'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useState } from 'react'
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
  progress: number
}

export default function TrailPage({ trail, progress }: TrailPageProps) {
  const [isSearching, setIsSearching] = useState(false)
  const [filteredModules, setFilteredModules] = useState<Module[]>(
    trail.modules
  )

  const { theme } = useTheme()

  return (
    <>
      <Head>
        <title>{`Orange Evolution | Trilha ${trail.title}`}</title>
      </Head>
      <BodyWrapper theme={theme}>
        <Header />

        <Main>
          <PageHeader trailLinkName={trail.title} trailLink="#" />

          <TrailWrapper>
            <Heading asChild size="xl">
              <h1>{trail.title} - MÓDULOS</h1>
            </Heading>

            <Progress donePercentage={progress} />

            <ModuleListWrapper>
              <SearchWrapper>
                <InputSearch
                  items={trail.modules}
                  setFilteredItems={setFilteredModules}
                  placeholder="Buscar módulo"
                  setIsSearching={setIsSearching}
                />
              </SearchWrapper>

              {isSearching && <SearchLoader />}

              {filteredModules.length === 0 && !isSearching && (
                <Text size="lg">Nenhum módulo encontrado 🙃</Text>
              )}

              {filteredModules.length > 0 && (
                <ModuleList>
                  {filteredModules.map((module) => (
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
              )}
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
    const { trail, progress } = await getTrail(token.toString(), id as string)

    return {
      props: {
        trail,
        progress
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
