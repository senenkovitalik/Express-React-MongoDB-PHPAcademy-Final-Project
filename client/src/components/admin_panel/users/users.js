import React from 'react';
import {
  Button
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Route,
  Link
} from 'react-router-dom';
import UserList from './user_list';
import AddUserFormContainer from "./add_user_container/add_user_form_container";
import ChangeUserFormContainer from "./change_user_container/chnage_user_form_container";

class Users extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h4 style={{display: 'inline-block', marginRight: 15+'px'}}>Users</h4>
        <Button color="primary" size="sm" tag={Link} to={`${this.props.match.url}/add-new-user`}>Add new</Button>

        {/*<!-- Users list -->*/}
        {
          this.props.users.length !== 0 && <UserList users={this.props.users} />
        }

        {/*<!-- Add new user -->*/}
        <Route path={`${this.props.match.url}/add-new-user`} render={() => <AddUserFormContainer />} />

        {/*<!-- Change user data -->*/}
        <Route path={`${this.props.match.url}/change-user`} render={() => <ChangeUserFormContainer />} />
      </div>
    );
  }
}

export default Users;