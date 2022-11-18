import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";

const Map = withScriptjs(withGoogleMap((props) =>{
const recycleCenters = props.recycleCenters
   return (
       <GoogleMap zoom={4.5} center={ { lat:  39.6693, lng: -98.3476 } } >
       {recycleCenters.map(center => (
            <Marker
                 key={center.id}
                 position={{
                     lat: center.latitude,
                     lng: center.longitude
                 }}
            />
        ))};
        </GoogleMap>)
}));
export default Map;