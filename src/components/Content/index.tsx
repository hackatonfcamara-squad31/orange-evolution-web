import { Checkbox } from 'components/Checkbox'
import {
  Badge,
  Badges,
  ContentWrapper,
  TitleWrapper
} from 'components/Content/styles'
import { Heading } from 'components/Heading'
import { useTheme } from 'contexts/ThemeContext'

export interface ContentProps {
  title: string
  type: string
  creator: string
}

export function Content({ title, type, creator }: ContentProps) {
  const { theme } = useTheme()
  return (
    <ContentWrapper theme={theme}>
      <TitleWrapper>
        <Checkbox size="sm" title="Concluir" />
        <Heading size="sm" color="gray">
          {title}
        </Heading>
      </TitleWrapper>

      <Badges>
        <Badge title={type}>{type}</Badge>
        <Badge title={creator}>{creator}</Badge>
      </Badges>
    </ContentWrapper>
  )
}
