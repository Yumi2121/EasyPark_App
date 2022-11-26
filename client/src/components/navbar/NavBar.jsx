import { useContext, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AuthContext } from '../../utils/AuthContext';
import { useNavigate } from "react-router-dom";
import { useGlobalState } from '../../utils/StateContext';
import { getLoggedInUser, logoutUser } from '../../services/authServices';


export default function NavbarEP() {
    const navigate = useNavigate();
    // const { user } = useContext(AuthContext);
    // const { dispatch } = useContext(AuthContext);
    // console.log(user)

    const {store, dispatch} = useGlobalState();
    const { loggedInUser } = store;

    function handleLogout(e) {
        e.preventDefault();
        logoutUser()
        .then(() => {
            dispatch({type: "setLoggedInUser", data: null});
            dispatch({type: "setAdminUser", data: false});
            dispatch({type: "setToken", data: null});
        })  
        navigate("/")
        }

    return (
        <Navbar bg="light" expand="lg" fixed='top'>
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
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                    
                    { loggedInUser ?                         
                    (
                    <Nav className="d-flex"
                    style={{ maxHeight: '100px' }}
                    navbarScroll>
                        <Nav.Link >{loggedInUser}</Nav.Link>
                        <Nav.Link onClick={handleLogout} >log out</Nav.Link>
                    </Nav>
                    )
                    :
                    (                    
                    <Nav className="d-flex"
                    style={{ maxHeight: '100px' }}
                    navbarScroll>
                        <Nav.Link href="/auth/login">Become a member/LogIn</Nav.Link>
        
                    </Nav>
                    )}    

                    { loggedInUser && getLoggedInUser.isAdmin && (
                         <Nav className="d-flex"
                         style={{ maxHeight: '100px' }}
                         navbarScroll>
                             <Nav.Link href="/admin">Admin: {loggedInUser}</Nav.Link>
                             <Nav.Link onClick={handleLogout} >log out</Nav.Link>
                         </Nav>
                    )
}

                </Navbar.Collapse>
            </Container>
    </Navbar>
 );
}
