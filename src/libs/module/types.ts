import { Content } from 'libs/content/types'
import { TrailInfo } from 'libs/trail/types'

export type Module = {
  id: string
  title: string
  description: string
  order: number
  created_at: string
  updated_at: string
}

export type ModulePageData = {
  trail_id: string
  trail_title: string
  total: number
  completed: number
  module: Module
  contents: Content[]
}

export type ModuleData = {
  module: Module
  contents: Content[]
  trailInfo: TrailInfo
  progress: number
}
