import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import "./search.css"

// URL constructor
const whitePicture = new URL("../../images/white-bg2.jpg", import.meta.url)

const Search = () => {
    return (
         <div className="search-session">
            <div className="search-details">
                <p><h1>New Option of Parking- EasyPark</h1></p>
                <p>Book now! Pay later </p>
                <p>Where do you want to Park?  </p> 
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input type="text" placeholder="Search for the address" classname="searchInput" />
            </div>

            <div className="white-bg-container" >
                <img className="white-bg-image" src={whitePicture} />
            </div>
        </div>
    )
}

export default Search;