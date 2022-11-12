import { Module } from 'libs/module/types'

export interface Trail {
  id: string
  title: string
  icon_url: string
  created_at: string
  updated_at: string
  total: number
  completed: number
  modules: Module[]
}

export interface TrailInfo {
  id: string
  title: string
}

export interface TrailPageData {
  trail: Trail
  total: number
  completed: number
}
