import React from 'react';
import {
  Button
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const OrderItem = (props) => {

  const products = props.order.products.map((p, i) => {
    return <div key={i}>{p.product.name} {p.product.model}, {p.count}, ${p.product.price * p.count}</div>
  });

  const total = props.order.products.reduce((total, current) => {
    return total + current.product.price * current.count;
  }, 0);

  const statusColor = {
    pending: 'table-danger',
    in_process: 'table-info',
    delivering: 'table-primary',
    completed: 'table-success',
    canceled: 'table-secondary'
  };

  return (
    <tr>
      <th scope="row">{props.index}</th>
      <td>{props.order._id.substr(-6)}</td>
      <td>{ new Date(props.order.date).toLocaleString(  ) }</td>
      <td>
        <div>{props.order.name}</div>
        <div>{props.order.phone}</div>
      </td>
      <td>
        { products }
      </td>
      <td>{props.order.delivery}</td>
      <td>{props.order.address}</td>
      <td>${total}</td>
      <td className={statusColor[props.order.status]}>
        <select value={props.order.status} onChange={(e) => props.changeStatus(e, props.order)}>
          <option value="pending">Pending</option>
          <option value="in_process">In process</option>
          <option value="delivering">Delivering</option>
          <option value="completed">Completed</option>
          <option value="canceled">Canceled</option>
        </select>
      </td>
      <td>
        {/*<Button color="info" size="sm" outline title="Change order"*/}
                {/*onClick={() => props.handleChange(props.order)}>*/}
          {/*<i className="fa fa-pencil" aria-hidden="true"></i>*/}
        {/*</Button>*/}
        <Button color="danger" size="sm" outline title="Delete order"
                onClick={() => props.handleRemove(props.order)}>
          <i className="fa fa-trash-o" aria-hidden="true"></i>
        </Button>
      </td>
    </tr>
  )
};

export default OrderItem;