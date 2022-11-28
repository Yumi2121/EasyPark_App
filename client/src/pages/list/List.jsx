// import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./list.css";
import useFetch from '../../utils/useFetch';
import Card from 'react-bootstrap/Card';
import GoogleMapComponent from "../../components/googleMap/map";
import easyparkAPI from '../../config/api'

    
function distance(lat1, long1, lat2, long2) {
    return Math.sqrt(Math.pow(lat2-lat1, 2) + Math.pow(long2-long1, 2));
}


const List = () => {
    const location = useLocation();
    const {lat, lng, destination} = location.state;
  
    const {data, loading }  = useFetch("/carparks");

    useEffect(() => {
    const fetchData = async ()=> {
        try{
            const res = await easyparkAPI.get("/carparks");
            console.log(res);
        } catch (err) {
            console.log(err);
        } 
    };
    fetchData();
    }, []);

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
        mapCarpark.push({
                "lat": item.lat, 
                "lng": item.lng, 
                "label": (index + 1).toString()
            });
    }

    return (
        <div className='list'>
           
            <GoogleMapComponent className="Googlemap" lat={lat} lng={lng} carparks={mapCarpark} />
            
               
                <div className="listSearch">
                    <h2>Search</h2>
                    <label style={{marginRight: '10px'}}>Destination</label>
                    <input style={{width: '400px'}} placeholder={destination} type="text" />
                </div>

                <div className="listResult">
                    {loading ? "loading" : <>
                    {filteredCarpark.map((item, i) => (
                        <div className="card-container" key={i} >
                            <Card bg={'secondary'} text={'light'} style={{ width: '18rem'}} >
                            <Card.Body>
                                <Card.Title style={{fontSize: '14px'}}>{i+1} - {item.carpark_name}</Card.Title>
                                <Card.Text style={{fontSize: '12px'}}>
                                    {item.address}
                                </Card.Text>
                                <Card.Link style={{color: 'pink'}} href={`/carparks/${item._id}`} >Book</Card.Link>
                                <Card.Link style={{color: 'white'}} >Daily from ${item.price}</Card.Link>
                                
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                    
                    </> }

                </div>
        </div>
    );
};

export default List;