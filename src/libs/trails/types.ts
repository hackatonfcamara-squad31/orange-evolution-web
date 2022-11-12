import { Module } from 'libs/module/types'

export interface Trail {
  id: string
  title: string
  icon_url: string
  created_at: string
  updated_at: string
  total: number
  completed: number
}

export interface TrailInfo {
  id: string
  title: string
}

export interface TrailPageData {
  trail: Trail
  modules: Module[]
  total: number
  completed: number
}
