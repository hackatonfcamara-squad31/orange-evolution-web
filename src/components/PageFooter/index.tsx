import { ButtonLink } from 'components/ButtonLink'
import { Text } from 'components/Text'
import { BsDiscord } from 'react-icons/bs'
import { FooterButtonWrapper, PageFooterWrapper } from './styles'

export function PageFooter() {
  return (
    <PageFooterWrapper>
      <FooterButtonWrapper css={{ maxWidth: '280px' }}>
        <Text>Confira nossos Cases do Programa de Formação</Text>
        <ButtonLink
          color="purple"
          size="xl"
          href="https://digital.fcamara.com.br/programadeformacao-momentotbt"
          target="_blank"
        >
          Momento #TBT
        </ButtonLink>
      </FooterButtonWrapper>

      <FooterButtonWrapper css={{ maxWidth: '376px' }}>
        <Text>
          Compartilhe suas ideias, opniões e dúvidas na comunidade do{' '}
          <strong>Orange Juice!</strong>
        </Text>
        <ButtonLink
          size="lg"
          href="https://discord.com/invite/NtESsDFGx5"
          target="_blank"
        >
          <BsDiscord size={40} />
          Acesse nosso Discord!
        </ButtonLink>
      </FooterButtonWrapper>
    </PageFooterWrapper>
  )
}
