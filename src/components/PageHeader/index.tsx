import Image from 'next/image'
import Link from 'next/link'
import { Breadcrumbs, PageHeaderWrapper } from './styles'

import orangeEvolutionLogo from '@/public/orangeEvolutionLogo.svg'

interface PageHeaderProps {
  moduleLinkName?: string
  trailLink: string
  trailLinkName: string
  isContentPage?: boolean
}

export function PageHeader({
  moduleLinkName,
  trailLink,
  trailLinkName,
  isContentPage = false
}: PageHeaderProps) {
  return (
    <PageHeaderWrapper>
      <Breadcrumbs>
        <Link href="/trilhas" title="Ir para página de Trilhas">
          Trilhas
        </Link>
        &gt;
        <Link href={trailLink} title={trailLinkName}>
          Módulos
        </Link>
        {isContentPage && (
          <>
            &gt;
            <Link href="#" title={moduleLinkName}>
              Conteúdos
            </Link>
          </>
        )}
      </Breadcrumbs>

      <Image
        src={orangeEvolutionLogo}
        alt="Orange Evolution Logo"
        width={200}
      />
    </PageHeaderWrapper>
  )
}
