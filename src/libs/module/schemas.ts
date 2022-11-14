import { z } from 'zod'

export const moduleSchema = z.object({
  description: z
    .string()
    .trim()
    .min(4, 'Descrição deve ter no mínimo 4 caracteres')
    .max(250, 'Descrição deve ter no máximo 250 caracteres'),
  title: z
    .string()
    .trim()
    .min(4, 'Título deve ter no mínimo 4 caracteres')
    .max(100, 'Título deve ter no máximo 100 caracteres')
})

export type ModuleFormData = z.infer<typeof moduleSchema>
