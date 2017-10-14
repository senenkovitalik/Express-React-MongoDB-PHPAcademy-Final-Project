import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'reactstrap';

const ProdItem = (props) => {
  return (<Row className="p-1">
    <Col xs="2">
      <img src={`/${props.product.mainImg}`} className="w-100" alt={props.product.name} />
    </Col>
    <Col xs="6">
      <Link to={`/product/${props.product.name}`}>{props.product.name}</Link>
    </Col>
    <Col xs="1">1</Col>
    <Col xs="3">{props.product.price}</Col>
  </Row>)
};

export default ProdItem;