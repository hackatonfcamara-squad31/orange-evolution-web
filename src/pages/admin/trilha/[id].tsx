import { ButtonLink } from 'components/ButtonLink'
import { Header } from 'components/Header'
import { Heading } from 'components/Heading'
import { InputSearch } from 'components/Inputs/InputSearch'
import { ModuleForm } from 'components/ModuleForm'
import { PageFooter } from 'components/PageFooter'
import { PageHeader } from 'components/PageHeader'
import { SearchLoader } from 'components/SearchLoader'
import { Text } from 'components/Text'
import { useTheme } from 'contexts/ThemeContext'
import { getCookie } from 'cookies-next'
import { getAuthUser } from 'libs/auth/api'
import { Module } from 'libs/module/types'
import { useTrail } from 'libs/trail/hooks'
import { useTrailStore } from 'libs/trail/store'
import { User } from 'libs/user/types'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { BodyWrapper, Main } from 'styles/pages/home'
import { SearchWrapper } from 'styles/pages/module'
import {
  AdminTrailHeaderWrapper,
  ModuleCard,
  ModuleCardButtonWrapper,
  ModuleList,
  ModuleListWrapper,
  TrailWrapper
} from 'styles/pages/trail'

interface TrailPageProps {
  token: string
  user: User
  trailId: string
}

export default function AdminTrailPage({
  token,
  user,
  trailId
}: TrailPageProps) {
  const [isSearching, setIsSearching] = useState(false)
  const [filteredModules, setFilteredModules] = useState<Module[]>(
    [] as Module[]
  )

  const { theme } = useTheme()

  const { isLoading } = useTrail(token, trailId)

  const { trail } = useTrailStore()

  return (
    <>
      <Head>
        <title>Orange Evolution | Trilha {trail?.title}</title>
      </Head>
      <BodyWrapper theme={theme}>
        <Header />

        <Main>
          {isLoading ? (
            <SearchLoader />
          ) : (
            <>
              <PageHeader trailLinkName={trail?.title} trailLink="#" />

              <TrailWrapper>
                <AdminTrailHeaderWrapper>
                  <Heading asChild size="xl">
                    <h1>{trail?.title} - MÓDULOS</h1>
                  </Heading>

                  <ModuleForm />
                </AdminTrailHeaderWrapper>

                <ModuleListWrapper>
                  <SearchWrapper>
                    <InputSearch
                      items={trail?.modules}
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
                          <ModuleForm module={module} />
                          <Heading size="md">{module.title} </Heading>
                          <Text size="sm">{module.description}</Text>

                          <ModuleCardButtonWrapper>
                            <ButtonLink href={`admin/modulo/${module.id}`}>
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

  const { id } = ctx.params

  return {
    props: {
      token,
      user,
      trailId: id
    }
  }
}
