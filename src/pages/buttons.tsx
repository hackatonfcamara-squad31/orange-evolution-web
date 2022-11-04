import { Button } from 'components/Button'
import { ButtonToggleTheme } from 'components/ButtonToggleTheme'
import { useTheme } from 'contexts/ThemeContext'
import { TbArrowNarrowRight } from 'react-icons/tb'
import { Main } from 'styles/pages/home'

export default function Home() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <Main theme={theme}>
        <ButtonToggleTheme />
        <ButtonToggleTheme isLoading />

        <Button>Default</Button>

        <Button isLoading>Loading</Button>

        <Button disabled>Disabled</Button>

        <Button>
          Icon
          <TbArrowNarrowRight />
        </Button>

        <Button size="sm">Small</Button>

        <Button size="md">Medium</Button>

        <Button size="lg">Large</Button>

        <Button size="xl">Extra Large</Button>

        <Button isFullWidth>Full Width</Button>
      </Main>
    </>
  )
}
