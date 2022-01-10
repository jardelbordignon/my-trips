import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export const Map = () => {
  return (
    <MapContainer
      center={[-52.8312789, -28.2751468]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-52.8312789, -28.2751468]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}
