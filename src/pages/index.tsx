import type { GetStaticProps, NextPage } from 'next'

import { IMap } from '@/components/Map'
import { HomeTemplate } from '@/templates/Home'
import { GET_PLACES, client } from '@/graphql'
import { GetPlacesQuery } from '@/graphql/types/endpointGeneratedTypes'

const Home: NextPage<IMap> = ({ places }) => <HomeTemplate places={places} />

export default Home

// getStaticProps -> sever para buscar dados da página e disponibilizar nas props, build time
export const getStaticProps: GetStaticProps = async () => {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES)

  return {
    props: { places }
  }
}
