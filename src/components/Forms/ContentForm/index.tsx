import { zodResolver } from '@hookform/resolvers/zod'
import { Button, ButtonProps } from 'components/Button'
import { Dialog } from 'components/Dialog'
import { DialogButtonsContainer } from 'components/Dialog/styles'
import { DialogAlert } from 'components/DialogAlert'
import { TextInput } from 'components/TextInput'
import { useTheme } from 'contexts/ThemeContext'
import { useUpdateContent } from 'libs/content/hooks'
import { ContentFormData, contentSchema } from 'libs/content/schemas'
import { Content } from 'libs/content/types'
import { getApiErrorMessage } from 'libs/functions/api'
import { useModuleStore } from 'libs/module/store'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { BiEdit } from 'react-icons/bi'
import { showToastError, showToastSuccess } from 'utils/toasts'
import { ContentFormWrapper } from './styles'

export const editTriggerButtonProps = {
  isOnlyIcon: true,
  children: <BiEdit color="black" />,
  size: 'lg',
  color: 'gray',
  css: {
    boxShadow: 'none'
  }
} as ButtonProps

interface ContentFormProps {
  content?: Content
}

export function ContentForm({ content }: ContentFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const { theme } = useTheme()

  const { module, contents } = useModuleStore()

  const {
    createContentMutation,
    updateContentMutation,
    deleteContentMutation
  } = useUpdateContent()

  const contentForm = useForm<ContentFormData>({
    resolver: zodResolver(contentSchema),
    defaultValues: {
      title: content ? content.title : '',
      type: content ? content.type : '',
      creator_name: content ? content.creator_name : '',
      link: content ? content.link : ''
    },
    mode: 'onChange',
    reValidateMode: 'onChange'
  })

  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors }
  } = contentForm

  const isSubmitDisabled =
    !!errors.title ||
    !!errors.type ||
    !!errors.creator_name ||
    !!errors.link ||
    !watch('title') ||
    !watch('type') ||
    !watch('creator_name') ||
    !watch('link')

  const handleCreateContent = async ({
    title,
    type,
    creator_name,
    link
  }: ContentFormData) => {
    setIsLoading(true)

    try {
      await createContentMutation.mutateAsync({
        title,
        type,
        creator_name,
        link,
        order: contents.length + 1,
        module_id: module.id
      })

      showToastSuccess(theme, 'Conteúdo adicionado com sucesso!')
      setIsDialogOpen(false)

      reset()
    } catch (error) {
      const errorMessage = getApiErrorMessage(error)

      showToastError(theme, errorMessage)
    }

    setIsLoading(false)
  }

  const handleUpdateContent = async ({
    title,
    type,
    creator_name,
    link
  }: ContentFormData) => {
    setIsLoading(true)

    try {
      if (module) {
        await updateContentMutation.mutateAsync({
          id: content.id,
          updatedContent: {
            title,
            type,
            creator_name,
            link,
            module_id: module.id
          }
        })

        showToastSuccess(theme, 'Conteúdo atualizado com sucesso!')
        setIsDialogOpen(false)
      }
    } catch (error) {
      console.log('💥 ~ error', error)
      const errorMessage = getApiErrorMessage(error)
      console.log('💥 ~ errorMessage', errorMessage)

      showToastError(theme, errorMessage)
    }

    setIsLoading(false)
  }

  const handleDeleteContent = async () => {
    setIsLoading(true)

    try {
      if (content) {
        await deleteContentMutation.mutateAsync(content.id)

        showToastSuccess(theme, 'Conteúdo deletado com sucesso!')
        setIsDialogOpen(false)
      }
    } catch (error) {
      console.error(error)
    }

    setIsLoading(false)
  }

  return (
    <Dialog
      isDialogOpen={isDialogOpen}
      setIsDialogOpen={setIsDialogOpen}
      title={content ? 'Editar conteúdo' : 'Adicionar conteúdo'}
      triggerText={content ? '' : 'Adicionar conteúdo'}
      triggerButtonProps={
        content
          ? {
              title: `Editar ${content.title}`,
              ...editTriggerButtonProps
            }
          : { color: 'gray', title: 'Adicionar conteúdo' }
      }
    >
      <ContentFormWrapper
        onSubmit={handleSubmit(
          content ? handleUpdateContent : handleCreateContent
        )}
      >
        <TextInput.Root error={errors.title} required isBig>
          <TextInput.Input
            id="title"
            name="title"
            type="text"
            placeholder="Título "
            control={control}
          />
        </TextInput.Root>

        <TextInput.Root error={errors.type} required isBig>
          <TextInput.Input
            id="type"
            name="type"
            type="text"
            placeholder="Tipo"
            control={control}
          />
        </TextInput.Root>

        <TextInput.Root error={errors.creator_name} required isBig>
          <TextInput.Input
            id="creator_name"
            name="creator_name"
            type="text"
            placeholder="Criador"
            control={control}
          />
        </TextInput.Root>

        <TextInput.Root error={errors.link} required isBig>
          <TextInput.Input
            id="link"
            name="link"
            type="text"
            placeholder="Link"
            control={control}
          />
        </TextInput.Root>

        <DialogButtonsContainer>
          <Button
            type="submit"
            isFullWidth
            color="green"
            title="Salvar"
            isLoading={isLoading}
            disabled={isSubmitDisabled}
          >
            Salvar
          </Button>

          {content ? (
            <DialogAlert
              triggerText="Excluir"
              confirmText="Sim, excluir conteúdo"
              cancelText="Cancelar"
              title={`Você tem certeza que deseja excluir o conteúdo ${content?.title}?`}
              description="Essa ação não poderá ser desfeita. Todos os dados deste conteúdo serão perdidos."
              onConfirm={handleDeleteContent}
            />
          ) : (
            <Button
              type="button"
              isFullWidth
              color="red"
              onClick={() => {
                setIsDialogOpen(false)
                reset()
              }}
              title="Cancelar"
            >
              Cancelar
            </Button>
          )}
        </DialogButtonsContainer>
      </ContentFormWrapper>
    </Dialog>
  )
}
