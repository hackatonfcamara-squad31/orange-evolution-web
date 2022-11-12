import * as Progress from '@radix-ui/react-progress'
import { styled } from 'styles'

export const ProgressWrapper = styled('div', {
  width: '100%'
})

export const ProgressTextWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '1.125rem',

  variants: {
    isTrailPage: {
      true: {
        marginBottom: '0.1rem'
      }
    }
  }
})

export const ProgressRoot = styled(Progress.Root, {
  position: 'relative',
  overflow: 'hidden',
  background: '$white',
  borderRadius: '$full',
  width: '100%',
  height: '10px',
  boxShadow: '$default',

  variants: {
    isTrailPage: {
      true: {
        height: '6px'
      }
    }
  }
})

export const ProgressIndicator = styled(Progress.Indicator, {
  background: 'linear-gradient(90deg, #FFB800 0%, #FF8C00 100%)',
  borderRadius: '$full',
  height: '100%',
  transition: 'transform 660ms cubic-bezier(0.65, 0, 0.35, 1)'
})
