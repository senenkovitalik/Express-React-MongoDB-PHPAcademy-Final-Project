import React from 'react';

class ProductsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-12 col-md-6 col-lg-8 order-md-2">
        <div className="row">
          <div className="col-sm-12 d-flex flex-wrap" id="products-list">

            {this.props.prodItems}

          </div>
        </div>
      </div>
    );
  }
}

export default ProductsList;