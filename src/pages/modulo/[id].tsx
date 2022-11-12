import { Content } from 'components/Content'
import { Header } from 'components/Header'
import { Heading } from 'components/Heading'
import { InputSearch } from 'components/Inputs/InputSearch'
import { PageFooter } from 'components/PageFooter'
import { PageHeader } from 'components/PageHeader'
import { SearchLoader } from 'components/SearchLoader'
import { Text } from 'components/Text'
import { useTheme } from 'contexts/ThemeContext'
import { getCookie } from 'cookies-next'
import { getAuthUser } from 'libs/auth/api'
import { Content as ContentType } from 'libs/content/types'
import { Module } from 'libs/module/types'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { api } from 'services/api'
import { BodyWrapper, Main } from 'styles/pages/home'
import {
  ContentList,
  ContentListWrapper,
  ModuleWrapper,
  SearchWrapper
} from 'styles/pages/module'

interface ModulePageProps {
  module: Module
  contents: ContentType[]
}

export default function ModulePage({ module, contents }: ModulePageProps) {
  const [isSearching, setIsSearching] = useState(false)
  const [filteredContents, setFilteredContents] =
    useState<ContentType[]>(contents)

  const { theme } = useTheme()

  return (
    <>
      <Head>
        <title>Orange Evolution | Módulo {module.title}</title>
      </Head>
      <BodyWrapper theme={theme}>
        <Header />

        <Main>
          <PageHeader
            trailLinkName="UX/UI Design"
            trailLink="#"
            moduleLinkName={module.title}
            isModulePage
          />

          <ModuleWrapper>
            <Heading asChild size="xl">
              <h1>{module.title}</h1>
            </Heading>

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
                      <Content
                        key={content.id}
                        title={content.title}
                        type={content.type}
                        creator={content.creator_name}
                      />
                    ))}
                  </ContentList>
                </>
              )}
            </ContentListWrapper>
          </ModuleWrapper>

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
    const { data } = await api.get(`/modules/description/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    const { module, contents } = data

    return {
      props: {
        module,
        contents,
        user
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
