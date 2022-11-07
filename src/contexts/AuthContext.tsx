import axios from 'axios'
import { LoginFormData } from 'libs/auth/schemas/loginSchema'
import { getApiErrorMessage } from 'libs/functions/api'
import { User } from 'libs/user/types'
import { ApiLoginResponse } from 'pages/api/login'
import { createContext, ReactNode, useContext, useState } from 'react'
import { showToastError, showToastSuccess } from 'utils/toasts'
import { useTheme } from './ThemeContext'

interface AuthProviderProps {
  children: ReactNode
}

interface AuthContextData {
  authUser: User
  isAuthLoading: boolean
  setAuthUser: (user: User) => void
  setIsAuthLoading: (isAuthLoading: boolean) => void
  login: (loginFormData: LoginFormData) => Promise<boolean>
  logout: () => Promise<boolean>
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const [authUser, setAuthUser] = useState<User | null>(null)
  const [isAuthLoading, setIsAuthLoading] = useState(false)

  console.log('🚀 ~ authUser', authUser)

  const { theme } = useTheme()

  const login = async (loginFormData: LoginFormData) => {
    setIsAuthLoading(true)
    const { email, password } = loginFormData

    try {
      const { data }: { data: ApiLoginResponse } = await axios.post(
        '/api/login',
        {
          email,
          password
        }
      )

      const { authUser: authUserData } = data

      setAuthUser(authUserData)

      showToastSuccess(theme, 'Login realizado com sucesso!')
      setIsAuthLoading(false)

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
      await axios.post('/api/logout')

      showToastSuccess(theme, 'Logout realizado com sucesso!')

      setAuthUser(null)
      setIsAuthLoading(false)

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
        isAuthLoading,
        setAuthUser,
        setIsAuthLoading,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = (): AuthContextData => useContext(AuthContext)
