import { HeaderImages, HeaderWrapper } from './styles'
import Image from 'next/image'
import logoFCamara from '../../../public/logofcamara.svg'
import logoOrangeJuice from '../../../public/logoorangejuice.svg'
import logoPdeFormacao from '../../../public/logopdeformacao.svg'

export function Header() {
  return (
    <HeaderWrapper>
      <HeaderImages>
        <Image
          src={logoFCamara}
          alt="logo do grupo FCamara"
          width={168}
          height={37}
        />
        <Image
          src={logoOrangeJuice}
          alt="logo do grupo FCamara"
          width={66}
          height={49}
        />
        <Image
          src={logoPdeFormacao}
          alt="logo do grupo FCamara"
          width={176}
          height={57}
        />
      </HeaderImages>
    </HeaderWrapper>
  )
}
