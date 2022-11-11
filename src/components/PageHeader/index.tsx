import Image from 'next/image'
import Link from 'next/link'
import { Breadcrumbs, PageHeaderWrapper } from './styles'

import orangeEvolutionLogo from '@/public/orangeEvolutionLogo.svg'

interface PageHeaderProps {
  moduleLink: string
  moduleName: string
  trailLink: string
  trailName: string
}

export function PageHeader({
  moduleLink,
  moduleName,
  trailLink,
  trailName
}: PageHeaderProps) {
  return (
    <PageHeaderWrapper>
      <Breadcrumbs>
        <Link href="/trilhas" title="Ir para página de Trilhas">
          Trilhas
        </Link>
        &gt;
        <Link
          href={trailLink}
          title={`Ir para página de módulos da Trilha ${trailName}`}
        >
          Módulos
        </Link>
        &gt;
        <Link href={moduleLink} title={`Página do módulo ${moduleName}`}>
          Conteúdos
        </Link>
      </Breadcrumbs>

      <Image
        src={orangeEvolutionLogo}
        alt="Orange Evolution Logo"
        width={200}
      />
    </PageHeaderWrapper>
  )
}
