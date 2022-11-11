import { Content } from 'components/Content'
import { Header } from 'components/Header'
import { Heading } from 'components/Heading'
import { InputSearch } from 'components/Inputs/InputSearch'
import { Text } from 'components/Text'
import { useTheme } from 'contexts/ThemeContext'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { BodyWrapper, Main } from 'styles/pages/home'
import {
  ContentList,
  ContentListWrapper,
  ModuleWrapper,
  SearchWrapper
} from 'styles/pages/module'

export default function ModulePage() {
  const { theme } = useTheme()

  const router = useRouter()

  const { id } = router.query
  console.log('💥 ~ id', id)

  return (
    <>
      <Head>
        <title>Orange Evolution | Módulo {id}</title>
      </Head>
      <BodyWrapper theme={theme}>
        <Header />

        <Main>
          <ModuleWrapper>
            <Heading asChild size="xl">
              <h1>UX Design</h1>
            </Heading>

            <ContentListWrapper>
              <SearchWrapper>
                <InputSearch />
              </SearchWrapper>

              <Text size="sm">Concluído</Text>

              <ContentList>
                <Content title="O que é UX?" type="Vídeo" creator="UX Now" />
                <Content
                  title="O que é UX?"
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
        </Main>
      </BodyWrapper>
    </>
  )
}
