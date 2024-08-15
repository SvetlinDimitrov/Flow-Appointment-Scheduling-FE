import {MapContainer, Marker, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

interface MapComponentProps {
  position: [number, number];
}

const MapComponent = ({position}: MapComponentProps) => {
  return (
    // @ts-ignore
    <MapContainer center={position} zoom={13} style={{height: "320px", width: '500px'}}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        // @ts-ignore
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}/>
    </MapContainer>
  );
};

export default MapComponent;