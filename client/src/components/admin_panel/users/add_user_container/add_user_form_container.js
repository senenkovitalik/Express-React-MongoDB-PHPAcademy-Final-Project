import React from 'react';
import AddUserForm from './add_user_form';

class AddUserFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      login: '',
      password: '',
      c_password: '',
      role: '',
      phone: '',
      mail: '',
      address: ''
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    const name = e.target.name;
    const value = e.target.value;

    console.log(name, value);

    this.setState({
      [name]: value
    });
  }

  render() {
    return <AddUserForm handleInput={this.handleInput} />;
  }
}

export default AddUserFormContainer;