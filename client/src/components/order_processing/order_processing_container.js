import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
} from 'reactstrap';
import OrderStatus from './order_status';
import {
  Route
} from 'react-router-dom';
import OrderProcessing from './order_processing';
import $ from 'jquery';

class OrderProcessingContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: false,
      hasCallback: false
    };

    this.saveOrder = this.saveOrder.bind(this);
  }

  saveOrder(order) {
    $.ajax({
      url: '/orders',
      method: 'POST',
      data: JSON.stringify(order),
      contentType: "application/json; charset=utf-8"
    })
    .done(res => {
      this.props.saveOrder(res.result);
      this.setState({
        hasCallback: true,
        result: res.result
      })
    })
    .fail(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <Container>
        <Route exact path={`${this.props.match.url}`}
               render={(props) =>
                <OrderProcessing {...props}
                                 saveOrder={this.saveOrder}
                                 products={this.props.products}
                                 user={this.props.user}
                                 total={ this.props.products.reduce((total, prod) => {
                                   return total + (prod.product.price * prod.count)
                                 }, 0) } />
        } />
        <Route path={`${this.props.match.url}/order_status`}
               render={(props) => <OrderStatus result={this.state.result}
                                               hasCallback={this.state.hasCallback} /> } />
      </Container>
    );
  }
}

export default OrderProcessingContainer;