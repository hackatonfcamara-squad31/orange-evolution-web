import { Checkbox } from 'components/Checkbox'
import {
  Badge,
  Badges,
  ContentWrapper,
  TitleWrapper
} from 'components/Content/styles'
import { Heading } from 'components/Heading'
import { useTheme } from 'contexts/ThemeContext'
import { Content as ContentType } from 'libs/content/types'

export interface ContentProps {
  content: ContentType
}

export function Content({ content }: ContentProps) {
  const { title, type, creator_name, duration, is_completed, link } = content

  const { theme } = useTheme()
  return (
    <ContentWrapper theme={theme}>
      <TitleWrapper>
        <Checkbox size="sm" title="Concluir" checked={is_completed} />
        <Heading size="sm" color="gray" asChild>
          <a
            href={link}
            title={`Acessar ${link}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {title}
          </a>
        </Heading>
      </TitleWrapper>

      <Badges>
        <Badge title={type}>{type}</Badge>
        <Badge title={creator_name}>{creator_name}</Badge>
      </Badges>
    </ContentWrapper>
  )
}
