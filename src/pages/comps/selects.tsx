import { ButtonToggleTheme } from 'components/ButtonToggleTheme'
import { Select } from 'components/Select'
import { useTheme } from 'contexts/ThemeContext'
import Head from 'next/head'
import { BodyWrapper, Main } from 'styles/pages/home'

const types = [
  {
    value: 'Tipo'
  },
  {
    value: 'Artigo'
  },
  {
    value: 'Livro'
  },
  {
    value: 'Vídeo'
  },
  {
    value: 'Live'
  }
]

const statuses = [
  {
    value: 'Status'
  },
  {
    value: 'Não comecei'
  },
  {
    value: 'Em progresso'
  },
  {
    value: 'Concluído'
  }
]

const creators = [
  {
    value: 'Criado por'
  },
  {
    value: 'Orange Juice'
  },
  {
    value: 'Grupo FCamara'
  },
  {
    value: 'PM3'
  },
  {
    value: 'Alura'
  }
]

const oderByList = [
  {
    value: 'Ordenar por'
  },
  {
    value: 'Título de A-Z'
  },
  {
    value: 'Título de Z-A'
  },
  {
    value: 'Duração crescente'
  },
  {
    value: 'Duração decrescente'
  }
]

export default function SelectPage() {
  const { theme } = useTheme()

  return (
    <>
      <Head>
        <title>Selects</title>
      </Head>
      <BodyWrapper theme={theme}>
        <Main>
          <h1>Selects</h1>
          <ButtonToggleTheme />

          <Select
            items={types}
            ariaLabel="Tipos"
            title="Selecione o tipo"
            placeholder="Tipo"
          />

          <Select
            items={types}
            ariaLabel="Tipos"
            title="Selecione o tipo"
            placeholder="Tipo"
            required
            disabled
          />

          <Select
            items={statuses}
            ariaLabel="Statuses"
            title="Selecione o status"
            placeholder="Status"
          />

          <Select
            items={creators}
            ariaLabel="Creators"
            title="Selecione o criador"
            placeholder="Criado por"
          />

          <Select
            items={oderByList}
            ariaLabel="Oder by"
            title="Ordenar por"
            placeholder="Ordenar por"
          />
        </Main>
      </BodyWrapper>
    </>
  )
}
