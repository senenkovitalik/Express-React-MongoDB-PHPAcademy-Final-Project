import React from 'react';
import ReactDom from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import _ from 'lodash';

import Home from './components/home/home.jsx';
import Product from './components/product.jsx';
import OrderProcessing from './components/order_processing.jsx';
import Header from "./components/header.jsx";
import ContactUs from './components/contact_us.jsx';
import Footer from './components/footer.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          name: "Gibson Les Paul",
          categories: "guitars",
          subcategory: "electric",
          price: "1500",
          currency: "USD",
          shortDescription: "The Gibson Les Paul is a solid body electric guitar that was first sold by the Gibson Guitar Corporation in 1952.[1] The Les Paul was designed by Gibson president Ted McCarty, factory manager John Huis and their team, along with guitarist/inventor Les Paul.",
          imgList: ['img/lespaul.jpg', "img/lespaul.jpg", "lp1.jpg", "lp2.jpg", "lp3.jpg"],
          mainImg: "img/lespaul.jpg"
        },
        {
          name: "Fender Stratocaster",
          categories: "guitars",
          subcategory: "electric",
          price: "1400",
          currency: "USD",
          shortDescription: "The Fender Stratocaster is a model of electric guitar designed in 1954 by Leo Fender, Bill Carson, George Fullerton, and Freddie Tavares. The Fender Musical Instruments Corporation has continuously manufactured the Stratocaster from 1954 to the present. It is a double-cutaway guitar, with an extended top \"horn\" shape for balance. Along with the Gibson Les Paul, it is one of the most-often emulated electric guitar shapes. \"Stratocaster\" and \"Strat\" are trademark terms belonging to Fender.",
          imgList: ['img/fender.jpg', "img/fs1.jpg", "img/fs2.jpg", "img/fs3.jpg"],
          mainImg: "img/fender.png"
        },
        {
          name: "Jackhummer JH-1",
          categories: "effects",
          subcategory: "distortion",
          price: "100",
          currency: "USD",
          shortDescription: "The JH-1 contains our most outrageous distortion levels to date. The Contour control allows you to not only scoop out the mids, but also choose the frequencies at which the scoop occurs, allowing you to tailor your sound to your individual requirements.",
          description: [
            'For more than 50 years, the Marshall name has been synonymous with genre defining distortion tones. Initially, the way to get classic Marshall distortion was to naturally overdrive one of our valve amps by cranking it up to full volume. As time went by, Marshall Master Volume heads allowed for even more extreme levels of distortion, as the preamp valves were driven harder.',
            'The first generation of Marshall pedals simulated the various types of valve distortions in convenient, cost-effective stomp boxes. The Jackhammer is the next evolutionary step in Marshall distortion pedals.',
            'The JH-1 contains our most outrageous distortion levels to date. The Contour control allows you to not only scoop out the mids, but also choose the frequencies at which the scoop occurs, allowing you to tailor your sound to your individual requirements. Although the Jackhammer has more aggression and gain than any other Marshall pedal, we never forget our heritage, with the JH-1 producing natural and realistic tones.'
          ],
          imgList: ['img/jackhammer.jpg'],
          mainImg: "img/jackhammer.jpg"
        }
      ],
      productsToBuy: []
    };

    this.addProduct = this.addProduct.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
  }

  addProduct(product) {
    this.setState({
      productsToBuy: _.union(this.state.productsToBuy, [product])
    });
  }

  removeProduct(product) {
    this.setState({
      productsToBuy: _.without(this.state.productsToBuy, product)
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Header/>

          <Link to="/product">Product</Link>

          <Route exact path="/" render={() => <Home products={this.state.products} productsToBuy={this.state.productsToBuy} add={this.addProduct} remove={this.removeProduct} />}/>
          <Route path="/product" render={() => <Product product={this.state.products[2]} add={this.addProduct} inBasket={_.indexOf(this.props.productsToBuy, this.state.products[2]) === -1 ? false : true} />}/>
          <Route path="/order_processing" component={OrderProcessing} />
          <Route path="/contact_us" component={ContactUs} />

          <Footer/>
        </div>
      </Router>
    )
  };
}

ReactDom.render(
  <App/>,
  document.getElementById("app")
);