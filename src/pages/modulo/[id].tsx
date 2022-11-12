import { Content } from 'components/Content'
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
import { Content as ContentType } from 'libs/content/types'
import { useModule } from 'libs/module/hooks'
import { useModuleStore } from 'libs/module/store'
import { User } from 'libs/user/types'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { BodyWrapper, Main } from 'styles/pages/home'
import {
  ContentList,
  ContentListWrapper,
  ModuleWrapper,
  SearchWrapper
} from 'styles/pages/module'

interface ModulePageProps {
  moduleId: string
  token: string
  user: User
}

export default function ModulePage({ moduleId, token, user }: ModulePageProps) {
  const [isSearching, setIsSearching] = useState(false)
  const [filteredContents, setFilteredContents] = useState<ContentType[]>(
    [] as ContentType[]
  )

  const { theme } = useTheme()

  const { isLoading } = useModule(token, moduleId)

  const { trailInfo, progress, module, contents } = useModuleStore()

  useEffect(() => {
    if (contents) {
      setFilteredContents(contents)
    }
  }, [contents])

  return (
    <>
      <Head>
        <title>Orange Evolution | Módulo {module?.title}</title>
      </Head>
      <BodyWrapper theme={theme}>
        <Header />

        <Main>
          {isLoading ? (
            <SearchLoader />
          ) : (
            <>
              <PageHeader
                trailLinkName={trailInfo?.title}
                trailLink={`/trilha/${trailInfo?.id}`}
                moduleLinkName={module?.title}
                isModulePage
              />

              <ModuleWrapper>
                <Heading asChild size="xl">
                  <h1>{module?.title}</h1>
                </Heading>

                <Progress donePercentage={progress} />

                <ContentListWrapper>
                  <SearchWrapper>
                    <InputSearch
                      items={contents}
                      setFilteredItems={setFilteredContents}
                      placeholder="Buscar conteúdo"
                      setIsSearching={setIsSearching}
                    />
                  </SearchWrapper>

                  {isSearching && <SearchLoader />}

                  {filteredContents.length === 0 && !isSearching && (
                    <Text size="lg">Nenhum conteúdo encontrado 🙃</Text>
                  )}

                  {filteredContents.length > 0 && !isSearching && (
                    <>
                      <Text size="sm">Concluído</Text>

                      <ContentList>
                        {filteredContents.map((content) => (
                          <Content key={content.id} content={content} />
                        ))}
                      </ContentList>
                    </>
                  )}
                </ContentListWrapper>
              </ModuleWrapper>

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
      moduleId: id
    }
  }
}
