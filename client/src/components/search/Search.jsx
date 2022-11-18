import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import "./search.css";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useFetch from "../../utils/useFetch";
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



    // URL constructor
    // const whitePicture = new URL("../../images/white-bg2.jpg", import.meta.url)

    // const {data, loading, error, reFetch } = useFetch(
    //     `/carparks?${destination}`
    // );

    // submit search 
    const handleSearch = () => {
        
        navigate("/carparks", {state:{
            lat: lat, 
            lng: lng, 
            destination: destination
        }});
    };
    
    // const changeHandler =(e) => {
    //     setSearchInput(e.target.value)
    
    // }
    
    return (
        <div className="Container">
         <div className="search-session">
            <div className="search-details">
                <h1>New Option of Parking- EasyPark</h1>
                <p>Book now! Pay later </p>
                <p>Where do you want to Park?  </p> 
                <div>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <input ref={inputRef} 
                    // onChange={changeHandler}
                    type="text" placeholder="Search for the address" 
                    className="searchInput" 
                   />
                    <Button type="submit" onClick={handleSearch}>Search</Button>
                </div>
            </div>

        </div>
        </div>
        
    )
}

export default Search;