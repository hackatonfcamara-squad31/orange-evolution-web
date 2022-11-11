import { useTheme } from 'contexts/ThemeContext'
import { useRouter } from 'next/router'

export default function TrailPage() {
  const { theme } = useTheme()

  const router = useRouter()

  const { id } = router.query
  console.log('💥 ~ id', id)

  return (
    <div>
      <h1>Trilha</h1>
    </div>
  )
}
