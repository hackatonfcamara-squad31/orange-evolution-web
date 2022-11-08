import { styled } from 'styles'

import * as CollapsiblePrimitive from '@radix-ui/react-collapsible'

export const CollapsibleRoot = styled(CollapsiblePrimitive.Root, {
  width: '70vw'
})

export const CollapsibleTrigger = CollapsiblePrimitive.Trigger
export const CollapsibleContent = CollapsiblePrimitive.Content

export const Flex = styled('div', { display: 'flex' })

export const Text = styled('span', {
  color: '$gray800',
  fontSize: 15,
  lineHeight: '25px'
})

export const CollapsibleIconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 30,
  width: 30,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'black',
  // boxShadow: `0 2px 10px ${blackA.blackA7}`,
  '&[data-state="closed"]': { backgroundColor: 'white' },
  '&[data-state="open"]': { backgroundColor: 'white' },
  '&:hover': { backgroundColor: '$gray400' }
  // '&:focus': { boxShadow: `0 0 0 2px black` }
})

export const Repository = styled('div', {
  backgroundColor: 'white',
  borderRadius: 4,
  margin: '10px 0',
  padding: 12,
  boxShadow: `0 2px 10px black`
})
