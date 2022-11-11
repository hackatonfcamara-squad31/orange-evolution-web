import { Content } from 'components/Content'
import { Header } from 'components/Header'
import { Heading } from 'components/Heading'
import { InputSearch } from 'components/Inputs/InputSearch'
import { PageFooter } from 'components/PageFooter'
import { PageHeader } from 'components/PageHeader'
import { Text } from 'components/Text'
import { useTheme } from 'contexts/ThemeContext'
import { Module } from 'libs/module/types'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
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
}

export default function ModulePage({ module }: ModulePageProps) {
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
                <InputSearch placeholder="Buscar conteúdo" />
              </SearchWrapper>

              <Text size="sm">Concluído</Text>

              <ContentList>
                <Content title="O que é UX?" type="Vídeo" creator="UX Now" />
                <Content
                  title="Comof fazer UX?"
                  type="Vídeo"
                  creator="Criador com nome extenso e dificil"
                />
                <Content
                  title="Experiência do Usuário"
                  type="Artigo"
                  creator="Chuck Norris"
                />
                <Content
                  title='Don Norman e o termo "UX"'
                  type="Artigo"
                  creator="Chuck Norris"
                />
              </ContentList>
            </ContentListWrapper>
          </ModuleWrapper>

          <PageFooter />
        </Main>
      </BodyWrapper>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { id } = ctx.params

  try {
    const { data } = await api.get(`/modules/${id}`)

    return {
      props: {
        module: data
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
