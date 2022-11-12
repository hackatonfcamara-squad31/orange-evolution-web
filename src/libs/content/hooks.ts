import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useTheme } from 'contexts/ThemeContext'
import { useState } from 'react'
import { showToastError } from 'utils/toasts'
import { markContentAsCompleted, markContentAsUncompleted } from './api'

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
      showToastError(theme, 'Erro ao marcar conteúdo como concluído')

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
        showToastError(theme, 'Erro ao marcar conteúdo como não concluído')

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
