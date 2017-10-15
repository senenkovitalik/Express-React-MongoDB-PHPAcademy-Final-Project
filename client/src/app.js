import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';
import _ from 'lodash';
import Home from './components/home/home.js';
import Product from './components/product.js';
import OrderProcessing from './components/order_processing/order_processing.js';
import Header from "./components/header.js";
import ContactUs from './components/contact_us.js';
import Footer from './components/footer.jsx';
import AdminPanel from './components/admin_panel/admin_panel';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      productsToBuy: [],
      loggedIn: false,
      user: null
    };

    this.addProduct = this.addProduct.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
    this.changeProdCount = this.changeProdCount.bind(this);
    this.logging = this.logging.bind(this);
  }

  addProduct(prodObj) {
    this.setState({
      productsToBuy: _.union(this.state.productsToBuy, [prodObj])
    });
  }

  removeProduct(product) {
    this.setState({
      productsToBuy: _.without(this.state.productsToBuy, product)
    });
  }

  changeProdCount(obj) {
    console.log(obj);
  }

  logging(value) {
    this.setState({
      loggedIn: value.loggedIn,
      user: value.user
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Header logging={this.logging} />

          <Route exact path="/" render={(props) => ( this.state.loggedIn && this.state.user.role === 'admin' ? ( <Redirect to="/admin" /> ) : ( <Home
                                                products={this.props.products}
                                                productsToBuy={this.state.productsToBuy}
                                                add={this.addProduct}
                                                remove={this.removeProduct}
                                                changeCount={this.changeProdCount} /> )) }/>

          <Route path="/product/:name" render={(props) => {
            const productToShow = _.find(this.props.products, p => p.name ===  props.match.params.name);
            const inBasket = _.indexOf(this.state.productsToBuy, productToShow) === -1 ? false : true;
            return <Product product={productToShow} add={this.addProduct} inBasket={inBasket} />}
          }/>

          <Route path="/order_processing" render={() => <OrderProcessing productsToBuy={this.state.productsToBuy} />} />

          <Route path="/contact_us" component={ContactUs} />

          <Route path="/admin" render={(props) => this.state.loggedIn ? <AdminPanel {...props} /> : <Redirect to="/"/> } />

          <Footer/>
        </div>
      </Router>
    )
  };
}
export default App;