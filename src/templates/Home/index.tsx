import dynamic from 'next/dynamic'

import { IMap } from '@/components/Map'

const Map = dynamic<IMap>(
  () => import('@/components/Map').then((mod) => mod.Map),
  { ssr: false, loading: () => <span>...</span> }
)

export const HomeTemplate = ({ places }: IMap) => <Map places={places} />
