import { ButtonToggleTheme } from 'components/ButtonToggleTheme'
import { Progress } from 'components/Progress'

import { useTheme } from 'contexts/ThemeContext'
import Head from 'next/head'
import React from 'react'
import { BodyWrapper, Main } from 'styles/pages/home'

export default function ProgressBar() {
  const { theme } = useTheme()

  return (
    <>
      <Head>
        <title>Progress Bar</title>
      </Head>
      <BodyWrapper theme={theme}>
        <Main>
          <h1>Progress Bar</h1>
          <ButtonToggleTheme />

          <Progress done="13" />
        </Main>
      </BodyWrapper>
    </>
  )
}
