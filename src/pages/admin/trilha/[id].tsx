import { ButtonLink } from 'components/ButtonLink'
import { ModuleForm } from 'components/Forms/ModuleForm'
import { Heading } from 'components/Heading'
import { InputSearch } from 'components/Inputs/InputSearch'
import { Loader } from 'components/Loader'
import { Layout } from 'components/Page/Layout'
import { PageFooter } from 'components/Page/PageFooter'
import { PageHeader } from 'components/Page/PageHeader'
import { Text } from 'components/Text'
import { getCookie } from 'cookies-next'
import { getAuthUser } from 'libs/auth/api'
import { Module } from 'libs/module/types'
import { useTrail } from 'libs/trail/hooks'
import { useTrailStore } from 'libs/trail/store'
import { User } from 'libs/user/types'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
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

  const { isLoading } = useTrail(token, trailId)

  const { trail } = useTrailStore()

  useEffect(() => {
    if (trail?.modules) {
      setFilteredModules(trail.modules)
    }
  }, [trail])

  return (
    <>
      <Head>
        <title>{`Orange Evolution | Trilha ${trail?.title}`}</title>
      </Head>

      <Layout>
        {isLoading || !trail ? (
          <Loader />
        ) : (
          <>
            <PageHeader
              trailLinkName={trail?.title}
              trailLink="#"
              isAdminPage
            />

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

                {isSearching && <Loader />}

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
                          <ButtonLink href={`/admin/modulo/${module.id}`}>
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

  const { id } = ctx.params

  return {
    props: {
      token,
      user,
      trailId: id
    }
  }
}
