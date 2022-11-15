import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AuthContext } from '../../context/AuthContext';


const NavbarEP = () => {
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
                    <Form className="d-flex">
                        user.email
                        <Button variant="btn-secondary" type="submit">sign out</Button>
                    </Form>
                    )
                    :
                    (<Form className="d-flex">
                        <Button variant="btn-secondary" type="submit">Sign in </Button>
                        <Button variant="btn-secondary" type="submit">sign up</Button>
                    </Form>
                    )}               
                </Navbar.Collapse>
            </Container>
    </Navbar>
 );
}

export default NavbarEP;