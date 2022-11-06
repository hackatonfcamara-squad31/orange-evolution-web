import { Button } from 'components/Button'
import { Text } from 'components/Text'
import { useTheme } from 'contexts/ThemeContext'
import Image from 'next/image'
import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { TbUpload } from 'react-icons/tb'
import { showToastError } from 'utils/toasts'
import { DropzoneContainer, DropzoneTextContainer } from './styles'

interface ImageDropzoneProps {
  height?: number
  width?: number
  isFullRounded?: boolean
}

export function ImageDropzone({
  width,
  height,
  isFullRounded
}: ImageDropzoneProps) {
  const [preview, setPreview] = useState<string | null>(null)
  const [image, setImage] = useState<File | null>(null)

  const { theme } = useTheme()

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      try {
        console.log('🚀 ~ acceptedFiles', acceptedFiles)
        setImage(acceptedFiles[0])

        const previewImage = URL.createObjectURL(acceptedFiles[0])

        setPreview(previewImage)
      } catch (error) {
        console.log('🚀 ~ error', error)
        showToastError(
          theme,
          'Erro ao carregar a imagem, por favor cheque o formato.'
        )
      }
    },
    [theme]
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: {
      'image/png': ['.png'],
      'image/jpg': ['.jpg', '.jpeg'],
      'image/svg': ['.svg'],
      'image/jpeg': ['.jpg', '.jpeg']
    }
  })

  return (
    <>
      <DropzoneContainer
        {...getRootProps()}
        theme={theme}
        isDragActive={isDragActive}
        isFullRounded={isFullRounded}
        css={{
          width: width || '100%',
          height: height || '100%'
        }}
      >
        <input {...getInputProps()} />
        {preview ? (
          <Image src={preview} alt="Preview" fill />
        ) : (
          <DropzoneTextContainer>
            {!isDragActive && (
              <>
                <TbUpload size={24} />
                <Text size="xs">Tipos permitidos: png, jpg, jpeg e svg</Text>
              </>
            )}
          </DropzoneTextContainer>
        )}
      </DropzoneContainer>

      <Button
        disabled={!image || !preview}
        size="sm"
        onClick={() => {
          setPreview(null)
          setImage(null)
        }}
        color="red"
      >
        Resetar
      </Button>
    </>
  )
}
