import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AuthContext } from '../../utils/AuthContext';
import { useNavigate } from "react-router-dom";



const NavbarEP = () => {
    let navigate = useNavigate();
    const { user } = useContext(AuthContext);

    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                {/* <img src="./logo.png" alt="easypark-logo" height={60} width={30} /> */}
                <Navbar.Brand href="/">EasyPark</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                    >
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#action2">About</Nav.Link>
                    </Nav>
                    
                    {user ? (
                    <Nav className="d-flex"
                    style={{ maxHeight: '100px' }}
                    navbarScroll>
                        user.email
                    </Nav>
                    )
                    :
                    (                    
                    <Nav className="d-flex"
                    style={{ maxHeight: '100px' }}
                    navbarScroll>
                        <Nav.Link href="/auth/login">Become a member</Nav.Link>
                        {/* <Nav.Link href="/auth/signup">Sign up</Nav.Link> */}
                    </Nav>
                    )}               
                </Navbar.Collapse>
            </Container>
    </Navbar>
 );
}

export default NavbarEP;