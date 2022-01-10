import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

// import { Map } from '@/components/pages/Map'
const Map = dynamic(() => import('@/components/pages/Map'), { ssr: false })

const HomePage: NextPage = () => {
  return <Map />
}

export default HomePage
