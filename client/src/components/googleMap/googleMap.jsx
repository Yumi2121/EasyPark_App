import React from "react";
import GoogleMapReact from 'google-map-react';
import MapMarker from "./mapMarker";
import "./map.css";

export default function SimpleMap(props){
  const {lat, lng} = props
  
  const defaultProps = {
    center: {
      lat: lat,
      lng: lng
    },
    zoom: 12
  };
  const points = [
    { key: 'x', lat: -lat, lng: lng, text:"X", tooltip:"QV Melbourne", url:"http://www.cnn.com" },
    { key: '1', lat: -37.85, lng: 144.99, text:"1", tooltip:"Carpark 1", url:"http://www.cnn.com" },
    { key: '2', lat: -37.83, lng: 144.95, text:"2", tooltip:"Carpark 2", url:"http://www.cnn.com" },
    { key: '3', lat: -37.80, lng: 144.93, text:"3", tooltip:"Carpark 3", url:"http://www.cnn.com" },
  ];
  const defaultMapOptions = {
    disableDefaultUI: true,
  };
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{
            // remove the key if you want to fork
            key: "AIzaSyDiKc4HxX5G7EfneIZBN_Hlk2_luoT_yvo",
            language: "en",
            region: "au"
          }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        defaultOptions={defaultMapOptions}
      >
    
      {points.map(({ lat, lng, key, text, tooltips, url }) => {
          return (
            <MapMarker key={key} lat={lat} lng={lng} text={text} tooltip={tooltips} url={url} />
          );
        })}  
    
      </GoogleMapReact>
    </div>
  );
}