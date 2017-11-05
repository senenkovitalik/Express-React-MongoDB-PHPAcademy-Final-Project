import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';

class ContactUs extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col lg="6" xs="12">
            <img src="/guitarshop.jpg" className="w-100 my-2" alt="GuitarShop" />
          </Col>
          <Col lg="6" xs="12">
            <h2 className="mt-2">GuitarShop</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            Email: guitarshop@gmail.com<br />
            Phone: +38(093)-234-45-56<br />
          </Col>
        </Row>
        <Row>
        </Row>
      </Container>
    );
  }
}

export default ContactUs;