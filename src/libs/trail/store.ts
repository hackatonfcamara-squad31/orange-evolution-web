import create from 'zustand'
import { Trail } from './types'

type TrailStoreData = {
  trails: Trail[]
  trail: Trail
  progress: number
  isLoading: boolean
  error: string | null
  setTrails: (trails: Trail[]) => void
  setTrail: (trail: Trail) => void
  setProgress: (progress: number) => void
}

export const useTrailStore = create<TrailStoreData>((set) => ({
  trails: [],
  trail: null as Trail | null,
  progress: 0,
  isLoading: false,
  error: null as string | null,
  setTrails: (trails) => set({ trails }),
  setTrail: async (trail) => set({ trail }),
  setProgress: async (progress) => set({ progress })
}))
