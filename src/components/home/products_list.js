import React from 'react';
import ProductItem from './product_item.jsx';
import _ from 'lodash';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'reactstrap';

class ProductsList extends React.Component {

  render() {

    const prodItems = this.props.products.map((product, index) => {
      return <ProductItem
        key={index}
        product={product}
        add={this.props.add}
        inBasket={_.indexOf(this.props.productsToBuy, product) === -1 ? false : true}
      />;
    });

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