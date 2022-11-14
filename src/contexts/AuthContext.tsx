import { deleteCookie, getCookie, setCookie } from 'cookies-next'
import { getAuthUser } from 'libs/auth/api'
import { LoginFormData } from 'libs/auth/schemas/loginSchema'
import { RegisterFormData } from 'libs/auth/schemas/registerSchema'
import { LoginResponse, RegisterResponse } from 'libs/auth/types'
import { getApiErrorMessage } from 'libs/functions/api'
import { User } from 'libs/user/types'
import Router from 'next/router'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
import { api } from 'services/api'
import { showToastError, showToastSuccess } from 'utils/toasts'
import { useTheme } from './ThemeContext'

interface AuthProviderProps {
  children: ReactNode
}

interface AuthContextData {
  authUser: User
  isAuthenticaded: boolean
  isAuthLoading: boolean
  setAuthUser: (user: User) => void
  setIsAuthLoading: (isAuthLoading: boolean) => void
  register: (registerFormData: RegisterFormData) => Promise<boolean>
  login: (loginFormData: LoginFormData) => Promise<boolean>
  adminLogin: (loginFormData: LoginFormData) => Promise<boolean>
  logout: () => Promise<boolean>
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const [authUser, setAuthUser] = useState<User | null>(null)
  const [isAuthLoading, setIsAuthLoading] = useState(false)

  const { theme } = useTheme()

  const isAuthenticaded = !!authUser

  async function updateAuthUser() {
    const token = getCookie(process.env.NEXT_PUBLIC_AUTH_COOKIE_NAME)

    if (!token) {
      return
    }

    const user = await getAuthUser(token.toString())

    if (!user) {
      return
    }

    api.defaults.headers.Authorization = `Bearer ${token}`

    setAuthUser(user)
  }

  useEffect(() => {
    updateAuthUser()
  }, [])

  const register = async (registerFormData: RegisterFormData) => {
    setIsAuthLoading(true)

    try {
      const { data }: { data: RegisterResponse } = await api.post('/users', {
        ...registerFormData,
        is_admin: false
      })

      showToastSuccess(theme, 'Cadastro realizado com sucesso!')
      setIsAuthLoading(false)

      Router.push('/login')

      return true
    } catch (error) {
      const errorMessage = getApiErrorMessage(error)

      showToastError(theme, errorMessage)
      setIsAuthLoading(false)

      return false
    }
  }

  const login = async ({ email, password }: LoginFormData) => {
    setIsAuthLoading(true)

    try {
      const { data }: { data: LoginResponse } = await api.post('/login', {
        email,
        password
      })

      const { access_token } = data

      api.defaults.headers.Authorization = `Bearer ${access_token}`

      setCookie(process.env.NEXT_PUBLIC_AUTH_COOKIE_NAME, access_token, {
        maxAge: 60 * 60 * 24 * 30 // 30 days
      })

      const user = await getAuthUser(access_token)

      setAuthUser(user)

      showToastSuccess(theme, 'Login realizado com sucesso!')
      setIsAuthLoading(false)

      Router.push('/trilhas')

      return true
    } catch (error) {
      const errorMessage = getApiErrorMessage(error)

      showToastError(theme, errorMessage)
      setIsAuthLoading(false)

      return false
    }
  }

  const logout = async () => {
    try {
      deleteCookie(process.env.NEXT_PUBLIC_AUTH_COOKIE_NAME)

      showToastSuccess(theme, 'Logout realizado com sucesso. Volte sempre!')

      setAuthUser(null)
      setIsAuthLoading(false)

      Router.push('/login')

      return true
    } catch (error) {
      const errorMessage = getApiErrorMessage(error)

      showToastError(theme, errorMessage)
      setIsAuthLoading(false)

      return false
    }
  }

  const adminLogin = async ({ email, password }: LoginFormData) => {
    setIsAuthLoading(true)

    try {
      const { data }: { data: LoginResponse } = await api.post('/login', {
        email,
        password
      })

      const { access_token } = data

      const user = await getAuthUser(access_token)

      if (!user?.is_admin) {
        showToastError(
          theme,
          'Você não tem permissão para acessar essa página.'
        )
        setIsAuthLoading(false)
        return false
      }

      api.defaults.headers.Authorization = `Bearer ${access_token}`

      setCookie(process.env.NEXT_PUBLIC_AUTH_COOKIE_NAME, access_token, {
        maxAge: 60 * 60 * 24 * 30 // 30 days
      })

      setAuthUser(user)

      showToastSuccess(theme, 'Login realizado com sucesso!')
      setIsAuthLoading(false)

      Router.push('/trilhas')

      return true
    } catch (error) {
      const errorMessage = getApiErrorMessage(error)

      showToastError(theme, errorMessage)
      setIsAuthLoading(false)

      return false
    }
  }

  return (
    <AuthContext.Provider
      value={{
        authUser,
        isAuthenticaded,
        isAuthLoading,
        setAuthUser,
        setIsAuthLoading,
        register,
        login,
        adminLogin,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = (): AuthContextData => useContext(AuthContext)
