import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import "./search.css";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";



const Search = () => {

    const navigate = useNavigate();
    const [destination, setDestination] = useState("");

    // URL constructor
    // const whitePicture = new URL("../../images/white-bg2.jpg", import.meta.url)

    const {data, loading, error, reFetch } = useFetch(
        `/carparks?${destination}`
    );

    // submit search 
    const handleSearch = () => {
        reFetch();
        navigate("/carparks", { state: destination});
    };


    return (
        <div class="Container">
         <div className="search-session">
            <div className="search-details">
                <p><h1>New Option of Parking- EasyPark</h1></p>
                <p>Book now! Pay later </p>
                <p>Where do you want to Park?  </p> 
                <div>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <input type="text" placeholder="Search for the address" classname="searchInput" onChange={(e) => setDestination(e.target.value)} />
                    <Button type="submit" onClick={handleSearch}>Search</Button>
                </div>
            </div>

        </div>
        </div>
    )
}

export default Search;