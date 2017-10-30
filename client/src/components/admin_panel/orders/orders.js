import React from 'react';

class Orders extends React.Component {
  render() {
    return (
      <div>
        <h4 style="display: inline-block; margin-right: 15px;">Orders</h4>

        {/*<!-- Orders list -->*/}
        <table class="table table-striped">
          <thead>
          <tr>
            <th>#</th>
            <th>DateTime</th>
            <th>User</th>
            <th>Products</th>
            <th>Type of delivery</th>
            <th>Address</th>
            <th>Detail</th>
            <th>Status</th>
            <th>Control</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th scope="row">1</th>
            <td>19-09-2017 12:00</td>
            <td>
              <a href="#">Vitaliy Senenko</a>
            </td>
            <td>Gibson Les Paul, Fender Startocaster</td>
            <td>Courier</td>
            <td>Kyiv, Morozova str., 17</td>
            <td></td>
            <td class="table-danger">Pending</td>
            <td>
              <button type="button" class="btn btn-outline-info" title="Change provider data"><span class="oi oi-pencil"></span></button>
              <button type="button" class="btn btn-outline-danger" title="Delete provider account"><span class="oi oi-trash"></span></button>
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
            <td class="table-success">Completed</td>
            <td>
              <button type="button" class="btn btn-outline-info" title="Change provider data"><span class="oi oi-pencil"></span></button>
              <button type="button" class="btn btn-outline-danger" title="Delete provider account"><span class="oi oi-trash"></span></button>
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
              <button type="button" class="btn btn-outline-info" title="Change provider data"><span class="oi oi-pencil"></span></button>
              <button type="button" class="btn btn-outline-danger" title="Delete provider account"><span class="oi oi-trash"></span></button>
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
            <td class="table-primary">Delivering</td>
            <td>
              <button type="button" class="btn btn-outline-info" title="Change provider data"><span class="oi oi-pencil"></span></button>
              <button type="button" class="btn btn-outline-danger" title="Delete provider account"><span class="oi oi-trash"></span></button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Orders;