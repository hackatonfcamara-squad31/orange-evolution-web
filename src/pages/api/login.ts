import { setCookie } from 'cookies-next'
import { getAuthUser } from 'libs/auth/api'
import { LoginFormData } from 'libs/auth/schemas/loginSchema'
import { LoginResponse } from 'libs/auth/types'
import { getApiErrorMessage } from 'libs/functions/api'
import { User } from 'libs/user/types'
import { NextApiRequest, NextApiResponse } from 'next'
import { api } from 'services/api'

export interface ApiLoginResponse extends NextApiResponse {
  authUser: User | null
  message?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<ApiLoginResponse | undefined> {
  if (req.method !== 'POST') {
    res.status(405).json({
      message: 'Method not allowed'
    })
    return
  }

  try {
    const { email, password }: LoginFormData = req.body

    const {
      data: { access_token }
    }: { data: LoginResponse } = await api.post('/login', {
      email,
      password
    })

    console.log('🚀 ~ access_token', access_token)

    setCookie('@orange-evolution:token', access_token, {
      req,
      res,
      maxAge: 30 * 24 * 60 * 60
    })

    api.defaults.headers.common.Authorization = `Bearer ${access_token}`

    const authUser = await getAuthUser()
    console.log('🚀 ~ authUser', authUser)

    res.status(200).json({ authUser })
  } catch (error) {
    console.log('🚀 ~ error', error)
    const errorMessage = getApiErrorMessage(error)

    res.status(401).json({
      user: null,
      message:
        errorMessage ||
        'Occorreu um erro ao fazer login, por favor tente novamente.'
    })
  }
}
