import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'

export interface CheckboxProps extends CheckboxPrimitive.CheckboxProps {}

export function Checkbox( {} : CheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      style={{
        width: '20px',
        height: '20px',
        backgroundColor: 'gray',
        borderRadius: '2px'
      }}
    >
      <CheckboxPrimitive.Indicator asChild>
        <CheckIcon
          style={{
            width: '16px',
            height: '16px',
            color: 'white'
          }}
        />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}
