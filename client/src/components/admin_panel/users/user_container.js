import React from 'react';
import Users from './users';

class UserContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    this.props.makeAJAX({
      method: 'GET',
      url: '/users/all'
    }, res => {
      console.log(res);
      this.setState({
        users: res.users
      });
    });
  }

  render() {
    return (
      <Users
        {...this.props}
        users={this.state.users}
      />
    );
  }
}

export default UserContainer;