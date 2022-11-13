import create from 'zustand'
import { Trail } from './types'

type TrailStoreData = {
  trail: Trail
  progress: number
  isLoading: boolean
  error: string | null
  setTrail: (trail: Trail) => void
  setProgress: (progress: number) => void
}

export const useTrailStore = create<TrailStoreData>((set) => ({
  trail: null as Trail | null,
  progress: 0,
  isLoading: false,
  error: null as string | null,
  setTrail: async (trail) => set({ trail }),
  setProgress: async (progress) => set({ progress })
}))
