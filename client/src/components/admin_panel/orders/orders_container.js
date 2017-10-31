import React from 'react';
import Orders from "./orders";

class OrdersContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: []
    }
  }

  componentDidMount() {
    this.props.makeAJAX({
      url: '/orders',
      method: 'GET'
    }, res => {
      if (res.result) {
        this.setState({
          orders: res.orders
        })
      }
    });
  }

  render() {
    return <Orders orders={this.state.orders} />
  }
}

export default OrdersContainer;