import React from 'react';
import Users from './users';
import _ from 'lodash';

class UserContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      userToChange: null
    };

    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
    this.chooseToChange = this.chooseToChange.bind(this);
    this.change = this.change.bind(this);
  }

  componentDidMount() {
    this.props.makeAJAX({
      method: 'GET',
      url: '/users/all'
    }, res => {
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

  chooseToChange(userObj) {
    this.setState({
      userToChange: userObj
    })
  }

  change(userObj) {
    this.props.makeAJAX({
      url: '/users',
      method: 'PUT',
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(userObj)
    }, res => {
      if (res.result) {
        let color = 'success';
        let message = `User ${userObj.name} successfully updated.`;

        if (res.result) {
          const index = _.findIndex(this.state.users, { '_id': userObj._id });
          const users = _.fill(this.state.users, userObj, index, index + 1);

          this.setState({
            users: users,
            userToChange: null
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
        add={this.add}
        remove={this.remove}
        userToChange={this.state.userToChange}
        chooseToChange={this.chooseToChange}
        change={this.change}
      />
    );
  }
}

export default UserContainer;