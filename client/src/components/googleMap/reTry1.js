import React from "react";
import Map from "./retryMap";


const RecycleCenterssMapContainer = () => {

    const KEY = process.env.Google_key;
  
     return (
        <div className="map-container">
        <Map
           recycleCenters={this.props.recycleCenters}
           googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${KEY}&v=3.exp&libraries=geometry,drawing,places`}
           loadingElement={<div style={{ height: `100%` }} />}
           containerElement={<div style={{ height: `600px`, width: `100%` }} />}
           mapElement={<div style={{ height: `100%` }} />}
        />
       </div>
     );
  }

export default RecycleCenterssMapContainer;
