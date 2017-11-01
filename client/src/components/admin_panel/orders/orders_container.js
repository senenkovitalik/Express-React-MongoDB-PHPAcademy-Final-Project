import React from 'react';
import Orders from "./orders";
import _ from 'lodash';

class OrdersContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: []
    };

    this.changeStatus = this.changeStatus.bind(this);
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

  changeStatus(e, order) {
    const status = e.target.value;

    this.props.makeAJAX({
      url: `/orders/${order._id}/${status}`,
      method: 'PUT'
    }, res => {
      if (res.result) {
        const index = _.findIndex(this.state.orders, order);
        const newOrder = Object.assign({}, order, { status: status });

        this.setState({
          orders: _.fill(this.state.orders, newOrder, index, index + 1)
        })
      } else {
        this.props.flash({
          color: 'danger',
          message: 'Can\'t change order status. Please, contact your system' +
          ' administartor'
        });
      }
    });


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
                   changeStatus={this.changeStatus}
                   remove={this.remove} />
  }
}

export default OrdersContainer;