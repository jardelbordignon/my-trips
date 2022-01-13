import dynamic from 'next/dynamic'

import { IMap } from '@/components/Map'
import { Seo } from './Seo'

const Map = dynamic<IMap>(
  () => import('@/components/Map').then((mod) => mod.Map),
  { ssr: false, loading: () => <span>...</span> }
)

export const HomeTemplate = ({ places }: IMap) => (
  <>
    <Seo />
    <Map places={places} />
  </>
)
