import React from 'react';
import LoginForm from './login_form';

class LoginFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
      disabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    }, () => this.setState({
      disabled: !(this.state.password.length > 0 && this.state.login.length > 0)
    }));
  }

  handleLogin(e) {
    e.preventDefault();

    const login = this.state.login;
    const password = this.state.password;

    this.props.login({ login: login, password: password });
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    return <LoginForm toggleModal={this.props.toggleModal}
                      handleChange={this.handleChange}
                      handleLogin={this.handleLogin}
                      handleLogout={this.handleLogout}
                      disabled={this.state.disabled}
                      isLogged={this.props.isLogged} />;
  }
}

export default LoginFormContainer;