// import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { useState } from "react";
// import { useLocation } from "react-router-dom";
import SearchItem from "../../components/searchItem/SearchItem";
import "./list.css";
import useFetch from '../../hooks/useFetch';

const List = () => {

    // const location = useLocation();
    // const [destination, setDestination] = useState(location.state.destination);

    // need to modify later
    const {data, loading, error, reFetch } = useFetch("/carparks?lists") 

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
                                {loading ? "loading" : <>
                                {data.map(item => (
                                     <SearchItem key={item._id} />
                                ))}
                               
                                </> }
                              
                             
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