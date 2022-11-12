import { Content } from 'libs/content/types'
import { TrailInfo } from 'libs/trails/types'
import create from 'zustand'
import { Module } from './types'

type ModuleState = {
  module: Module
  contents: Content[]
  progress: number
  trailInfo: TrailInfo
  isLoading: boolean
  error: string | null
  setModule: (module: Module) => void
  setContents: (contents: Content[]) => void
  setProgress: (progress: number) => void
  setTrailInfo: (trailInfo: TrailInfo) => void
}

export const useModuleStore = create<ModuleState>((set) => ({
  module: null as Module | null,
  contents: [] as Content[],
  progress: 0,
  trailInfo: {} as TrailInfo,
  isLoading: false,
  error: null as string | null,
  setModule: async (module) => set({ module }),
  setContents: async (contents) => set({ contents }),
  setProgress: async (progress) => set({ progress }),
  setTrailInfo: async (trailInfo) => set({ trailInfo })
}))
