import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Input, Button } from 'reactstrap';

const BasketProductItem = (props) => {
  return (
    <div className="productItem mb-2">
      <Row>
        <Col xs="6">
          <img
            className="card-img-top"
            src={`/${props.prod.product.imgs[0]}`}
            alt={props.prod.product.name}
          />
        </Col>
        <Col sx="6" className="pl-0 d-flex flex-column justify-content-between">
          <div>
            <p className="mb-0">
              <strong>{props.prod.product.name} {props.prod.product.model}</strong><br />
              <span style={{backgroundColor: '#fff3b5', padding: '6px 5px 5px'}}>
                ${props.prod.product.price}
                </span>
            </p>
          </div>

          <div className="d-flex flex-row justify-content-between">
            <div>
              <Input
                value={props.prod.count}
                onChange={e => props.changeCount(props.prod, e.target.value)}
                type="number"
                min="1"
                size="sm"
                className="d-inline"
                style={{width: 70+'px', textAlign: 'center'}}
              />
            </div>
            <div>
              <span className="align-middle">${props.prod.count * props.prod.product.price}</span>
            </div>
          </div>

          <div className="d-flex flex-row justify-content-end">
            <Button
              color="danger"
              size="sm"
              onClick={() => props.remove(props.prod)}
            ><i className="fa fa-trash-o" aria-hidden="true"></i>
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default BasketProductItem;