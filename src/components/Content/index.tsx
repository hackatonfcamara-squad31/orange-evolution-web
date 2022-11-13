import { Checkbox } from 'components/Checkbox'
import {
  Badge,
  Badges,
  ContentWrapper,
  TitleWrapper
} from 'components/Content/styles'
import { ContentForm } from 'components/ContentForm'
import { Heading } from 'components/Heading'
import { useTheme } from 'contexts/ThemeContext'
import { useMarkContent } from 'libs/content/hooks'
import { Content as ContentType } from 'libs/content/types'
import { useState } from 'react'
import { BallTriangle } from 'react-loader-spinner'
import { showToastInfo, showToastSuccess } from 'utils/toasts'

export interface ContentProps {
  content: ContentType
  handleMarkContentAsCompleted?: (contentId: string) => Promise<void>
  handleMarkContentAsUncompleted?: (contentId: string) => Promise<void>
}

export function Content({
  content,
  handleMarkContentAsCompleted,
  handleMarkContentAsUncompleted
}: ContentProps) {
  const [isCheckboxLoading, setIsCheckboxLoading] = useState(false)
  const { title, type, creator_name, duration, is_completed, link } = content

  const { theme } = useTheme()

  const { isMarkContentLoading, setIsMarkContentLoading } = useMarkContent()

  async function handleMarkContent() {
    setIsMarkContentLoading(true)
    setIsCheckboxLoading(true)

    try {
      if (is_completed) {
        await handleMarkContentAsUncompleted(content.id)
        showToastInfo(theme, `${title} marcado como não concluído!`)
      }

      if (!is_completed) {
        await handleMarkContentAsCompleted(content.id)
        showToastSuccess(theme, `${title} marcado como concluído!`)
      }
    } catch (error) {
      console.error(error)
    }

    setIsMarkContentLoading(false)

    setTimeout(() => {
      setIsCheckboxLoading(false)
    }, 1000)
  }

  return (
    <ContentWrapper theme={theme}>
      <TitleWrapper>
        {handleMarkContentAsCompleted && handleMarkContentAsUncompleted ? (
          isCheckboxLoading ? (
            <BallTriangle
              height={24}
              width={24}
              radius={4}
              color="#FF5A23"
              ariaLabel="Carregando..."
              visible={true}
            />
          ) : (
            <Checkbox
              disabled={isMarkContentLoading || isCheckboxLoading}
              size="sm"
              title="Concluir"
              checked={is_completed}
              onClick={handleMarkContent}
            />
          )
        ) : (
          <ContentForm content={content} />
        )}
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
