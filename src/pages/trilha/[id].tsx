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
import { useTrail } from 'libs/trail/hooks'
import { useTrailStore } from 'libs/trail/store'
import { User } from 'libs/user/types'
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
// import useWindowSize from 'hooks/useWindowSize'
// import { useKeenSlider } from 'keen-slider/react'

interface TrailPageProps {
  token: string
  user: User
  trailId: string
}
// interface Size {
//   width: number | undefined
//   height: number | undefined
// }

export default function TrailPage({ token, user, trailId }: TrailPageProps) {
  const [isSearching, setIsSearching] = useState(false)
  const [filteredModules, setFilteredModules] = useState<Module[]>(
    [] as Module[]
  )

  const { theme } = useTheme()

  const { isLoading } = useTrail(token, trailId)

  const { trail, progress } = useTrailStore()

  // const size: Size = useWindowSize()

  // const [sliderRef] = useKeenSlider({
  //   breakpoints: {
  //     '(max-width: 900px)': {
  //       slides: { origin: 'center', perView: 2.5, spacing: 10 }
  //     },
  //     '(max-width: 768px)': {
  //       slides: { origin: 'center', perView: 2, spacing: 10 }
  //     },
  //     '(max-width: 600px)': {
  //       slides: { origin: 'center', perView: 1.8, spacing: 10 }
  //     },
  //     '(max-width: 400px)': {
  //       slides: { origin: 'center', perView: 1.35, spacing: 7 }
  //     }
  //   },
  //   slides: { origin: 'center', perView: 2.5, spacing: 10 }
  // })

  return (
    <>
      <Head>
        <title>{`Orange Evolution | Trilha ${trail?.title}`}</title>
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
                <Heading asChild size="xl">
                  <h1>{trail?.title} - MÓDULOS</h1>
                </Heading>

                <Progress donePercentage={progress} />

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

                  {
                    filteredModules.length > 0 && (
                      // (size.width > 900 ? (
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
                    )
                    // ) : (
                    //   <ModuleList ref={sliderRef} className="keen-slider">
                    //     {filteredModules.map((module) => (
                    //       <ModuleCard
                    //         key={module.id}
                    //         className="keen-slider__slide"
                    //       >
                    //         <Heading size="md">{module.title}</Heading>

                    //         <Text size="sm">{module.description}</Text>

                    //         <ModuleCardButtonWrapper>
                    //           <ButtonLink href={`/modulo/${module.id}`}>
                    //             Acessar
                    //           </ButtonLink>
                    //         </ModuleCardButtonWrapper>
                    //       </ModuleCard>
                    //     ))}
                    //   </ModuleList>
                    // ))
                  }
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
