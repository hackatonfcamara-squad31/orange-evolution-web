import { ButtonLink } from 'components/ButtonLink'
import { Header } from 'components/Header'
import { Heading } from 'components/Heading'
import { InputSearch } from 'components/Inputs/InputSearch'
import { PageFooter } from 'components/PageFooter'
import { PageHeader } from 'components/PageHeader'
import { Text } from 'components/Text'
import { useTheme } from 'contexts/ThemeContext'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { BodyWrapper, Main } from 'styles/pages/home'
import { SearchWrapper } from 'styles/pages/module'
import {
  ModuleCard,
  ModuleCardButtonWrapper,
  ModuleList,
  ModuleListWrapper,
  TrailWrapper
} from 'styles/pages/trail'

export default function TrailPage() {
  const { theme } = useTheme()

  const router = useRouter()

  const { id } = router.query
  console.log('💥 ~ id', id)

  return (
    <>
      <Head>
        <title>Orange Evolution | Trilha {id}</title>
      </Head>
      <BodyWrapper theme={theme}>
        <Header />

        <Main>
          <PageHeader trailLinkName="Trilha UX/UI Design" trailLink="#" />

          <TrailWrapper>
            <Heading asChild size="xl">
              <h1>UX/UI DESIGN - MÓDULOS</h1>
            </Heading>

            <ModuleListWrapper>
              <SearchWrapper>
                <InputSearch placeholder="Buscar módulo" />
              </SearchWrapper>

              <ModuleList>
                <ModuleCard>
                  <Heading size="md">Design</Heading>

                  <Text size="sm">Design, a arte de projetar.</Text>

                  <ModuleCardButtonWrapper>
                    <ButtonLink href="#">Acessar</ButtonLink>
                  </ModuleCardButtonWrapper>
                </ModuleCard>
                <ModuleCard>
                  <Heading size="md">UX Design</Heading>

                  <Text size="sm">
                    Saiba mais sobre a experiência do usuário.
                  </Text>

                  <ModuleCardButtonWrapper>
                    <ButtonLink href="#">Acessar</ButtonLink>
                  </ModuleCardButtonWrapper>
                </ModuleCard>
                <ModuleCard>
                  <Heading size="md">UX Research</Heading>

                  <Text size="sm">
                    O ato de pesquisa, o potencial de um produto ou serviço,
                    seus usuários e ambientes existentes.
                  </Text>

                  <ModuleCardButtonWrapper>
                    <ButtonLink href="#">Acessar</ButtonLink>
                  </ModuleCardButtonWrapper>
                </ModuleCard>
              </ModuleList>
            </ModuleListWrapper>
          </TrailWrapper>

          <PageFooter />
        </Main>
      </BodyWrapper>
    </>
  )
}
