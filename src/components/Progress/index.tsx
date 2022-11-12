import { Text } from 'components/Text'
import {
  ProgressIndicator,
  ProgressRoot,
  ProgressText,
  ProgressTextWrapper,
  ProgressWrapper
} from './styles'

interface ProgressProps {
  donePercentage: number
}

export function Progress({ donePercentage }) {
  return (
    <>
      <ProgressWrapper>
        <ProgressTextWrapper>
          <Text>Progresso</Text>
          <ProgressText>{donePercentage}%</ProgressText>
        </ProgressTextWrapper>

        <ProgressRoot value={donePercentage}>
          <ProgressIndicator
            style={{ transform: `translateX(-${100 - donePercentage}%)` }}
          />
        </ProgressRoot>
      </ProgressWrapper>
    </>
  )
}
