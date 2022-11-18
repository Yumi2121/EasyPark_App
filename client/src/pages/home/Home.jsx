import React from "react";
import Search from "../../components/search/Search";
import List from "../list/List";
import About from "../../components/about/About"


const Home = () => {
    return (
        <div>          
            <Search /> 
            <About />
        </div>
    )
}

export default Home;