import { useRouter } from 'next/router'
import Image from 'next/image'

import { XIcon } from '@/assets/iconsFile'
import { FloatingLink } from '@/components/utils/FloatingLink'
import { Seo } from './Seo'

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
      text: string
    }
    gallery: Array<{
      url: string
      height: number
      width: number
    }>
  }
}

export const PlaceTemplate = ({ place }: IPlaceTemplate) => {
  const router = useRouter()

  if (router.isFallback) return null

  return (
    <>
      <Seo place={place} />
      <FloatingLink href="/">
        <a title="Go back to map">
          <XIcon />
        </a>
      </FloatingLink>
      <S.Wrapper>
        <S.Container>
          <S.Heading>{place.name}</S.Heading>

          {place.description && (
            <S.Body
              dangerouslySetInnerHTML={{ __html: place.description.html }}
            />
          )}
          <S.Gallery>
            {place.gallery.map(({ url }) => (
              <Image
                key={url}
                src={url}
                alt={place.name}
                width={1000}
                height={600}
                quality={75}
              />
            ))}
          </S.Gallery>
        </S.Container>
      </S.Wrapper>
    </>
  )
}
