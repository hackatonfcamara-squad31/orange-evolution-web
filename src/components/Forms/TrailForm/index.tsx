import { zodResolver } from '@hookform/resolvers/zod'
import { Button, ButtonProps } from 'components/Button'
import { Dialog } from 'components/Dialog'
import { DialogButtonsContainer } from 'components/Dialog/styles'
import { DialogAlert } from 'components/DialogAlert'
import { ImageDropzone } from 'components/ImageDropzone'
import { TextInput } from 'components/TextInput'
import { useTheme } from 'contexts/ThemeContext'
import { useUpdateTrail } from 'libs/trail/hooks'
import { TrailFormData, trailSchema } from 'libs/trail/schemas'
import { Trail } from 'libs/trail/types'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { BiEdit } from 'react-icons/bi'
import { showToastError, showToastSuccess } from 'utils/toasts'
import { TrailFormWrapper } from './styles'

export const editTriggerButtonProps = {
  isOnlyIcon: true,
  children: <BiEdit color="black" />,
  size: 'lg',
  color: 'gray',
  css: {
    boxShadow: 'none',
    backgroundColor: 'transparent',
    position: 'absolute',
    right: '0.25rem',
    top: '0rem'
  }
} as ButtonProps

interface TrailFormProps {
  trail?: Trail
}

export function TrailForm({ trail }: TrailFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const [image, setImage] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(
    trail ? trail.icon_url : null
  )

  const { theme } = useTheme()

  const { createTrailMutation, updateTrailMutation, deleteTrailMutation } =
    useUpdateTrail()

  const trailForm = useForm<TrailFormData>({
    resolver: zodResolver(trailSchema),
    defaultValues: {
      title: trail ? trail.title : ''
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
  } = trailForm

  const isSubmitDisabled =
    !!errors.title || !watch('title') || (!image && !trail)

  const handleCreateTrail = async ({ title }: TrailFormData) => {
    setIsLoading(true)

    if (!image) {
      showToastError(theme, 'Por favor, informe uma imagem para a trilha.')
      setIsLoading(false)
      return
    }

    try {
      const createTrailFormData = new FormData()

      createTrailFormData.append('title', title)

      if (image) {
        createTrailFormData.append('icon', image)
      }

      await createTrailMutation.mutateAsync(createTrailFormData)

      showToastSuccess(theme, 'Trilha adicionada com sucesso!')
      setIsDialogOpen(false)

      reset()
    } catch (error) {
      console.log('💥 ~ error', error)
    }

    setIsLoading(false)
  }

  const handleUpdateTrail = async ({ title }: TrailFormData) => {
    setIsLoading(true)

    try {
      let updateTrailFormData = null

      if (image) {
        updateTrailFormData = new FormData()
        updateTrailFormData.append('icon', image)
      }

      await updateTrailMutation.mutateAsync({
        id: trail.id,
        title,
        formData: updateTrailFormData
      })

      showToastSuccess(theme, 'Trilha atualizada com sucesso!')
      setIsDialogOpen(false)
    } catch (error) {
      console.error(error)
    }

    setIsLoading(false)
  }

  const handleDeleteTrail = async () => {
    setIsLoading(true)

    try {
      if (trail) {
        await deleteTrailMutation.mutateAsync(trail.id)

        showToastSuccess(theme, 'Trilha deletada com sucesso!')
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
      title={trail ? 'Editar trilha' : 'Adicionar trilha'}
      triggerText={trail ? '' : 'Adicionar trilha'}
      triggerButtonProps={
        trail
          ? {
              title: `Editar ${trail.title}`,
              ...editTriggerButtonProps
            }
          : { color: 'gray', title: 'Adicionar trilha' }
      }
    >
      <TrailFormWrapper
        onSubmit={handleSubmit(trail ? handleUpdateTrail : handleCreateTrail)}
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

        <ImageDropzone
          height={200}
          preview={preview}
          setImage={setImage}
          setPreview={setPreview}
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

          {trail ? (
            <DialogAlert
              triggerText="Excluir"
              confirmText="Sim, excluir trilha"
              cancelText="Cancelar"
              title={`Você tem certeza que deseja excluir a trilha ${trail?.title}?`}
              description="Essa ação não poderá ser desfeita. Todos os dados desta trilha serão perdidos."
              onConfirm={handleDeleteTrail}
            />
          ) : (
            <Button
              type="button"
              isFullWidth
              color="red"
              onClick={() => {
                setIsDialogOpen(false)
                setImage(null)
                setPreview(null)
                reset()
              }}
              title="Cancelar"
            >
              Cancelar
            </Button>
          )}
        </DialogButtonsContainer>
      </TrailFormWrapper>
    </Dialog>
  )
}
