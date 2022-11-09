import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import "./search.css"

// URL constructor
// const picture = new URL("./images/bear.jpeg", import.meta.url)

const Search = () => {
    return (
         <div className="search-session">
            <div className="search-details">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input type="text" placeholder="Where are you going?" classname="searchInput" />
            </div>
        </div>
    )
}

export default Search;