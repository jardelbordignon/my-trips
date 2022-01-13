import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'

import { PlaceTemplate, IPlaceTemplate } from '@/templates/Place'
import { client, GET_PLACES, GET_PLACE_BY_SLUG } from '@/graphql'
import {
  GetPlaceBySlugQuery,
  GetPlacesQuery
} from '@/graphql/types/endpointGeneratedTypes'

const Place: NextPage<IPlaceTemplate> = ({ place }) => {
  const router = useRouter()

  if (router.isFallback) return <span>Loading...</span>

  return <PlaceTemplate place={place} />
}

export default Place

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) return { notFound: true }

  const { place } = await client.request<GetPlaceBySlugQuery>(
    GET_PLACE_BY_SLUG,
    { slug: params.slug }
  )

  if (!place) return { notFound: true }

  return {
    props: { place },
    revalidate: 5
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES, {
    first: 3
  })

  const paths = places.map(({ slug }) => ({ params: { slug: `${slug}` } }))

  return { paths, fallback: true }
}
