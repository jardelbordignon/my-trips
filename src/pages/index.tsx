import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

// import { Map } from '@/components/pages/Map'
const Map = dynamic(() => import('@/components/pages/Map'), { ssr: false })

const HomePage: NextPage = () => {
  const place1 = {
    id: '1',
    name: 'Carazinho',
    slug: 'carazinho',
    location: {
      lat: -28.2751468,
      lng: -52.8312789
    }
  }

  const place2 = {
    id: '2',
    name: 'Balneário Camboriú',
    slug: 'balneario-camboriu',
    location: {
      lat: -27.0057044,
      lng: -48.6870244
    }
  }

  return <Map places={[place1, place2]} />
}

export default HomePage
