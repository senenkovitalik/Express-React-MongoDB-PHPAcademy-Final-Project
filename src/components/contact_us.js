import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';

class ContactUs extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col lg="6">
            <img src="img/guitar-shop.jpg" className="w-100 my-2" alt="GuitarShop" />
          </Col>
          <Col lg="6">
            <h2 className="mt-2">GuitarShop</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            Email: guitarshop@gmail.com<br />
            Phone: +38(093)-234-45-56<br />
            <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/vitalik.senenko">
              <span className="fa fa-facebook" style={{color: '#ffffff'}}></span>
            </a>
            <a className="btn btn-social-icon btn-google" href="https://plus.google.com/u/0/118132064331223916318">
              <span className="fa fa-google-plus" style={{color: '#ffffff'}}></span>
            </a>
            <a className="btn btn-social-icon btn-instagram" href="https://www.instagram.com">
              <span className="fa fa-instagram" style={{color: '#ffffff'}}></span>
            </a>
          </Col>
        </Row>
        <Row>
          <Col lg="6">
            <div id="map" className="my-2 w-100" style={{height: 400+'px'}}></div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ContactUs;