import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
        <Container>
            <Row>
                <Col style={{marginBottom: '80px'}}>&copy; EasyPark 2022  Made by Quoc Lam & Zumin Yu </Col>
            </Row>
        </Container>
    </footer>
  )
}
export default Footer