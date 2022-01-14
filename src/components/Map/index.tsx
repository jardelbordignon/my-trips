import { useRouter } from 'next/router'
import { MapContainer, TileLayer, Marker, MapConsumer } from 'react-leaflet'

import { mapboxAccessToken } from '@/config/dotenv'
import { useWindowDimensions } from '@/hooks/useWindowDimensions'
import L from 'leaflet'

type PlaceType = {
  id: string
  name: string
  slug: string
  location: {
    latitude: number
    longitude: number
  }
  went: boolean
  _icon: HTMLElement
}

export interface IMap {
  places?: PlaceType[]
}

const CustomTileLayer = () =>
  mapboxAccessToken ? (
    <TileLayer
      attribution='&copy; <a href="https://apps.mapbox.com/feedback/">Mapbox</a> &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${mapboxAccessToken}`}
    />
  ) : (
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  )

const markerIcon = (color: 'blue' | 'green') =>
  new L.Icon({
    iconUrl: `img/marker-${color}-icon-2x.png`,
    shadowUrl: '/img/marker-icon-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  })

export const Map = ({ places }: IMap) => {
  const router = useRouter()
  const { width } = useWindowDimensions()
  const isMobile = width < 768

  return (
    <MapContainer
      center={[-28.2751468, -52.8312789]}
      zoom={2.5}
      // minZoom={3}
      maxBounds={[
        [-180, 180],
        [180, -180]
      ]}
      style={{ height: '100%', width: '100%', backgroundColor: '#75cff0' }}
    >
      <MapConsumer>
        {(map) => {
          map.setMinZoom(isMobile ? 2 : 3)
          return null
        }}
      </MapConsumer>

      <CustomTileLayer />

      {places &&
        places.map(({ id, slug, name, location, went }) => (
          <Marker
            key={id}
            position={[location.latitude, location.longitude]}
            title={name}
            icon={markerIcon(went ? 'green' : 'blue')}
            eventHandlers={{
              click: () => router.push(`/place/${slug}`)
            }}
          />
        ))}
    </MapContainer>
  )
}
