import { Button, ButtonProps } from 'components/Button'
import Link from 'next/link'
import { ReactNode } from 'react'

// make ButtonLink Props extends ButtonProps or anchor element props and extends then
interface ButtonLinkProps extends ButtonProps {
  href: string
  children: ReactNode
}

export function ButtonLink({ children, href, ...props }: ButtonLinkProps) {
  return (
    <Link href={href} passHref legacyBehavior>
      <Button
        asAnchor
        {...props}
        rel={props.target === '_blank' ? 'noreferrer noopener' : null}
      >
        {children}
      </Button>
    </Link>
  )
}
