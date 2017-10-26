import React from 'react';
import UserItem from './user_item';
import {
  Table
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserList = (props) => {
  return  <Table>
          <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Login</th>
            <th>Password</th>
            <th>Role</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Address</th>
            <th>Control</th>
          </tr>
          </thead>
          <tbody>

          {
            props.users.map((user, i) => {
              return <UserItem key={i} index={i + 1} user={user} />;
            })
          }

          </tbody>
        </Table>;
};

export default UserList;