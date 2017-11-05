import React from 'react';
import ProductItem from './product_item.jsx';
import _ from 'lodash';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'reactstrap';

const ProductsList = (props) => {
  return (
    <Col xs="12" md="6" lg="8" className="order-md-2">
      <Row>
        <Col sm="12" className="d-flex flex-wrap" id="products-list">

          {
            props.products.map((product, index) => {
              const inBasket = _.find(props.prodsInBasket, { product: { name: product.name, model: product.model } } ) !== undefined;
              return <ProductItem
                key={index}
                product={product}
                addToBasket={props.addToBasket}
                inBasket={inBasket}
              />;
            })
          }

        </Col>
      </Row>
    </Col>
  );
};

export default ProductsList;