// import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { useState } from "react";
// import { useLocation } from "react-router-dom";
import SearchItem from "../../components/searchItem/SearchItem";
import "./list.css";

const List = () => {

    // const location = useLocation();
    // const [destination, setDestination] = useState(location.state.destination);


    return (
       
        <div>    
            <Container>
                <Row className="listContainer">                
                        <Col className="left-session">
                            <div className="listSearch">
                                <h2>Search</h2>
                                <label>Destination</label>
                                {/* <input placeholder={destination} type="text" /> */}
                            </div>

                            <div className="listResult">
                                <SearchItem />
                                <SearchItem />
                                <SearchItem />
                                <SearchItem />
                                <SearchItem />
                            </div>
                        </Col>  
                        <Col className="mapSession">
                            <div className="googlemap">
                                map
                            </div>
                        </Col>  
                </Row>
            </Container>

        </div>
    );
};

export default List;