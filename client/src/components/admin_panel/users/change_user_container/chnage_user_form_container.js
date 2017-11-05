import React from 'react';
import ChangeUserForm from './change_user_form';

class ChangeUserFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: Object.assign({}, this.props.user),
      roles: ['admin', 'user']
    };

    this.handleInput = this.handleInput.bind(this);
    this.change = this.change.bind(this);
  }

  handleInput(e) {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      user: Object.assign({}, this.state.user, { [name]: value })
    });
  }

  change() {
    this.props.change(this.state.user);
  }

  render() {
    return <ChangeUserForm user={this.state.user}
                           roles={this.state.roles}
                           handleInput={this.handleInput}
                           change={this.change} />;
  }
}

export default ChangeUserFormContainer;