import { Text } from 'components/Text'
import {
  ProgressIndicator,
  ProgressRoot,
  ProgressTextWrapper,
  ProgressWrapper
} from './styles'

interface ProgressProps {
  donePercentage: number
  isTrailPage?: boolean
}

export function Progress({ donePercentage, isTrailPage }: ProgressProps) {
  const donePercentageFormatted = Math.round(donePercentage)

  return (
    <>
      <ProgressWrapper>
        <ProgressTextWrapper isTrailPage={isTrailPage}>
          <Text size="xs">Progresso</Text>
          <Text size="xs">{donePercentageFormatted}%</Text>
        </ProgressTextWrapper>

        <ProgressRoot value={donePercentageFormatted} isTrailPage={isTrailPage}>
          <ProgressIndicator
            css={{
              transform: `translateX(-${100 - donePercentageFormatted}%)`
            }}
          />
        </ProgressRoot>
      </ProgressWrapper>
    </>
  )
}
