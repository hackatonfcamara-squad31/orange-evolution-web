import { useQuery } from '@tanstack/react-query'
import { getModule } from './api'
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
