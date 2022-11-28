import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import "./search.css";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useRef, useEffect } from "react";




const Search = () => {

    // google map auto complete
    const autoCompleteRef = useRef();
    const inputRef = useRef();
    const options = {  componentRestrictions: { country: "au" },
    fields: ["address_components", "geometry", "icon", "name"],
    types: ["establishment"]
    };

    const navigate = useNavigate();
    const [destination, setDestination] = useState("");
    const [lat, setLat] = useState("");
    const [lng, setLng] = useState("");
    

    useEffect(() => {
        autoCompleteRef.current = new window.google.maps.places.Autocomplete(
         inputRef.current,
         options
        );

        autoCompleteRef.current.addListener("place_changed", async function () {
            const place = await autoCompleteRef.current.getPlace();
            const lat = place.geometry.location.lat();
            const lng = place.geometry.location.lng();
            setLat(lat)
            setLng(lng)
            setDestination(inputRef.current.value)
        });
       }, []);

    // submit search 
    const handleSearch = () => {       
        navigate("/carparks", {state:{
            lat: lat, 
            lng: lng, 
            destination: destination
        }});
      
    };
    
    
    return (
        <div className="Container">
         <div className="search-session">
            <div className="search-details">
                <div className="search-header">
                <h1>New Option of Parking- EasyPark</h1>
                <p>Book now! Pay later </p>
                </div>
            
                <div className="search-bar">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    {" "}
                    <input style={{width: '360px'}} ref={inputRef} id="search-input"
                    type="text" placeholder="Please search address or place name, such as QV" 
                    className="searchInput" 
                   />
                    <Button id="search-button" variant="warning" size="sm" type="submit" onClick={handleSearch}>Search</Button>
                </div>
            </div>

        </div>
        </div>
        
    )
}

export default Search;