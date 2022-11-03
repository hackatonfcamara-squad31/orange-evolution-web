import { Button } from 'components/Button'
import { useTheme } from 'contexts/ThemeContext'
import { ArrowRightIcon } from '@radix-ui/react-icons'

export default function Home() {
  return (
    <>
      <div>Hello</div>
      <Button theme="dark">Dark Theme</Button>
      <Button theme="light">Light Theme</Button>
      <Button theme="light" isLoading></Button>
      <Button theme="dark" disabled>
        Disabled
      </Button>
      <Button theme="light">
        Icon
        <ArrowRightIcon />
      </Button>
      <Button theme="light" size="sm">
        Small
      </Button>
      <Button theme="light" size="md">
        Medium
      </Button>
      <Button theme="light" size="lg">
        Large
      </Button>
    </>
  )
}
