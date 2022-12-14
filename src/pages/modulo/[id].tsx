import { Content } from 'components/Content'
import { Heading } from 'components/Heading'
import { InputSearch } from 'components/Inputs/InputSearch'
import { Loader } from 'components/Loader'
import { Layout } from 'components/Page/Layout'
import { PageFooter } from 'components/Page/PageFooter'
import { PageHeader } from 'components/Page/PageHeader'
import { Progress } from 'components/Progress'
import { Text } from 'components/Text'
import { getCookie } from 'cookies-next'
import { getAuthUser } from 'libs/auth/api'
import { useMarkContent } from 'libs/content/hooks'
import { Content as ContentType } from 'libs/content/types'
import { useModule } from 'libs/module/hooks'
import { useModuleStore } from 'libs/module/store'
import { User } from 'libs/user/types'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
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

  const { isLoading } = useModule(token, moduleId)

  const { trailInfo, progress, module, contents } = useModuleStore()

  const { markContentAsCompletedMutation, markContentAsUncompletedMutation } =
    useMarkContent()

  useEffect(() => {
    if (contents) {
      setFilteredContents(contents)
    }
  }, [contents])

  async function handleMarkContentAsCompleted(contentId: string) {
    await markContentAsCompletedMutation.mutateAsync({
      user_id: user.id,
      content_id: contentId
    })
  }

  async function handleMarkContentAsUncompleted(contentId: string) {
    await markContentAsUncompletedMutation.mutateAsync(contentId)
  }

  return (
    <>
      <Head>
        <title>{`Orange Evolution | Módulo ${module?.title}`}</title>
      </Head>
      <Layout>
        {isLoading || !module ? (
          <Loader />
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

                {isSearching && <Loader />}

                {filteredContents.length === 0 && !isSearching && (
                  <Text size="lg">Nenhum conteúdo encontrado 🙃</Text>
                )}

                {filteredContents.length > 0 && !isSearching && (
                  <>
                    <Text size="sm">Concluído</Text>

                    <ContentList>
                      {filteredContents.map((content) => (
                        <Content
                          key={content.id}
                          content={content}
                          handleMarkContentAsCompleted={
                            handleMarkContentAsCompleted
                          }
                          handleMarkContentAsUncompleted={
                            handleMarkContentAsUncompleted
                          }
                        />
                      ))}
                    </ContentList>
                  </>
                )}
              </ContentListWrapper>
            </ModuleWrapper>

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
