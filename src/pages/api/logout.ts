import { deleteCookie } from 'cookies-next'
import { NextApiRequest, NextApiResponse } from 'next'
import { api } from 'services/api'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.status(405).json({
      message: 'Method not allowed'
    })
    return
  }

  api.defaults.headers.common.Authorization = `Bearer ${req.cookies.encontreduca_admin}`

  await api.post('/logout')

  deleteCookie('@orange-evolution:token', { req, res })

  res.status(200).json({
    message: 'Logout realizado com sucesso!'
  })
}
