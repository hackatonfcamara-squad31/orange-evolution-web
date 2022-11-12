import { Content } from 'libs/content/types'

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
