import { Link, ILink } from '../Link'

import * as S from './styles'

interface IFloatingLink extends ILink {
  position?: S.PositionType
}

export const FloatingLink = ({
  position = 'topRight',
  ...rest
}: IFloatingLink) => (
  <S.Wrapper position={position}>
    <Link {...rest} />
  </S.Wrapper>
)
