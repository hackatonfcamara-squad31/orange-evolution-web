import { ButtonToggleTheme } from 'components/ButtonToggleTheme'
import { TextInput } from 'components/TextInput'
import { useTheme } from 'contexts/ThemeContext'
import Head from 'next/head'
import { TbMail, TbShieldLock } from 'react-icons/tb'
import { Main } from 'styles/pages/home'

export default function Home() {
  const { theme } = useTheme()

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Main theme={theme}>
        <h1>Home</h1>

        <ButtonToggleTheme />

        <div
          style={{
            maxWidth: '1000px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}
        >
          <TextInput.Root
            error
            errorMessage="Este campo é obrigatório."
            label="Seu e-mail"
            labelFor="email"
          >
            <TextInput.Icon>
              <TbMail />
            </TextInput.Icon>

            <TextInput.Input
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
            />
          </TextInput.Root>

          <TextInput.Root label="Sua senha" labelFor="password">
            <TextInput.Icon>
              <TbShieldLock />
            </TextInput.Icon>

            <TextInput.Input
              id="password"
              type="password"
              placeholder="Digite sua senha"
            />
          </TextInput.Root>

          <TextInput.Root label="Seu nome" labelFor="name">
            <TextInput.Input
              id="name"
              type="text"
              placeholder="Digite seu nome"
            />
          </TextInput.Root>
        </div>
      </Main>
    </>
  )
}
