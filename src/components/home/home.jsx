import React from 'react';
import Basket from "./basket/basket.jsx";
import Categories from "./categories.jsx";
import ProductsList from "./products_list.jsx";
import _ from 'lodash';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row" style={{marginTop: 15+'px'}}>
          <Basket products={this.props.productsToBuy} remove={this.props.remove} />
          <Categories />
          <ProductsList products={this.props.products} productsToBuy={this.props.productsToBuy} add={this.props.add} />
        </div>
      </div>
    )
  }
}

export default Home;