import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'reactstrap';

const ProdItem = (props) => {
  return (<Row className="p-1">
    <Col xs="2">
      <img src={`/${props.product.imgs[0]}`} className="w-100" alt={props.product.name} />
    </Col>
    <Col xs="6">
      <Link to={`/product/${props.product.name}/${props.product.model}`}>{props.product.name} {props.product.model}</Link>
    </Col>
    <Col xs="1">{props.count}</Col>
    <Col xs="3">{props.count * props.product.price}</Col>
  </Row>)
};

export default ProdItem;