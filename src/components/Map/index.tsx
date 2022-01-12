import { MapContainer, TileLayer, Marker } from 'react-leaflet'

type PlaceType = {
  id: string
  name: string
  slug: string
  location: {
    latitude: number
    longitude: number
  }
}

export interface IMap {
  places?: PlaceType[]
}

export const Map = ({ places }: IMap) => {
  return (
    <MapContainer
      center={[-28.2751468, -52.8312789]}
      zoom={2.5}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {places &&
        places.map(({ id, name, location }) => (
          <Marker
            key={id}
            position={[location.latitude, location.longitude]}
            title={name}
          />
        ))}
    </MapContainer>
  )
}