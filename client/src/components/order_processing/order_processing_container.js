import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
} from 'reactstrap';
import OrderStatus from '../order_status';
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
    this.props.saveOrder(order);
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
      </Container>
    );
  }
}

export default OrderProcessingContainer;