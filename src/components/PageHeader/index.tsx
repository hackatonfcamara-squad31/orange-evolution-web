import { orangeEvolutionLogo } from 'components/@constants'
import Image from 'next/image'
import Link from 'next/link'
import { Breadcrumbs, PageHeaderWrapper } from './styles'

interface PageHeaderProps {
  moduleLinkName?: string
  trailLink: string
  trailLinkName: string
  isModulePage?: boolean
  isAdminPage?: boolean
}

export function PageHeader({
  moduleLinkName,
  trailLink,
  trailLinkName,
  isModulePage = false,
  isAdminPage
}: PageHeaderProps) {
  return (
    <PageHeaderWrapper>
      <Breadcrumbs>
        <Link
          href={`${isAdminPage ? '/admin' : ''}/trilhas`}
          title="Ir para página de Trilhas"
        >
          Trilhas
        </Link>
        &gt;
        <Link href={trailLink} title={`Trilha ${trailLinkName}`}>
          {trailLinkName}
        </Link>
        {isModulePage && (
          <>
            &gt;
            <Link href="#" title={`Módulo ${moduleLinkName}`}>
              {moduleLinkName}
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
