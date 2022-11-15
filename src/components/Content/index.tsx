import { Checkbox } from 'components/Checkbox'
import {
  Badge,
  Badges,
  ContentWrapper,
  TitleWrapper
} from 'components/Content/styles'
import { ContentForm } from 'components/Forms/ContentForm'
import { Heading } from 'components/Heading'
import { useTheme } from 'contexts/ThemeContext'
import { useMarkContent } from 'libs/content/hooks'
import { Content as ContentType } from 'libs/content/types'
import { useState } from 'react'
import { BallTriangle } from 'react-loader-spinner'
import { showToastInfo, showToastSuccess } from 'utils/toasts'

export interface ContentProps {
  content: ContentType
  isAdmin?: boolean
  handleMarkContentAsCompleted: (contentId: string) => Promise<void>
  handleMarkContentAsUncompleted: (contentId: string) => Promise<void>
}

export function Content({
  content,
  isAdmin,
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
        {isCheckboxLoading && (
          <BallTriangle
            height={24}
            width={24}
            radius={4}
            color="#FF5A23"
            ariaLabel="Carregando..."
            visible={true}
          />
        )}

        {isAdmin && !isCheckboxLoading && <ContentForm content={content} />}

        {!isAdmin && !isCheckboxLoading && (
          <Checkbox
            disabled={isMarkContentLoading || isCheckboxLoading}
            size="sm"
            title={
              is_completed
                ? 'Desmarcar como concluído'
                : 'Marcar como concluído'
            }
            checked={is_completed}
            onClick={handleMarkContent}
          />
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
