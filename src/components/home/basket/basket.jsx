import React from 'react';
import BasketButton from "./basket_button.jsx";
import BasketWindow from "./basket_window.jsx";

class Basket extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-12 col-md-3 col-lg-2 order-md-3">
        <BasketButton count={this.props.products.length} />
        <BasketWindow products={this.props.products} remove={this.props.remove} />
      </div>
    );
  }
}

export default Basket;