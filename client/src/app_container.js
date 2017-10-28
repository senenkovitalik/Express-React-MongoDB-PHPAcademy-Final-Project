import React from 'react';
import fetch from 'isomorphic-fetch';
import App from "./app";
import $ from 'jquery';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      user: null,
      isLogged: false
    };

    this.signUp = this.signUp.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    fetch('/product/all')
    .then(res => {
      return res.json();
    })
    .then(arr => {
      this.setState({
        products: arr.products
      });
    })
    .catch(e => {
      console.log("Can't fetch data from server");
    });
  }

  signUp(userObj) {
    $.ajax({
      url: '/users/signup',
      method: 'POST',
      data: JSON.stringify(userObj),
      contentType: "application/json; charset=utf-8"
    })
    .done(res => {
      console.log(res);
      if (res.result) {
        this.setState({
          user: res.user
        });
        console.log("You successfully create account");
      } else {
        console.log(res.message);
      }
    })
    .fail(err => {
      console.log('Sorry. Some problems', err);
    });
  }

  login(loginObj) {
    $.ajax({
      url: '/users/login',
      method: 'POST',
      data: JSON.stringify(loginObj),
      contentType: "application/json; charset=utf-8"
    })
    .done(res => {
      console.log(res);
      if (res.result) {
        this.setState({
          user: res.user,
          isLogged: true
        });
        console.log("You successfully logged");
      } else {
        console.log(res.message);
      }
    })
    .fail(err => {
      console.log('Sorry. Some problems', err);
    });
  }

  logout() {
    $.ajax({
      url: '/users/logout',
      method: 'POST'
    })
    .done(res => {
      this.setState({
        user: null,
        isLogged: false
      });
      console.log("You are logged out");
    })
    .fail(err => {
      console.log(err);
    });
  }

  render() {
    return <App products={this.state.products}
                user={this.state.user}
                signUp={this.signUp}
                login={this.login}
                isLogged={this.state.isLogged}
                logout={this.logout} />;
  }
}

export default AppContainer