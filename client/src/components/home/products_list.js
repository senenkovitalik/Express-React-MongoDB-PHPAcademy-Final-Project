import React from 'react';
import ProductItem from './product_item.jsx';
import _ from 'lodash';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'reactstrap';

class ProductsList extends React.Component {

  render() {

    let prodItems = '';
    if (this.props.products.length !== 0) {
      prodItems = this.props.products.map((product, index) => {
        const inBasket = (_.find(this.props.productsToBuy, val => val.product.name === product.name ) !== undefined) ? true : false;
        return <ProductItem
          key={index}
          product={product}
          add={this.props.add}
          inBasket={inBasket}
        />;
      });
    } else {
      prodItems = "Sorry, there are no products in this category";
    }

    return (
      <Col xs="12" md="6" lg="6" className="order-md-2">
        <Row>
          <Col sm="12" className="d-flex flex-wrap" id="products-list">

            {prodItems}

          </Col>
        </Row>
      </Col>
    );
  }
}

export default ProductsList;