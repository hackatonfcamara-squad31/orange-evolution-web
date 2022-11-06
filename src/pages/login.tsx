import { ButtonToggleTheme } from 'components/ButtonToggleTheme'
import Head from 'next/head'
import { Form, Main } from 'styles/pages/home'
import { BodyWrapper } from '../styles/pages/home'
import { useTheme } from '../contexts/ThemeContext'
import { TextInput } from 'components/TextInput'
import { TbMail, TbShieldLock } from 'react-icons/tb'
import { Button } from 'components/Button'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

type FormValues = {
  nome:string;
  email: string
  password: string
}
const schema = yup.object().shape({
  nome: yup.string().required('Este campo é obrigatório'),
  email: yup
    .string()
    .email('Não é email em')
    .required('Este campo é obrigatório'),
  password: yup.string().required('Este campo é obrigatório')
})

export default function LoginPage() {
  const { theme } = useTheme()

  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<FormValues>({ resolver: yupResolver(schema) })
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <BodyWrapper theme={theme}>
        <Main>
          <h1>Login</h1>
          <ButtonToggleTheme />

          <Form onSubmit={handleSubmit((data) => console.log(data))}>

          <TextInput.Root
              label="Nome"
              labelFor="Nome"
              error={errors.nome}
              errorMessage="Este campo é obrigatório."              
            >
              <TextInput.Icon>
                <TbMail />
              </TextInput.Icon>

              <TextInput.Input
                id="nome"
                type="text"
                placeholder="Seu Nome "
                name="nome"
                control={control}
              />
            </TextInput.Root>

            <TextInput.Root
              label="Seu e-mail"
              labelFor="email"
              error={errors.email}
              errorMessage="Este campo é obrigatório."
            >
              <TextInput.Icon>
                <TbMail />
              </TextInput.Icon>

              <TextInput.Input
                id="email"
                type="email"
                placeholder="Digite seu e-mail"
                name="email"
                control={control}
              />
            </TextInput.Root>

            <TextInput.Root
              label="Sua senha"
              labelFor="password"
              errorMessage="Esse campo é obrigatório"
              error={errors.password}
            >
              <TextInput.Icon>
                <TbShieldLock />
              </TextInput.Icon>

              <TextInput.Input
                id="password"
                type="password"
                placeholder="Digite sua senha"
                name="password"
                control={control}
              />
            </TextInput.Root>

            <Button type="submit">Login</Button>
          </Form>
        </Main>
      </BodyWrapper>
    </>
  )
}
