import React from 'react';
import AddUserForm from './add_user_form';

class AddUserFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: '',
        login: '',
        password: '',
        c_password: '',
        role: 'admin',
        phone: '',
        email: '',
        address: '',
      },
      roles: ['admin', 'user']
    };

    this.handleInput = this.handleInput.bind(this);
    this.add = this.add.bind(this);
  }

  handleInput(e) {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      user: Object.assign({}, this.state.user, { [name]: value })
    });
  }

  add() {
    this.props.add(this.state.user);
  }

  render() {
    return <AddUserForm roles={this.state.roles} handleInput={this.handleInput} add={this.add} />;
  }
}

export default AddUserFormContainer;