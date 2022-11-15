import { BallTriangle } from 'react-loader-spinner'
import { LoaderWrapper } from './styles'

export function Loader() {
  return (
    <LoaderWrapper>
      <BallTriangle
        height={56}
        width={56}
        radius={4}
        color="#FF5A23"
        ariaLabel="Carregando..."
        visible={true}
      />
    </LoaderWrapper>
  )
}
