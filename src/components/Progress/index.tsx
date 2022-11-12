import { Text } from 'components/Text'
import { useTheme } from 'contexts/ThemeContext'
import React, { useEffect, useState } from 'react'
import {
  ProgressIndicator,
  ProgressRoot,
  ProgressText,
  ProgressTextWrapper,
  ProgressWrapper
} from './styles'

export function Progress({ done }) {
  return (
    <>
      <ProgressWrapper>
        <ProgressTextWrapper>
          <Text>Progresso</Text>
          <ProgressText>{done}%</ProgressText>
        </ProgressTextWrapper>

        <ProgressRoot value={done}>
          <ProgressIndicator
            style={{ transform: `translateX(-${100 - done}%)` }}
          />
        </ProgressRoot>
      </ProgressWrapper>
    </>
  )
}
