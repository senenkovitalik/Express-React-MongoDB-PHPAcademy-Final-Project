import React from 'react';
import fetch from 'isomorphic-fetch';
import App from "./app";

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3030/products')
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

  render() {
    return <App products={this.state.products} />;
  }
}

export default AppContainer