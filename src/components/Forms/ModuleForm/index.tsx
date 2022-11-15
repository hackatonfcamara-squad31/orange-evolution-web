import { zodResolver } from '@hookform/resolvers/zod'
import { Button, ButtonProps } from 'components/Button'
import { Dialog } from 'components/Dialog'
import { DialogButtonsContainer } from 'components/Dialog/styles'
import { DialogAlert } from 'components/DialogAlert'
import { TextArea } from 'components/TextArea'
import { TextInput } from 'components/TextInput'
import { useTheme } from 'contexts/ThemeContext'
import { useUpdateModule } from 'libs/module/hooks'
import { ModuleFormData, moduleSchema } from 'libs/module/schemas'
import { Module } from 'libs/module/types'
import { useTrailStore } from 'libs/trail/store'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { BiEdit } from 'react-icons/bi'
import { showToastSuccess } from 'utils/toasts'

export const editTriggerButtonProps = {
  isOnlyIcon: true,
  children: <BiEdit color="black" />,
  size: 'lg',
  color: 'gray',
  css: {
    boxShadow: 'none',
    position: 'absolute',
    right: '0.5rem',
    top: '0.5rem'
  }
} as ButtonProps

interface ModuleFormProps {
  module?: Module
}

export function ModuleForm({ module }: ModuleFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const { theme } = useTheme()

  const { trail } = useTrailStore()

  const { createModuleMutation, updateModuleMutation, deleteModuleMutation } =
    useUpdateModule()

  const moduleForm = useForm<ModuleFormData>({
    resolver: zodResolver(moduleSchema),
    defaultValues: {
      title: module ? module.title : '',
      description: module ? module.description : ''
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
  } = moduleForm

  const isSubmitDisabled =
    !!errors.title ||
    !!errors.description ||
    !watch('title') ||
    !watch('description')

  const handleCreateModule = async ({ title, description }: ModuleFormData) => {
    setIsLoading(true)

    try {
      await createModuleMutation.mutateAsync({
        title,
        description,
        trailId: trail.id,
        order: trail.modules.length + 1
      })

      showToastSuccess(theme, 'Módulo adicionado com sucesso!')
      setIsDialogOpen(false)

      reset()
    } catch (error) {
      console.error(error)
    }

    setIsLoading(false)
  }

  const handleUpdateModule = async ({ title, description }: ModuleFormData) => {
    setIsLoading(true)

    try {
      if (module) {
        await updateModuleMutation.mutateAsync({
          id: module.id,
          title,
          description
        })

        showToastSuccess(theme, 'Módulo atualizado com sucesso!')
        setIsDialogOpen(false)
      }
    } catch (error) {
      console.error(error)
    }

    setIsLoading(false)
  }

  const handleDeleteModule = async () => {
    setIsLoading(true)

    try {
      if (module) {
        await deleteModuleMutation.mutateAsync({
          moduleId: module.id
        })

        showToastSuccess(theme, 'Módulo excluído com sucesso!')
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
      title={module ? 'Editar módulo' : 'Adicionar módulo'}
      triggerText={module ? '' : 'Adicionar módulo'}
      triggerButtonProps={
        module
          ? {
              title: `Editar ${module.title}`,
              ...editTriggerButtonProps
            }
          : { color: 'gray', title: 'Adicionar módulo' }
      }
    >
      <form
        onSubmit={handleSubmit(
          module ? handleUpdateModule : handleCreateModule
        )}
      >
        <TextInput.Root error={errors.title} required isBig>
          <TextInput.Input
            id="title"
            name="title"
            type="text"
            placeholder="Título"
            control={control}
          />
        </TextInput.Root>

        <TextArea
          control={control}
          name="description"
          error={errors.description}
        />

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

          {module ? (
            <DialogAlert
              triggerText="Excluir"
              confirmText="Sim, excluir módulo"
              cancelText="Cancelar"
              title={`Você tem certeza que deseja excluir o módulo ${module.title}?`}
              description="Essa ação não poderá ser desfeita. Todos os dados deste módulo serão perdidos."
              onConfirm={handleDeleteModule}
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
      </form>
    </Dialog>
  )
}
