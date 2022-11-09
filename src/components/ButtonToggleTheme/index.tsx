import { Button, ButtonProps } from 'components/Button'
import { useTheme } from 'contexts/ThemeContext'
import { TbMoonStars, TbSun } from 'react-icons/tb'
import { Wrapper } from './styles'

interface ButtonToggleThemeProps extends ButtonProps {}

export function ButtonToggleTheme({ ...props }: ButtonToggleThemeProps) {
  const { theme, toggleTheme } = useTheme()

  return (
    <Wrapper>
      <Button
        onClick={toggleTheme}
        isOnlyIcon
        title={theme === 'dark' ? 'Modo Light' : 'Modo Dark'}
        {...props}
      >
        {theme === 'dark' ? <TbSun /> : <TbMoonStars />}
      </Button>
    </Wrapper>
  )
}
