import { ButtonToggleTheme } from 'components/ButtonToggleTheme'
import { Dialog } from 'components/Dialog'
import { DialogAlert } from 'components/DialogAlert'
import { useTheme } from 'contexts/ThemeContext'
import Head from 'next/head'
import { BodyWrapper, Main } from 'styles/pages/home'

export default function Home() {
  const { theme } = useTheme()

  return (
    <>
      <Head>
        <title>Dialogs</title>
      </Head>
      <BodyWrapper theme={theme}>
        <Main>
          <h1>Dialogs</h1>

          <ButtonToggleTheme />

          <DialogAlert
            triggerText="Deletar conta"
            confirmText="Sim, deletar conta"
            cancelText="Cancelar"
            title="Você tem certeza que deseja deletar sua conta?"
            description="Essa ação não poderá ser desfeita. Todos os seus dados serão perdidos."
            confirmButtonProps={{ color: 'red' }}
            onConfirm={() => console.log('Confirmou')}
          />

          <Dialog
            title="Fazer alguma coisa"
            description="Aqui você pode fazer alguma coisa."
            triggerText="Fazer alguma coisa"
            confirmText="Confirmar"
            cancelText="Cancelar"
            confirmButtonProps={{ color: 'green' }}
            onConfirm={() => console.log('Confirmou')}
          >
            <p>Conteúdo do dialog</p>
          </Dialog>
        </Main>
      </BodyWrapper>
    </>
  )
}
