import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { FaCheck } from "react-icons/fa";
import { CheckboxRoot } from './styles';
// import { useTheme } from '../../contexts/ThemeContext';



export interface CheckboxProps extends CheckboxPrimitive.CheckboxProps {}

export function Checkbox( {} : CheckboxProps) { 

  return (
    <CheckboxRoot>
      <CheckboxPrimitive.Indicator asChild>
        <FaCheck/>
      </CheckboxPrimitive.Indicator>
    </CheckboxRoot>
  )
}
