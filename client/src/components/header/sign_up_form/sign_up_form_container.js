import React from 'react';
import SignUpForm from './sign_up_form';

class SignUpFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      email: '',
      password: '',
      c_password: ''
    };

    this.signUp = this.signUp.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  signUp() {
    this.props.signUp(this.state);
  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <SignUpForm
        modal={this.props.modal}
        toggle={this.props.toggle}
        signUp={this.signUp}
        handleChange={this.handleChange} />
    );
  }
}

export default SignUpFormContainer;