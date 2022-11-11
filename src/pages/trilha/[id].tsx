import { ButtonLink } from 'components/ButtonLink'
import { Header } from 'components/Header'
import { Heading } from 'components/Heading'
import { InputSearch } from 'components/Inputs/InputSearch'
import { PageFooter } from 'components/PageFooter'
import { PageHeader } from 'components/PageHeader'
import { Text } from 'components/Text'
import { useTheme } from 'contexts/ThemeContext'
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
  const { id } = ctx.params

  try {
    const { data } = await api.get(`/trails/${id}`)

    return {
      props: {
        trail: data
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
