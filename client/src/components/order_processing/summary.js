import React from 'react';
import {
  Row,
  Col,
  Button
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Summary = (props) => {
  return (
    <div>
      <h2>Summary</h2>
      <Row className="justify-content-between">
        <Col xs="auto">{props.count} product{props.count > 1 ? 's' : ''} in total</Col>
      <Col xs="auto">${props.total}</Col>
      </Row>
      <Row className="justify-content-between">
        <Col xs="auto">Delivery cost</Col>
        <Col xs="auto">{props.useCourier ? 'courier service' : 'free'}</Col>
      </Row>
      <hr />
      <Row className="justify-content-between">
        <Col xs="auto">To be paid</Col>
        <Col xs="auto"><strong style={{fontSize: 1.2+'rem'}}>${props.total}</strong></Col>
      </Row>
    </div>
  );
};

export default Summary;