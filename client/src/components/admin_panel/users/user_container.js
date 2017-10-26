import React from 'react';
import Users from './users';
import _ from 'lodash';

class UserContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };

    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
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

  add(userObj) {
    this.props.makeAJAX({
      url: '/users',
      method: 'POST',
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(userObj)
    }, res => {
      if (res.result) {
          let color = 'success';
          let message = `User ${userObj.name} successfully added.`;

          if (res.result) {
              this.setState({
                  users: _.concat(this.state.users, res.user)
              });
          } else {
              color = 'warning';
              message = `Sorry. Server problems.`;
          }

          this.props.flash({
              color: color,
              message: message
          });
      }
    })
  }

  remove(userObj) {
    this.props.makeAJAX({
      url: `/users/${userObj._id}`,
      method: 'DELETE',
    }, res => {
      if (res.result) {
        let color = 'success';
        let message = `User ${userObj.name} successfully removed.`;

        if (res.result) {
          this.setState({
              users: _.without(this.state.users, userObj)
          });
        } else {
          color = 'warning';
          message = `Sorry. Server problems.`;
        }

        this.props.flash({
          color: color,
          message: message
        });
      }
    })
  }

  render() {
    return (
      <Users
        {...this.props}
        users={this.state.users}
        makeAJAX={this.props.makeAJAX}
        add={this.add}
        remove={this.remove}
      />
    );
  }
}

export default UserContainer;