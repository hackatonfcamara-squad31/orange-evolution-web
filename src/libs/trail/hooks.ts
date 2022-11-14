import { useQuery } from '@tanstack/react-query'
import { getAllTrails, getTrail } from './api'
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
