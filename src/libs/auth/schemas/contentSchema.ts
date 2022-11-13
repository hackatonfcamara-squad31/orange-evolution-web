import { z } from 'zod'

export const contentSchema = z.object({
  title: z.string().trim().max(100, 'Título deve ter no máximo 100 caracteres'),
  type: z.string().trim().max(50, 'Descrição deve ter no máximo 50 caracteres'),
  creator_name: z
    .string()
    .trim()
    .max(100, 'Título deve ter no máximo 100 caracteres'),
  link: z.string().trim().max(1000, 'Título deve ter no máximo 100 caracteres')
})

export type ContentFormData = z.infer<typeof contentSchema>
