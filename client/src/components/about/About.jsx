import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import SafeIcon from "../../images/safe.png";
import SaveIcon from "../../images/save.png";
import FlexIcon from "../../images/flex.png";
import "./About.css";

const About = () => {
return(
    <body>
        <Container>
          <div className="about-title">
            <h1>About Us</h1>
          </div>
         <Row>
          <Col>
            <h3 className="about-text">
                EasyPark is an alternative to general parking that allows you to book a 
                private parking spots in Melbourne, Australia with ease. 
            </h3>
          </Col>
        </Row>
        <div className="icons">
          <div class="about-subtitle">
            <p>EasyPark Parking Spots are:</p>
          </div>
          <div class="flex-container">
            <div class="container">
              <p>Reliable & Secure</p>
              <img src={SafeIcon} alt="Safe" width="200"/>
            </div>
            <div class="container">
              <p>Easy To Find</p>
              <img src={FlexIcon} alt="Flexable" width="200"/>
            </div>
            <div class="container">
              <p>& Afordable!</p>
              <img src={SaveIcon} alt="Savings" width="200"/>
            </div>
          </div>
        </div>
        </Container>
    </body>


    )
}
export default About