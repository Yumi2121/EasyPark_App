import "./searchItem.css"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useContext } from "react";
import { AuthContext } from "../../utils/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Booking from "../../components/booking/Booking"

const SearchItem = () => {
    const location = useLocation();
    const id = location.pathname.split("/");
    const [openBooking, setOpenBooking] = useState(false);

        // const { data, loading, error} = useFetch(`/carparks/find${id}`);
        const { user } = useContext(AuthContext);
        const navigate = useNavigate();
    
        const handleClick = () => {
            if (user) {
                setOpenBooking(true);
            } else {
                navigate("/login");
            }
        }

    return (
        <>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Joe Garage</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">1 Elizabeth Street, Melbourne</Card.Subtitle>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Book</Card.Link>
                <Button onClick={handleClick} variant="primary">Daily from $6</Button>
            </Card.Body>
    </Card>

    {openBooking && <Booking carparkId= {id}/> }
    </>
    );
}

export default SearchItem;