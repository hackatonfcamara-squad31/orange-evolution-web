import { Button } from 'components/Button'
import { FaArrowRight } from 'react-icons/fa'


export default function Home() {
  
  return (
    <>
      <div>Hello</div>
      <Button >Dark Theme</Button>
      <Button >Light Theme</Button>
      <Button isLoading></Button>
      <Button disabled>
        Disabled
      </Button>
      <Button  size='lg'>
        Icon
        <FaArrowRight />
      </Button>
      <Button size="sm">
        Small
      </Button>
      <Button size="md">
        Medium
      </Button>
      <Button size="lg">
        Large
      </Button>
      </>
  )
}
