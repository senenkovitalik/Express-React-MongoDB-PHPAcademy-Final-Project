import React from 'react';
import {
  Table,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import OrderItem from './order_item';

class Orders extends React.Component {
  render() {
    return (
      <div>
        <h4 style={{display: 'inline-block', marginRight: 15 + 'px'}}>Orders</h4>

        <Table className="table-striped" style={{fontSize: 0.8+'rem'}}>
          <thead>
          <tr>
            <th>#</th>
            <th>Order ID</th>
            <th>DateTime</th>
            <th>User</th>
            <th>Products</th>
            <th>Delivery</th>
            <th>Address</th>
            <th>Price</th>
            <th>Status</th>
            <th>Control</th>
          </tr>
          </thead>
          <tbody>
          {
            this.props.orders.map((order, index) => {
              return <OrderItem key={index} order={order} index={index + 1} />
            })
          }
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Orders;