import React from 'react';
import ProductItem from './product_item.jsx';
import _ from 'lodash';

class ProductsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const prodItems = this.props.products.map((product, index) => {
      return <ProductItem
        key={index}
        product={product}
        add={this.props.add}
        inBasket={_.indexOf(this.props.productsToBuy, product) ? false : true}
      />;
    });

    return (
      <div className="col-12 col-md-6 col-lg-8 order-md-2">
        <div className="row">
          <div className="col-sm-12 d-flex flex-wrap" id="products-list">

            {prodItems}

          </div>
        </div>
      </div>
    );
  }
}

export default ProductsList;