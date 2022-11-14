import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useTheme } from 'contexts/ThemeContext'
import { getApiErrorMessage } from 'libs/functions/api'
import { useState } from 'react'
import { showToastError } from 'utils/toasts'
import {
  createContent,
  deleteContent,
  markContentAsCompleted,
  markContentAsUncompleted,
  updateContent
} from './api'

export const useMarkContent = () => {
  const [isMarkContentLoading, setIsMarkContentLoading] = useState(false)
  const { theme } = useTheme()

  const queryClient = useQueryClient()

  const markContentAsCompletedMutation = useMutation(markContentAsCompleted, {
    onSuccess: () => {
      queryClient.invalidateQueries(['module'])
      setIsMarkContentLoading(false)
    },
    onError: () => {
      showToastError(
        theme,
        'Erro ao marcar conteúdo como concluído. Por favor tente novamente.'
      )

      setIsMarkContentLoading(false)
    }
  })

  const markContentAsUncompletedMutation = useMutation(
    markContentAsUncompleted,
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['module'])
        setIsMarkContentLoading(false)
      },
      onError: () => {
        showToastError(
          theme,
          'Erro ao marcar conteúdo como não concluído. Por favor tente novamente.'
        )

        setIsMarkContentLoading(false)
      }
    }
  )

  return {
    isMarkContentLoading,
    setIsMarkContentLoading,
    markContentAsCompletedMutation,
    markContentAsUncompletedMutation
  }
}

export const useUpdateContent = () => {
  const { theme } = useTheme()

  const queryClient = useQueryClient()

  const createContentMutation = useMutation(createContent, {
    onSuccess: () => {
      queryClient.invalidateQueries(['module'])
    },
    onError: (error) => {
      const errorMessage = getApiErrorMessage(error)

      showToastError(theme, errorMessage)
    }
  })

  const updateContentMutation = useMutation(updateContent, {
    onSuccess: () => {
      queryClient.invalidateQueries(['module'])
    },
    onError: (error) => {
      const errorMessage = getApiErrorMessage(error)

      showToastError(theme, errorMessage)
    }
  })

  const deleteContentMutation = useMutation(deleteContent, {
    onSuccess: () => {
      queryClient.invalidateQueries(['module'])
    },
    onError: (error) => {
      const errorMessage = getApiErrorMessage(error)

      showToastError(theme, errorMessage)
    }
  })

  return {
    createContentMutation,
    updateContentMutation,
    deleteContentMutation
  }
}
