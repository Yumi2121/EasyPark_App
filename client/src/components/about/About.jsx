import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import SafeIcon from "../../images/safe.png";
import SaveIcon from "../../images/save.png";
import FlexIcon from "../../images/flex.png";
import "./About.css";

const About = () => {
return(
    <>
        <Container className='about-session'>
         <Row>
          <Col>
            <h3 className="about-text">
                EasyPark is an alternative to general parking that allows you to book a 
                private parking spots in Melbourne, Australia with ease. 
            </h3>
          </Col>
        </Row>
        <div className="icons">
          <div className="flex-container">
            <div class="container">
              <p>Reliable & Secure</p>
              <img src={SafeIcon} alt="Safe" />
            </div>
            <div className="container">
              <p>Easy To Find</p>
              <img src={FlexIcon} alt="Flexable" />
            </div>
            <div className="container">
              <p>& Afordable!</p>
              <img src={SaveIcon} alt="Savings" />
            </div>
          </div>
        </div>
        </Container>
    </>

    )
}
export default About