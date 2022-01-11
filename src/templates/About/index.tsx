import { FloatingLink } from '@/components/utils/FloatingLink'
import { XIcon } from '@/assets/iconsFile'
import * as S from './styles'

export const AboutTemplate = () => {
  return (
    <S.Wrapper>
      <FloatingLink href="/">
        <a>
          <XIcon />
        </a>
      </FloatingLink>

      <h2>My Trips</h2>

      <S.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </S.Body>
    </S.Wrapper>
  )
}
