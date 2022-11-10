import { Button } from 'components/Button'
import { ButtonToggleTheme } from 'components/ButtonToggleTheme'
import { Heading } from 'components/Heading'
import { useTheme } from 'contexts/ThemeContext'
import { TbArrowNarrowRight } from 'react-icons/tb'
import { BodyWrapper, Main } from 'styles/pages/home'

export default function Home() {
  const { theme } = useTheme()

  return (
    <BodyWrapper theme={theme}>
      <Main>
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

        <Heading size="lg">Colors</Heading>

        <Button isOnlyIcon color="gray">
          <TbArrowNarrowRight />
        </Button>

        <Button isOnlyIcon color="gray" isLoading>
          <TbArrowNarrowRight />
        </Button>
        <Button color="gray">Red Button</Button>

        <Button isOnlyIcon color="red">
          <TbArrowNarrowRight />
        </Button>

        <Button isOnlyIcon color="red" isLoading>
          <TbArrowNarrowRight />
        </Button>
        <Button color="red">Red Button</Button>

        <Button isOnlyIcon color="green">
          <TbArrowNarrowRight />
        </Button>
        <Button isOnlyIcon color="green" isLoading>
          <TbArrowNarrowRight />
        </Button>
        <Button color="green">Green Button</Button>
      </Main>
    </BodyWrapper>
  )
}
