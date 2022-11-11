import { BallTriangle } from 'react-loader-spinner'
import { SearchLoaderWrapper } from './styles'

export function SearchLoader() {
  return (
    <SearchLoaderWrapper>
      <BallTriangle
        height={56}
        width={56}
        radius={4}
        color="#FF5A23"
        ariaLabel="Carregando..."
        visible={true}
      />
    </SearchLoaderWrapper>
  )
}
