import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useTheme } from 'contexts/ThemeContext'
import { getApiErrorMessage } from 'libs/functions/api'
import { showToastError } from 'utils/toasts'
import { createModule, getModule, updateModule } from './api'
import { useModuleStore } from './store'

export const useModule = (token: string, moduleId: string) => {
  const { setModule, setContents, setProgress, setTrailInfo } = useModuleStore()

  return useQuery(['module'], () => getModule(token, moduleId), {
    onSuccess: ({ trailInfo, progress, module, contents }) => {
      setModule(module)
      setContents(contents)
      setProgress(progress)
      setTrailInfo(trailInfo)
    }
  })
}

export const useUpdateModule = () => {
  const { theme } = useTheme()

  const queryClient = useQueryClient()

  const createModuleMutation = useMutation(createModule, {
    onSuccess: () => {
      queryClient.invalidateQueries(['trail'])
    },
    onError: (error) => {
      const errorMessage = getApiErrorMessage(error)

      showToastError(theme, errorMessage)
    }
  })

  const updateModuleMutation = useMutation(updateModule, {
    onSuccess: () => {
      queryClient.invalidateQueries(['trail'])
    },
    onError: (error) => {
      const errorMessage = getApiErrorMessage(error)

      showToastError(theme, errorMessage)
    }
  })

  const deleteModuleMutation = useMutation(updateModule, {
    onSuccess: () => {
      queryClient.invalidateQueries(['trail'])
    },
    onError: (error) => {
      const errorMessage = getApiErrorMessage(error)

      showToastError(theme, errorMessage)
    }
  })

  return {
    createModuleMutation,
    updateModuleMutation,
    deleteModuleMutation
  }
}
