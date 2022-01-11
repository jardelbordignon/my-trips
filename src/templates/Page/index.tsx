import { FloatingLink } from '@/components/utils/FloatingLink'
import { XIcon } from '@/assets/iconsFile'
import * as S from './styles'

export interface IPageTemplate {
  heading: string
  body: string
}

export const PageTemplate = ({ heading, body }: IPageTemplate) => {
  return (
    <S.Wrapper>
      <FloatingLink href="/">
        <a>
          <XIcon />
        </a>
      </FloatingLink>

      <h2>{heading}</h2>

      <S.Body>
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </S.Body>
    </S.Wrapper>
  )
}
