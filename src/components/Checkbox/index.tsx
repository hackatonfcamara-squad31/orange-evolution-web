import {
  CheckboxProps as RadixCheckoxProps,
  Indicator
} from '@radix-ui/react-checkbox'
import { Text } from 'components/Text'
import { FaCheck } from 'react-icons/fa'
import { useTheme } from '../../contexts/ThemeContext'
import { CheckboxRoot, CheckboxWrapper } from './styles'

export interface CheckboxProps extends RadixCheckoxProps {
  size?: 'sm' | 'md' | 'lg'
  labelFor?: string
  label?: string
}

export function Checkbox({
  size = 'sm',
  labelFor,
  label,
  ...props
}: CheckboxProps) {
  const { theme } = useTheme()

  return (
    <CheckboxWrapper>
      <CheckboxRoot theme={theme} size={size} id={labelFor} {...props}>
        <Indicator asChild>
          <FaCheck />
        </Indicator>
      </CheckboxRoot>

      <Text asChild size={size}>
        <label htmlFor={labelFor}>{label}</label>
      </Text>
    </CheckboxWrapper>
  )
}
