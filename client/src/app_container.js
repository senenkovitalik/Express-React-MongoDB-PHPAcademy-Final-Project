import React from 'react';
import App from "./app";
import $ from 'jquery';
import _ from 'lodash';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      prodsInBasket: [],
      user: null,
      isLogged: false
    };

    this.signUp = this.signUp.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.getProdsByCategory = this.getProdsByCategory.bind(this);
    this.addToBasket = this.addToBasket.bind(this);
    this.remove = this.remove.bind(this);
    this.changeProdCount = this.changeProdCount.bind(this);
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

  getProdsByCategory(o) {
    $.ajax({
      url: `/product/${o.category}/${o.subcategory}`,
      method: 'GET'
    })
    .done(res => {
      if (res.result) {
        this.setState({
          products: res.products
        });
      } else {
        this.setState({
          products: []
        });
      }
    })
    .fail(err => {
      console.log(err);
    });
  }

  addToBasket(prodObj) {
    this.setState({
      prodsInBasket: _.union(this.state.prodsInBasket, [prodObj])
    });
  }

  remove(product) {
    this.setState({
      prodsInBasket: _.without(this.state.prodsInBasket, product)
    });
  }

  changeProdCount(prod, count) {
    const index = _.findIndex(this.state.prodsInBasket, prod);
    const newProd = Object.assign({}, prod, { count: count === '' ? '' : parseInt(count, 10)  });
    this.setState({
      prodsInBasket: _.fill(this.state.prodsInBasket, newProd, index, index + 1)
    });
  }

  render() {
    return <App products={this.state.products}
                prodsInBasket={this.state.prodsInBasket}
                user={this.state.user}
                signUp={this.signUp}
                login={this.login}
                isLogged={this.state.isLogged}
                logout={this.logout}
                getProds={this.getProdsByCategory}
                addToBasket={this.addToBasket}
                remove={this.remove}
                changeCount={this.changeProdCount}  />;
  }
}

export default AppContainer