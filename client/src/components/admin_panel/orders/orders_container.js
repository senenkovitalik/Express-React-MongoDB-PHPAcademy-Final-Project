import React from 'react';
import Orders from "./orders";
import _ from 'lodash';

class OrdersContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: []
    };

    this.change = this.change.bind(this);
    this.remove = this.remove.bind(this);
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

  change(order) {
    console.log(order);
  }

  remove(order) {
    this.props.makeAJAX({
      url: `/orders/${order._id}`,
      method: 'DELETE'
    }, res => {
      if (res.result) {
        this.props.flash({
          color: 'success',
          message: 'Order successfully deleted'
        });
        this.setState({
          orders: _.without(this.state.orders, order)
        })
      } else {
        this.props.flash({
          color: 'warning',
          message: 'Sorry. Some problems occurs. Please, contact your' +
          ' administrator'
        });
      }
    })
  }

  render() {
    return <Orders orders={this.state.orders}
                   change={this.change}
                   remove={this.remove} />
  }
}

export default OrdersContainer;