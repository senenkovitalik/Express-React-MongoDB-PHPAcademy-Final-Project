import React from 'react';
import LoginForm from './login_form';

class LoginFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
      disabled: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  }

  handleLogin(e) {
    e.preventDefault();

    const login = this.state.login;
    const password = this.state.password;

    this.props.login({ login: login, password: password });
  }

  render() {
    return <LoginForm toggleModal={this.props.toggleModal}
                      handleChange={this.handleChange}
                      handleLogin={this.handleLogin} />;
  }
}

export default LoginFormContainer;