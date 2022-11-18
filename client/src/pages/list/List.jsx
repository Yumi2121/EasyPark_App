// import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SearchItem from "../../components/searchItem/SearchItem";
import "./list.css";
import useFetch from '../../utils/useFetch';
import SimpleMap from '../../components/googleMap/googleMap';
// import Map from '../../components/googleMap/reactGoogleMaps';
import { getCarparks } from '../../services/carparkServices';


// const List = () => {

//     const location = useLocation();
//     const [destination, setDestination] = useState(location.state.destination);

//     // need to modify later
//     const {data, loading, error, reFetch }  = useFetch("/carparks?lists") 
    
//     return (

//         <div>    
//             <Container>
//                 <Row className="listContainer">                
//                         <Col className="left-session">
//                             <div className="listSearch">
//                                 <h2>Search</h2>
//                                 <label>Destination</label>
//                                 {<input placeholder={destination} type="text" />}
//                             </div>

//                             {/* { <div className="listResult">
//                                 {loading ? "loading" : <>
//                                 {data.map(item => (
//                                      <SearchItem key={item._id} />
//                                 ))}
                               
//                                 </> }
        
//                             </div>} */}


//                         </Col>  
//                         <Col className="mapSession">
//                             <div className="googlemap">
//                                 <SimpleMap />
//                             </div>
//                         </Col>  
//                 </Row>
//             </Container>

//         </div>
//     );
// };


const List = () => {
    const location = useLocation();
    const {lat, lng, destination} = location.state;
    const [lat1,setLat1] = useState(0);


    const { data, loading, error } = useFetch('/carparks');
  
//  export default function CarparkList() {
//     const [carparks, setCarparks] = useState([]);

//     const allCarparks = async () => {
//         await getCarparks()
        
//     }
    
//     console.log(allCarparks)

    

//     useEffect(() => {
       
//     }, []);

    return (
        <div className="googlemap">
             <div className="listSearch">
                <h2>Search</h2>
                <label>Destination</label>
                <input placeholder={destination} type="text" />
            </div>

{/* 
            <div>
                {CarparkList() }
             </div>


         
            <SimpleMap lat={lat} lng={lng}/>  */}
         </div> 
    )
    
};
export default List;