import React from 'react';
import {
  Button
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserItem = (props) => {
  return  <tr>
            <th scope="row">{props.index}</th>
            <td>{props.user.name}</td>
            <td>{props.user.login}</td>
            <td>{props.user.password}</td>
            <td>{props.user.role}</td>
            <td>{props.user.phone}</td>
            <td>{props.user.email}</td>
            <td>{props.user.address}</td>
            <td>
              <Button className="btn btn-outline-info" title="Change user data"><i className="fa fa-pencil" aria-hidden="true"></i></Button>
              <Button className="btn btn-outline-danger" title="Delete user" onClick={() => props.remove(props.user)}>
                  <i className="fa fa-trash-o" aria-hidden="true"></i>
              </Button>
            </td>
          </tr>;
};

export default UserItem;