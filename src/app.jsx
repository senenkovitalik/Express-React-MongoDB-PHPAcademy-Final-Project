import React from 'react';
import ReactDom from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './components/home/home.jsx';
import Product from './components/product.jsx';
import OrderProcessing from './components/order_processing.jsx';
import Header from "./components/header.jsx";
import ContactUs from './components/contact_us.jsx';
import Footer from './components/footer.jsx';

const App = () => (
  <Router>
    <div>
      <Header/>

      <Link to="/product">Product</Link>


      <hr />

      <Route exact path="/" component={Home}/>
      <Route path="/product" component={Product}/>
      <Route path="/order_processing" component={OrderProcessing} />
      <Route path="/contact_us" component={ContactUs} />

      <Footer/>
    </div>
  </Router>
);

ReactDom.render(
  <App/>,
  document.getElementById("app")
);