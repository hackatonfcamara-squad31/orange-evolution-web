import { Dialog } from 'components/Dialog'
import { TextInputInput } from 'components/TextInput'
import { BiEdit } from 'react-icons/bi'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/router'
import { showToastSuccess, showToastError } from '../../utils/toasts'
import { useTheme } from '../../contexts/ThemeContext'
import { Content } from 'libs/content/types'
import { createContent, updateContent } from 'libs/content/api'
import { ContentFormData, contentSchema } from 'libs/auth/schemas/contentSchema'
import { useModuleStore } from 'libs/module/store'
import { Content as ContentType } from 'libs/content/types'

export function ContentForm({
  content,
  moduleId
}: {
  content?: Content
  moduleId?: string
}) {
  const theme = useTheme()

  const { setContents, contents } = useModuleStore()
  const { control, handleSubmit } = useForm<ContentFormData>({
    resolver: zodResolver(contentSchema),
    defaultValues: {
      title: '',
      type: '',
      creator_name: '',
      link: ''
    },
    mode: 'onChange',
    reValidateMode: 'onChange'
  })

  const onConfirm = async ({ title, type, creator_name, link }: Content) => {
    try {
      let data: ContentType
      if (content) {
        data = await updateContent({
          id: content.id,
          title,
          type,
          creator_name,
          link
        })
      } else {
        data = await createContent({
          title,
          type,
          creator_name,
          link,
          module_id: moduleId,
          duration: 0
        })
      }
      const updatedContents = contents.filter((c) => c.id !== data.id)
      updatedContents.push(data)
      setContents(updatedContents)
      showToastSuccess(theme.theme, 'Sucesso')
    } catch (e) {
      console.log(e)
      showToastError(theme.theme, 'Erro interno, tente novamente mais tarde.')
    }
  }

  return (
    <Dialog
      triggerText={content ? '' : 'Adicionar módulo'}
      triggerButtonProps={
        content
          ? {
              isOnlyIcon: true,
              children: <BiEdit color="black" />,
              style: {
                background: 'transparent',
                display: 'flex',
                justifyContent: 'right'
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
      title={content ? 'Editar módulo' : 'Adicionar módulo'}
    >
      <form onSubmit={handleSubmit(onConfirm)}>
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
        >
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
          <TextInputInput
            style={{
              padding: '0.8rem 1rem',
              boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.25)',
              borderRadius: '7rem'
            }}
            control={control}
            name="type"
            placeholder="Tipo"
          />
          <TextInputInput
            style={{
              padding: '0.8rem 1rem',
              boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.25)',
              borderRadius: '7rem'
            }}
            control={control}
            name="creator_name"
            placeholder="Criador"
          />
          <TextInputInput
            style={{
              padding: '0.8rem 1rem',
              boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.25)',
              borderRadius: '7rem'
            }}
            control={control}
            name="link"
            placeholder="Link"
          />
        </div>
      </form>
    </Dialog>
  )
}
