import React from 'react';
import Basket from "./basket";

class BasketContainer extends React.Component {
  render() {
    return <Basket prodsInBasket={this.props.prodsInBasket}
                   remove={this.props.remove}
                   changeCount={this.props.changeCount} />;
  }
}

export default BasketContainer;