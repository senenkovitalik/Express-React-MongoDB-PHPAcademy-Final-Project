import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'reactstrap';
import ProdItem from './ProdItem';
import {
  Link
} from 'react-router-dom';

const ProductList = (props) => {

  return (
    <Col xs="12" lg="6" className="order-lg-2 mb-2"
         style={{fontSize: 0.8+'rem'}}>
      <h4>Your order</h4>
      {
        props.products.map((product, index) => {
          return  <ProdItem key={index}
                            product={product.product}
                            count={product.count} />
        })
      }
      <hr className="m-0"/>

      <Row className="justify-content-between mb-2">
        <Col xs="auto"><strong>Total</strong></Col>
        <Col xs="3"><strong>{props.total}</strong></Col>
      </Row>

      <Row className="justify-content-center">
        <Col xs="auto" className="text-center">
          <Link to={{pathname: "/basket", state: { modal: true }}}>Edit order</Link>
          <br />
          <Link to="/">Back to shopping</Link>
        </Col>
      </Row>
    </Col>
  );
};

export default ProductList;