import React from 'react';
import {
  Table,
  Button
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Orders extends React.Component {
  render() {
    return (
      <div>
        <h4 style={{display: 'inline-block', marginRight: 15 + 'px'}}>Orders</h4>

        {/*<!-- Orders list -->*/}
        <Table className="table-striped" style={{fontSize: 0.8+'rem'}}>
          <thead>
          <tr>
            <th>#</th>
            <th>DateTime</th>
            <th>User</th>
            <th>Products</th>
            <th>Type of delivery</th>
            <th>Address</th>
            <th>Price</th>
            <th>Status</th>
            <th>Control</th>
          </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>19-09-2017 12:00</td>
              <td>
                <div>Vitaliy Senenko</div>
                <div>0930592340</div>
              </td>
              <td>
                <div>Gibson Les Paul, 2, $3000 </div>
                <div>Fender Startocaster, 1, $1300</div>
              </td>
              <td>Courier</td>
              <td>Kyiv, Morozova str., 17</td>
              <td>$4300</td>
              <td className="table-danger">
                <select>
                  <option>Pending</option>
                  <option>Delivering</option>
                  <option>Completed</option>
                  <option>Canceled</option>
                </select>
              </td>
              <td>
                <Button color="info" size="sm" outline title="Change provider data"><i className="fa fa-pencil" aria-hidden="true"></i></Button>
                <Button color="danger" size="sm" outline title="Delete provider account"><i className="fa fa-trash-o" aria-hidden="true"></i></Button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>19-09-2017 15:45</td>
              <td>
                <a href="#">Anonymous</a>
              </td>
              <td>Marshal AVT 20</td>
              <td>Self-checkout</td>
              <td>-</td>
              <td>Call before delivery</td>
              <td className="table-success">Completed</td>
              <td>
                <Button color="info" outline title="Change provider data"><i className="fa fa-pencil" aria-hidden="true"></i></Button>
                <Button color="danger" outline title="Delete provider account"><i className="fa fa-trash-o" aria-hidden="true"></i></Button>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>18-09-2017 09:05</td>
              <td>
                <a href="#">Anonymous</a>
              </td>
              <td>Messa Boogie</td>
              <td>Courier</td>
              <td>Kyiv, Morozova str., 17</td>
              <td></td>
              <td>Canceled</td>
              <td>
                <Button color="info" outline title="Change provider data"><i className="fa fa-pencil" aria-hidden="true"></i></Button>
                <Button color="danger" outline title="Delete provider account"><i className="fa fa-trash-o" aria-hidden="true"></i></Button>
              </td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>18-09-2017 09:05</td>
              <td>
                <a href="#">Petro Vasechkin</a>
              </td>
              <td>Cort MX300</td>
              <td>Courier</td>
              <td>Kyiv, Morozova str., 17</td>
              <td></td>
              <td className="table-primary">Delivering</td>
              <td>
                <Button color="info" outline title="Change provider data"><i className="fa fa-pencil" aria-hidden="true"></i></Button>
                <Button color="danger" outline title="Delete provider account"><i className="fa fa-trash-o" aria-hidden="true"></i></Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Orders;