import React from 'react';
import fetch from 'isomorphic-fetch';
import App from "./app";
import $ from 'jquery';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      user: null
    };

    this.signUp = this.signUp.bind(this);
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
      console.log('Sorry. Some problems');
    });
  }

  render() {
    return  <App
              products={this.state.products}
              user={this.state.user}
              signUp={this.signUp}
            />;
  }
}

export default AppContainer