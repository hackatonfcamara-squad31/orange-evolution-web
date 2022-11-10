import { Button, ButtonProps } from 'components/Button'
import Link from 'next/link'

interface ButtonLinkProps extends ButtonProps {
  text: string
  href: string
}

export function ButtonLink({ text, href, ...props }: ButtonLinkProps) {
  return (
    <Link href={href} passHref legacyBehavior>
      <Button asAnchor {...props}>
        {text}
      </Button>
    </Link>
  )
}
