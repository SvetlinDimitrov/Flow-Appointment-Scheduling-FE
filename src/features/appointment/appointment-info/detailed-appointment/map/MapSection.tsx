import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import {Box} from '@mui/material';

const MapSection = () => {
  const position = [51.505, -0.09]; // Static coordinates
  
  return (
    <Box width={'100%'} height={'100%'} display={'flex'}
         alignItems={'center'} justifyContent={'center'}>
      {/*@ts-ignore*/}
      <MapContainer center={position} zoom={13} style={{height: '180px', width: '300px'}}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br/> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </Box>
  );
};

export default MapSection;