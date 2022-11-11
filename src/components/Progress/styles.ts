import { styled } from 'styles'
import * as Progress from '@radix-ui/react-progress'
import { Text } from 'components/Text'

export const ProgressWrapper = styled('div', {
  width: '100%',
  span: {
    fontSize: '$xs'
  }
})

export const ProgressText = styled(Text, {
  fontSize: '$xs'
})

export const ProgressTextWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'space-between'
})

export const ProgressRoot = styled(Progress.Root, {
  position: 'relative',
  overflow: 'hidden',
  background: '$white',
  borderRadius: '$full',
  width: '100%',
  height: '6px',
  transform: 'translateZ(0)',
  boxShadow: '4px 4px 8px gray'
})

export const ProgressIndicator = styled(Progress.Indicator, {
  backgroundColor: '$orange400',
  height: '100%',
  transition: 'transform 660ms cubic-bezier(0.65, 0, 0.35, 1)'
})
