import { Dialog } from 'components/Dialog'
import { TextArea } from 'components/TextArea'
import { TextInputInput } from 'components/TextInput'
import { BiEdit } from 'react-icons/bi'
import { useForm } from 'react-hook-form'
import { createModule, updateModule } from '../../libs/module/api'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  ModuleFormData,
  moduleSchema
} from '../../libs/auth/schemas/moduleSchema'
import { Trail } from 'libs/trails/types'
import { useRouter } from 'next/router'
import { showToastSuccess, showToastError } from '../../utils/toasts'
import { useTheme } from '../../contexts/ThemeContext'

export function ModuleForm({
  id,
  trail,
  order
}: {
  id?: string
  trail: Trail
  order?: number
}) {
  const router = useRouter()
  const theme = useTheme()

  const { control, handleSubmit } = useForm<ModuleFormData>({
    resolver: zodResolver(moduleSchema),
    defaultValues: {
      title: '',
      description: ''
    },
    mode: 'onChange',
    reValidateMode: 'onChange'
  })

  const onConfirm = async ({ title, description }: ModuleFormData) => {
    try {
      if (id) {
        await updateModule({ id, title, description })
      } else {
        await createModule({
          title,
          description,
          trailId: trail.id,
          order
        })
      }
      showToastSuccess(theme.theme, 'Sucesso')
      router.replace(router.asPath)
    } catch (e) {
      showToastError(theme.theme, 'Erro interno, tente novamente mais tarde.')
    }
  }

  return (
    <Dialog
      triggerText={!id ? 'Adicionar módulo' : ''}
      triggerButtonProps={
        id
          ? {
              isOnlyIcon: true,
              children: <BiEdit color="black" />,
              style: {
                background: 'transparent',
                display: 'flex',
                justifyContent: 'right',
                position: 'absolute',
                right: '0.5rem',
                top: '0.5rem'
              }
            }
          : {
              style: {
                background: 'white',
                color: 'black',
                boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.25)'
              }
            }
      }
      cancelText="Cancelar"
      confirmText="Salvar"
      description=""
      onConfirm={handleSubmit(onConfirm)}
      title={id ? 'Editar módulo' : 'Adicionar módulo'}
    >
      <form onSubmit={handleSubmit(onConfirm)}>
        <TextInputInput
          style={{
            padding: '0.8rem 1rem',
            boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.25)',
            borderRadius: '7rem'
          }}
          control={control}
          name="title"
          placeholder="Título"
        />
        <TextArea control={control} name="description" />
      </form>
    </Dialog>
  )
}

export default ModuleForm
