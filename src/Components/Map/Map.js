import './Map.css';
import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';

const Map = () => {
  const [position, setPosition] = useState(null)

  const LocationMarker = () => {
    const map = useMapEvents({
      click(e) {
        console.log(e)
        const { lat, lng } = e.latlng;
        console.log(e.latlng)
        setPosition({ lat, lng });
        map.flyTo(e.latlng, map.getZoom());
      }
    })
    console.log(position, 'this is position in map')
  
    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    );
  };

  // THE CODE BELOW WAS BEING USED TO LOCATE THE USER'S CURRENT LOCATION VIA GEOLOCATION
  // function LocationMarker() {
  //   const [position, setPosition] = useState(null)
  //   const map = useMapEvents({
  //     click(e) {
  //       map.locate()
  //     },
  //     locationfound(e) {
  //       setPosition(e.latlng)
  //       map.flyTo(e.latlng, map.getZoom())
  //     }
  //   })
  //   console.log(position)
  
  //   return position === null ? null : (
  //     <Marker position={position}>
  //       <Popup>You are here</Popup>
  //     </Marker>
  //   )
  // }

  return (
    <MapContainer
      center={{ lat: 39.739235, lng: -104.990250 }}
      zoom={6}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
    </MapContainer>
  );
};

export default Map;