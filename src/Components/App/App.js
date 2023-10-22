import './App.css';
import Form from '../Form/Form';
import Review from '../Review/Review';
import Error from '../Error/Error';
import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { Icon } from "leaflet";
import { GET_REVIEWS } from '../../utils';

const App = () => {
  const { loading, error, data, refetch } = useQuery(GET_REVIEWS, {
    pollInterval: 10000,
  });
  const [position, setPosition] = useState(null)
  const [lat, setLat] = useState(null)
  const [lng, setLng] = useState(null)

  const LocationMarker = () => {
    const map = useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        setPosition({ lat, lng });
        setLat(lat.toString())
        setLng(lng.toString())
        map.flyTo(e.latlng, map.getZoom());
      }
    });
    
    return position === null ? null : (
      <Marker position={position}>
        <Popup>Your Selected Location</Popup>
      </Marker>
    );
  };

  const foodIcon = new Icon({
    iconUrl: '/dinner-icon.png',
    iconSize: [35, 35]
  });

  const CustomPopup = ({ name, description }) => (
    <div className="custom-popup">
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );

  if (loading) {
    return <p className='loading-msg'>Loading...</p>
  } else if (data) {
    return (
      <div className='app'>
        <Form lat={lat} lng={lng} refetch={refetch}/>
        <MapContainer
          center={{ lat: 39.739235, lng: -104.990250 }}
          zoom={6}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LocationMarker />
          {data.reviews.map(review => (
            <Marker 
              key={review.id}
              position={[review.lat, review.lng]}
              icon={foodIcon}
            >
              <Popup>
                <CustomPopup name={review.name} description={review.description} />
              </Popup>
            </Marker>
          ))}
        </MapContainer>
        <Review data={data} refetch={refetch}/>
      </div>
    )
  } else if (error) {
    return <Error error={error}/>
  }
};

export default App;