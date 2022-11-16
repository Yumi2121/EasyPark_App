import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import SafeIcon from "../../images/safe.png";
import SaveIcon from "../../images/save.png";
import FlexIcon from "../../images/flex.png";

const About = () => {
return(
    <body>
        <Container>
         <h1>
            <p>About Us</p>
         </h1>
         <Row>
          <Col>
            <h3>
                EasyPark is an alternative to general parking that allows you to book a 
                private parking spots in Melbourne, Australia with ease. 
            </h3>
          </Col>
        </Row>
        <img src={SafeIcon} alt="Safe" width="200"/>
        <img src={SaveIcon} alt="Savings" width="200"/>
        <img src={FlexIcon} alt="Flexable" width="200"/>
        </Container>
    </body>


    )
}
export default About