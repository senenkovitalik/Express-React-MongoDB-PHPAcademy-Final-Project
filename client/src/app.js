import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';
import _ from 'lodash';
import HomeContainer from './components/home/home_container';
import Product from './components/product.js';
import OrderProcessing from './components/order_processing/order_processing.js';
import Header from "./components/header/header.js";
import ContactUs from './components/contact_us.js';
import Footer from './components/footer.jsx';
import AdminPanel from './components/admin_panel/admin_panel';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);


    this.removeProduct = this.removeProduct.bind(this);
    this.changeProdCount = this.changeProdCount.bind(this);
  }



  removeProduct(product) {
    this.setState({
      productsToBuy: _.without(this.state.productsToBuy, product)
    });
  }

  changeProdCount(obj) {
    console.log(obj);
  }

  render() {
    return (
      <Router>
        <div>
          <Header signUp={this.props.signUp}
                  login={this.props.login}
                  isLogged={this.props.isLogged}
                  logout={this.props.logout} />

          <Route
            exact path="/"
            render={(props) => (
              this.props.user && this.props.user.role === 'admin'
                ? ( <Redirect to="/admin" /> )
                : ( <HomeContainer
                    products={this.props.products}
                    prodsInBasket={this.props.prodsInBasket}
                    getProds={this.props.getProds}
                    remove={this.removeProduct}
                    changeCount={this.changeProdCount}
                    addToBasket={this.props.addToBasket} /> ))}
          />

          <Route path="/product/:name/:model" render={(props) => {
            const productToShow = _.find(this.props.products, {
              'name': props.match.params.name,
              'model': props.match.params.model
            });

            if (productToShow) {
              const inBasket = _.indexOf(this.props.prodsInBasket, productToShow) === -1 ? false : true;
              return <Product product={productToShow} add={this.props.addProduct} inBasket={inBasket}/>
            } else {
              return <Redirect to="/" />
            }
          }
          }/>

          <Route path="/order_processing"
                 render={() => <OrderProcessing productsToBuy={this.state.productsToBuy} />} />

          <Route path="/contact_us" component={ContactUs} />

          <Route path="/admin"
                 render={
                   (props) => this.props.user && this.props.user.role === 'admin'
                     ? <AdminPanel {...props} />
                     : <Redirect to="/"/> } />

          <Footer/>
        </div>
      </Router>
    )
  };
}
export default App;