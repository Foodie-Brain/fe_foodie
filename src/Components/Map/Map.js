import './Map.css';



const Map = () => {


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
<div>
  
</div>
  );
};

export default Map;