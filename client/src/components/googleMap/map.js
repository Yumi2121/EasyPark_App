import React from 'react'
import { GoogleMap, Marker,  useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  position: 'relative',
  width: '1200px',
  height: '400px',
  margin: '0px auto 0px',
  
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
    googleMapsApiKey: '',
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

const onMarkerClick = React.useCallback(event => {
    console.log('You clicked ', event.currentTarget);
  }, []);

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
          })
        }
        <Marker position={{lat:center.lat, lng:center.lng}} label={""} title={"Destination"} icon={"http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}/>
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(GoogleMapComponent)