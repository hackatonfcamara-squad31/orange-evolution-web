import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'

interface ThemeProviderProps {
  children: ReactNode
}

export type Theme = 'light' | 'dark'

interface ThemeContextData {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData)

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    const storedTheme = localStorage.getItem('@orange-evolution:theme')

    if (storedTheme) {
      setTheme(storedTheme as Theme)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('@orange-evolution:theme', newTheme)
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = (): ThemeContextData => useContext(ThemeContext)
