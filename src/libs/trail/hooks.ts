import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useTheme } from 'contexts/ThemeContext'
import { getApiErrorMessage } from 'libs/functions/api'
import { showToastError } from 'utils/toasts'
import {
  createTrail,
  deleteTrail,
  getAllTrails,
  getTrail,
  updateTrail
} from './api'
import { useTrailStore } from './store'

export const useTrail = (token: string, trailId: string) => {
  const { setTrail, setProgress } = useTrailStore()

  return useQuery(['trail'], () => getTrail(token, trailId), {
    onSuccess: ({ trail, progress }) => {
      setTrail(trail)
      setProgress(progress)
    }
  })
}

export const useTrails = (token: string) => {
  const { setTrails } = useTrailStore()

  return useQuery(['trails'], () => getAllTrails(token), {
    onSuccess: (trails) => {
      setTrails(trails)
    }
  })
}

export const useUpdateTrail = () => {
  const { theme } = useTheme()

  const queryClient = useQueryClient()

  const createTrailMutation = useMutation(createTrail, {
    onSuccess: () => {
      queryClient.invalidateQueries(['trails'])
    },
    onError: (error) => {
      const errorMessage = getApiErrorMessage(error)

      showToastError(theme, errorMessage)
    }
  })

  const updateTrailMutation = useMutation(updateTrail, {
    onSuccess: () => {
      queryClient.invalidateQueries(['trails'])
    },
    onError: (error) => {
      const errorMessage = getApiErrorMessage(error)

      showToastError(theme, errorMessage)
    }
  })

  const deleteTrailMutation = useMutation(deleteTrail, {
    onSuccess: () => {
      queryClient.invalidateQueries(['trails'])
    },
    onError: (error) => {
      const errorMessage = getApiErrorMessage(error)

      showToastError(theme, errorMessage)
    }
  })

  return {
    createTrailMutation,
    updateTrailMutation,
    deleteTrailMutation
  }
}
