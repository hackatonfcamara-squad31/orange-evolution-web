import { Module } from 'libs/module/types'

export type Trail = {
  id: string
  title: string
  icon_url: string
  modules: Module[]
}
