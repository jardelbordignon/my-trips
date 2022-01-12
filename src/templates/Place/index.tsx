import { XIcon } from '@/assets/iconsFile'
import { FloatingLink } from '@/components/utils/FloatingLink'

import * as S from './styles'

// similar ao GetPlaceBySlugQuery
export interface IPlaceTemplate {
  place: {
    id: string
    slug: string
    name: string
    location: {
      latitude: number
      longitude: number
    }
    description?: {
      html: string
    }
    gallery: Array<{
      url: string
      height: number
      width: number
    }>
  }
}

export const PlaceTemplate = ({ place }: IPlaceTemplate) => (
  <S.Wrapper>
    <S.Container>
      <FloatingLink href="/">
        <a title="Go back to map">
          <XIcon />
        </a>
      </FloatingLink>
      <S.Heading>{place.name}</S.Heading>

      {place.description && (
        <S.Body dangerouslySetInnerHTML={{ __html: place.description.html }} />
      )}
      <S.Gallery>
        {place.gallery.map(({ url, ...rest }) => (
          <img key={url} src={url} alt={place.name} {...rest} />
        ))}
      </S.Gallery>
    </S.Container>
  </S.Wrapper>
)
