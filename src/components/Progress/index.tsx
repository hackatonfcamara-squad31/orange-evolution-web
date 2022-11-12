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
  return (
    <>
      <ProgressWrapper>
        <ProgressTextWrapper isTrailPage={isTrailPage}>
          <Text size="xs">Progresso</Text>
          <Text size="xs">{donePercentage}%</Text>
        </ProgressTextWrapper>

        <ProgressRoot value={donePercentage} isTrailPage={isTrailPage}>
          <ProgressIndicator
            css={{ transform: `translateX(-${100 - donePercentage}%)` }}
          />
        </ProgressRoot>
      </ProgressWrapper>
    </>
  )
}
