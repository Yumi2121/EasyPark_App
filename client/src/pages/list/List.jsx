// import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
// import SearchItem from "../../components/searchItem/SearchItem";
import "./list.css";
import useFetch from '../../utils/useFetch';
import { getCarparks } from '../../services/carparkServices';
import Card from 'react-bootstrap/Card';
import GoogleMapComponent from "../../components/googleMap/map";
import { Navigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


// const List = () => {

//     const location = useLocation();
//     const [destination, setDestination] = useState(location.state.destination);

//     // need to modify later
    // const {data, loading, error, reFetch }  = useFetch("/carparks?lists") 
    
function distance(lat1, long1, lat2, long2) {
    return Math.sqrt(Math.pow(lat2-lat1, 2) + Math.pow(long2-long1, 2));
}



const List = () => {
    const location = useLocation();
    const {lat, lng, destination} = location.state;
  
    const {data, loading, error, reFetch }  = useFetch("/carparks");
    console.log(data)

    // Calculate the distance by filter the top 3 filtered carparks close to destination
    // const sortCarpark = data.sort((a, b) => distance(a.lat, a.lng, lat, lng) < distance(b.lat, b.lng, lat, lng))
    const sortCarpark = data.sort(function(a, b) {
        const dist_a = distance(a.lat, a.lng, lat, lng);
        const dist_b = distance(b.lat, b.lng, lat, lng);

        if (dist_a < dist_b) return -1;
        if (dist_a > dist_b) return 1;
        return 0;
    });
    const filteredCarpark = sortCarpark.slice(0,3);
    const mapCarpark = []
    for (let index = 0; index < filteredCarpark.length; index ++) {
        const item = filteredCarpark[index];
        mapCarpark.push({"lat": item.lat, 
                "lng": item.lng, 
                "label": (index + 1).toString()
            });
    }

    return (
        <>
            <GoogleMapComponent lat={lat} lng={lng} carparks={mapCarpark} />

            <Container className="list-session">
                <Row className="listContainer">                
                        <Col className="left-session">
                            <div className="listSearch">
                                <h2>Search</h2>
                                <label>Destination</label>
                                <input placeholder={destination} type="text" />
                            </div>

                            <div className="listResult">
                                {loading ? "loading" : <>
                                {filteredCarpark.map((item, i) => (
                                    <div className="card-container" key={i} >
                                      <Card style={{ width: '18rem' }} >
                                        <Card.Body>
                                            <Card.Title>{item.carpark_name}</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">{item.carpark_name}</Card.Subtitle>
                                            {/* <Card.Text> */}
                                             <p style={{color: "black"}}> {item.address} </p>
                                            {/* </Card.Text> */}
                                            <Card.Link href={`/carparks/${item._id}`} >Book</Card.Link>
                                            <Button variant="primary">Daily from $6</Button>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                ))}
                               
                                </> }
        
                            </div>
                        </Col>  
                </Row>
            </Container>
        </>
    );
};

export default List;