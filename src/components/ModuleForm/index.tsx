import { zodResolver } from '@hookform/resolvers/zod'
import { ButtonProps } from 'components/Button'
import { Dialog } from 'components/Dialog'
import { TextArea } from 'components/TextArea'
import { TextInput } from 'components/TextInput'
import { useTheme } from 'contexts/ThemeContext'
import { useUpdateModule } from 'libs/module/hooks'
import { createOrUpdateModuleSchema, ModuleFormData } from 'libs/module/schemas'
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

  const { theme } = useTheme()

  const { trail } = useTrailStore()

  const moduleForm = useForm<ModuleFormData>({
    resolver: zodResolver(createOrUpdateModuleSchema),
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

  const { createModuleMutation, updateModuleMutation, deleteModuleMutation } =
    useUpdateModule()

  const isSubmitDisabled =
    !!errors.title ||
    !!errors.description ||
    !watch('title') ||
    !watch('description')

  const onConfirm = async ({ title, description }: ModuleFormData) => {
    try {
      if (module) {
        await updateModuleMutation.mutateAsync({
          id: module.id,
          title,
          description
        })

        showToastSuccess(theme, 'Módulo atualizado com sucesso!')
      }

      if (!module) {
        await createModuleMutation.mutateAsync({
          title,
          description,
          trailId: trail.id,
          order: trail.modules.length + 1
        })

        showToastSuccess(theme, 'Módulo adicionado com sucesso!')

        reset()
      }
    } catch (error) {
      console.error(error)
    }
  }

  const onCancel = async () => {
    try {
      if (module) {
        await deleteModuleMutation.mutateAsync(module.id)

        showToastSuccess(theme, 'Módulo deletado com sucesso!')
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Dialog
      description=""
      triggerText={module ? '' : 'Adicionar módulo'}
      triggerButtonProps={
        module
          ? {
              title: `Editar módulo ${module.title}`,
              ...editTriggerButtonProps
            }
          : { color: 'gray', title: 'Adicionar módulo' }
      }
      confirmText="Salvar"
      onConfirm={handleSubmit(onConfirm)}
      confirmButtonProps={{ isLoading, disabled: isSubmitDisabled }}
      cancelText={module ? 'Excluir' : 'Cancelar'}
      onCancel={onCancel}
      title={module ? 'Editar módulo' : 'Adicionar módulo'}
    >
      <form onSubmit={handleSubmit(onConfirm)}>
        <TextInput.Root error={errors.title} required isBig>
          <TextInput.Input
            id="title"
            name="title"
            type="text"
            placeholder="Título do módulo"
            control={control}
          />
        </TextInput.Root>

        <TextArea control={control} name="description" />
      </form>
    </Dialog>
  )
}
