import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import _ from 'lodash';
import HomeContainer from './components/home/home_container';
import Product from './components/product/product.js';
import Header from "./components/header/header.js";
import ContactUs from './components/contact_us.js';
import Footer from './components/footer.jsx';
import AdminPanel from './components/admin_panel/admin_panel';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import OrderProcessingContainer from "./components/order_processing/order_processing_container";
import BasketModal from './components/home/basket/basket_modal';
import PersonalCabinet from "./components/personal_cabinet";
import OrderStatus from './components/order_status';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.previousLocation = this.props.location;
  }

  componentWillUpdate(nextProps) {
    const { location } = this.props;
    // set previousLocation if props.location is not modal
    if (
      nextProps.history.action !== 'POP' &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location
    }
  }

  render() {
    const { location } = this.props;
    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location // not initial render
    );

    return (
        <div style={{ minHeight: 100+'vh', position: 'relative' }}>
          <Route render={(props) => <Header {...props}
                                            signUp={this.props.signUp}
                                            login={this.props.login}
                                            isLogged={this.props.isLogged}
                                            logout={this.props.logout} />} />

          <Switch location={isModal ? this.previousLocation : location}>
            <Route
              exact path="/"
              render={(props) => (
                this.props.user && this.props.user.role === 'admin'
                  ? ( <Redirect to="/admin" /> )
                  : ( <HomeContainer
                      products={this.props.products}
                      prodsInBasket={this.props.prodsInBasket}
                      getProds={this.props.getProds}
                      remove={this.props.remove}
                      changeCount={this.props.changeCount}
                      addToBasket={this.props.addToBasket} /> ))}
            />

            <Route path="/product/:name/:model" render={(props) => {
              const productToShow = _.find(this.props.products, {
                'name': props.match.params.name,
                'model': props.match.params.model
              });

              const inBasket = _.find(this.props.prodsInBasket, {
                product: {
                  'name': props.match.params.name,
                  'model': props.match.params.model
                }
              });

              if (productToShow) {
                return <Product {...props}
                                product={productToShow}
                                add={this.props.addToBasket}
                                inBasket={!!inBasket}/>
              } else {
                return <Redirect to="/" />
              }
            }
            }/>

            <Route path="/order_processing"
                   render={
                     (props) => this.props.prodsInBasket.length
                     ? <OrderProcessingContainer {...props}
                                                products={this.props.prodsInBasket}
                                                user={this.props.user}
                                                saveOrder={this.props.saveOrder} />
                     : <Redirect to="/" />
                   }
            />

            <Route path="/order_status"
                   render={(props) => <OrderStatus orderSaved={this.props.orderSaved} /> } />

            <Route path="/contact_us" component={ContactUs} />

            <Route path="/admin"
                   render={(props) => this.props.user && this.props.user.role === 'admin'
                       ? <AdminPanel {...props} />
                       : <Redirect to="/"/> }
            />

            <Route path="/personal_cabinet"
                   render={(props) => this.props.user
                     ? <PersonalCabinet user={this.props.user}
                                        changeUserData={this.props.changeUserData} />
                     : <Redirect to="/" /> } />
          </Switch>
          {isModal
            ? <Route path='/basket'
                     render={(props) =>
                        <BasketModal {...props}
                                     prodsInBasket={this.props.prodsInBasket}
                                     remove={this.props.remove}
                                     changeCount={this.props.changeCount} />
                     } />
            : null
          }

          <Footer />
        </div>
    )
  }
}
export default App;


