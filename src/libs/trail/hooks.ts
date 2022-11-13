import { useQuery } from '@tanstack/react-query'
import { getTrail } from './api'
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
