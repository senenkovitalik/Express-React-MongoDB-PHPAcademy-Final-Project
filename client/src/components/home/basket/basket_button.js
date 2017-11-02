import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';
import { Col, Button, Badge } from 'reactstrap';

const buttonStyle = {
  backgroundColor: '#007bff',
  color: '#fff'
};

const iconStyle = {
  width: 25 + 'px',
  height: 25 + 'px',
  color: '#fff'
};

const BasketButton = (props) => (
  <Col xs="12" md="3" lg="2" className="order-md-3">
    <Button size="lg"
            block
            to={{
              pathname: "/basket",
              state: {modal: true}
            }}
            tag={Link}
            id="basketButton"
            style={buttonStyle}
    >Basket <i className="fa fa-shopping-cart"
               aria-hidden="true"
               style={iconStyle}/>
      {
        props.count > 0
        && <Badge color="success">{props.count}</Badge>
      }
    </Button>
  </Col>
);

export default BasketButton;