import { z } from 'zod'

export const moduleSchema = z.object({
  description: z
    .string()
    .trim()
    .max(250, 'Descrição deve ter no máximo 250 caracteres'),
  title: z.string().trim().max(100, 'Título deve ter no máximo 100 caracteres')
})

export type ModuleFormData = z.infer<typeof moduleSchema>
