import { CheckboxProps as RadixCheckoxProps } from '@radix-ui/react-checkbox'
import { Text } from 'components/Text'
import { TbCheck } from 'react-icons/tb'
import { useTheme } from '../../contexts/ThemeContext'
import { CheckboxIndicator, CheckboxRoot, CheckboxWrapper } from './styles'

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
        <CheckboxIndicator>
          <TbCheck />
        </CheckboxIndicator>
      </CheckboxRoot>

      {label && (
        <Text asChild size={size}>
          <label htmlFor={labelFor}>{label}</label>
        </Text>
      )}
    </CheckboxWrapper>
  )
}
