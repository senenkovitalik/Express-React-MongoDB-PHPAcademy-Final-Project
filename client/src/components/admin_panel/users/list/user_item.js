import React from 'react';
import {
  Link
} from 'react-router-dom';
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
              <Button
                tag={Link}
                to={`${props.match.url}/change-user`}
                outline
                color="info"
                size="sm"
                title="Change user data"
                onClick={() => props.chooseToChange(props.user)}>
                <i className="fa fa-pencil" aria-hidden="true" />
              </Button>
              <Button
                color="danger"
                outline
                size="sm"
                title="Delete user"
                onClick={() => props.remove(props.user)}>
                  <i className="fa fa-trash-o" aria-hidden="true" />
              </Button>
            </td>
          </tr>;
};

export default UserItem;