import React from 'react'
import { GoogleMap, Marker,  useJsApiLoader } from '@react-google-maps/api';


const containerStyle = {
  width: '400px',
  height: '400px'
};

function GoogleMapComponent(props) {
  const { lat, lng, carparks }= props
  const center = {
    lat: lat,
    lng: lng
  };

  console.log(lat);
  console.log(lng);
  console.log(carparks);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "123",
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  const points = [
    { key: '1', lat: -37.85, lng: 144.99, text:"1", tooltip:"Carpark 1", url:"http://www.cnn.com" },
    { key: '2', lat: -37.83, lng: 144.95, text:"2", tooltip:"Carpark 2", url:"http://www.cnn.com" },
    { key: '3', lat: -37.80, lng: 144.93, text:"3", tooltip:"Carpark 3", url:"http://www.cnn.com" },
  ];

  // const svgMarker = {
  //   path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
  //   fillColor: "blue",
  //   fillOpacity: 0.6,
  //   strokeWeight: 0,
  //   rotation: 0,
  //   scale: 2,
  //   anchor: new window.google.maps.Point(15, 30),
  // };
const onMarkerClick = React.useCallback(event => {
    console.log('You clicked ', event.currentTarget);
  }, []);
// const onMarkerClick = React.useCallback(function callback(event) {
//     alert(event.currentTarget);
//   }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {carparks.map(({ lat, lng, label, url }) => {

            return (
              <Marker key={label} position={{lat:lat, lng:lng}} label={label} title={""}
                      onClick={onMarkerClick}
              />
            );
          })}
        }
        <Marker position={{lat:center.lat, lng:center.lng}} label={""} title={"Destination"} icon={"http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}/>
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(GoogleMapComponent)