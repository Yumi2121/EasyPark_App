import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import "./search.style.js"

const Search = () => {
    return (
        <div className="search-session">
            <div className="search-input-area">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input type="text" placeholder="Where are you going?" classname="searchInput" />
            </div>
        </div>
    )
}

export default Search;