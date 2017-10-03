import React from 'react';
import ReactDom from 'react-dom';
import {
  BrowserRouter as Router,
  Route
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
          characteristics: [
            {
              header: 'Construction',
              props: [
                { name: 'Body type', value: 'Solid, Single cut' },
                { name: 'Neck joint', value: 'Sent-in' },
                { name: 'Scale', value: '24.75"' },
              ]
            },
            {
              header: 'Woods',
              props: [
                { name: 'Body', value: 'Mahogany, Maple top' },
                { name: 'Neck', value: 'Mahogany' },
                { name: 'Fretboard', value: 'Ebony' },
              ]
            },
            {
              header: 'Hardware',
              props: [
                { name: 'Bridge', value: 'Tune-o-matic' },
                { name: 'Pickup(s)', value: 'A Burstbucker 3 humbucker at the bridge, P-90H at the neck, and a piezoelectric built into the bridge' }
              ]
            },
          ],
          description: [
            'The Gibson Les Paul is a solid body electric guitar that was first sold by the Gibson Guitar Corporation in 1952.[1] The Les Paul was designed by Gibson president Ted McCarty, factory manager John Huis and their team, along with guitarist/inventor Les Paul.',
            'The Les Paul was originally offered with a gold finish and two P-90 pickups. In 1957, humbucking pickups were added, along with sunburst finishes in 1958. The sunburst 1958–1960 Les Paul – today one of the best-known electric guitar types in the world – was considered a failure, with low production and sales. For 1961, the Les Paul was redesigned into what is now known as the Gibson SG. This design continued as a separate guitar when the traditional single cutaway, carved top bodystyle was re-introduced in 1968. The Les Paul has been continually produced in countless versions and editions since. Along with Fender\'s Telecaster and Stratocaster, it was one of the first mass-produced electric solid-body guitars. Les Pauls have been used in many genres, including rock, country, pop, soul, rhythm and blues, blues, jazz, reggae, punk, and heavy metal.',
            'In 1950, the ancestors of Fender Telecaster (Fender Esquire and Fender Broadcaster) were introduced to the musical market and solid-body electric guitars became a public craze. In reaction to market demand, Gibson Guitar president Ted McCarty brought guitarist Les Paul into the company as a consultant. Les Paul was a respected innovator who had been experimenting with guitar design for years. He hand-built a solid-body prototype called "The Log", often suggested as the first solid-body Spanish guitar ever built. "The Log" was given its name from the pine block running through the middle of the guitar whose width and depth are a little more than the width of the fretboard; conventional hollow guitar sides or "wings" were added for shape. Although numerous other prototypes and limited-production solid-body models by other makers have since surfaced, it is known that in 1945–1946, Les Paul had approached Gibson with "The Log" prototype, but his solid body design was rejected.'
          ],
          shortDescription: "The Gibson Les Paul is a solid body electric guitar that was first sold by the Gibson Guitar Corporation in 1952.[1] The Les Paul was designed by Gibson president Ted McCarty, factory manager John Huis and their team, along with guitarist/inventor Les Paul.",
          imgList: ['/img/lespaul.jpg', "/img/lp1.jpg", "/img/lp2.jpg", "/img/lp3.jpg"],
          mainImg: "img/lespaul.jpg"
        },
        {
          name: "Fender Stratocaster",
          categories: "guitars",
          subcategory: "electric",
          price: "1400",
          currency: "USD",
          characteristics: [
            {
              header: 'Construction',
              props: [
                { name: 'Body type', value: 'Solid, Single cut' },
                { name: 'Neck joint', value: 'Sent-in' },
                { name: 'Scale', value: '24.75"' },
              ]
            },
            {
              header: 'Woods',
              props: [
                { name: 'Body', value: 'Mahogany, Maple top' },
                { name: 'Neck', value: 'Mahogany' },
                { name: 'Fretboard', value: 'Ebony' },
              ]
            },
            {
              header: 'Hardware',
              props: [
                { name: 'Bridge', value: 'Tune-o-matic' },
                { name: 'Pickup(s)', value: 'A Burstbucker 3 humbucker at the bridge, P-90H at the neck, and a piezoelectric built into the bridge' }
              ]
            },
          ],
          description: [
            'The Fender Stratocaster is a model of electric guitar designed in 1954 by Leo Fender, Bill Carson, George Fullerton, and Freddie Tavares. The Fender Musical Instruments Corporation has continuously manufactured the Stratocaster from 1954 to the present. It is a double-cutaway guitar, with an extended top "horn" shape for balance. Along with the Gibson Les Paul, it is one of the most-often emulated electric guitar shapes.[1][2] "Stratocaster" and "Strat" are trademark terms belonging to Fender.',
            'The Stratocaster is a versatile guitar, usable for all styles of complete music and has been used in many genres, including country, rock, pop, folk, soul, rhythm and blues, blues, jazz, punk, and heavy metal.',
            'The Fender Stratocaster was the first guitar to feature three pickups and a spring tension vibrato system, as well as being the first Fender with a contoured body.[3] The Stratocaster\'s sleek, contoured body shape (officially referred to by Fender as the "Comfort Contour Body"[4][5]) differed from the flat, slab-like design of the Telecaster. The Stratocaster\'s double cutaways allowed players easier access to higher positions on the neck.'
          ],
          shortDescription: "The Fender Stratocaster is a model of electric guitar designed in 1954 by Leo Fender, Bill Carson, George Fullerton, and Freddie Tavares. The Fender Musical Instruments Corporation has continuously manufactured the Stratocaster from 1954 to the present. It is a double-cutaway guitar, with an extended top \"horn\" shape for balance. Along with the Gibson Les Paul, it is one of the most-often emulated electric guitar shapes. \"Stratocaster\" and \"Strat\" are trademark terms belonging to Fender.",
          imgList: ['/img/fender.png', "/img/fs1.jpg", "/img/fs2.jpg", "/img/fs3.jpg"],
          mainImg: "/img/fender.png"
        },
        {
          name: "Jackhummer JH-1",
          categories: "effects",
          subcategory: "distortion",
          price: "100",
          currency: "USD",
          characteristics: [
            {
              header: 'Electric',
              props: [
                { name: 'Power', value: '9V DC Centre Negative Regulated' },
                { name: 'Current Draw', value: '13mA' },
                { name: 'Input Impedance', value: '1MΩ' },
                { name: 'Output Load Impedance', value: '< 20kΩ' },
              ]
            },
            {
              header: 'Equipment',
              props: [
                { name: 'Controls', value: 'Overdrive & Distortion Mode, Gain, Volume, Bass, Treble, Contour & Contour Frequency controls' },
                { name: 'Switches', value: 'On/Off Switch' },
                { name: 'Indicators', value: 'On/Off LED' },
                { name: 'Jacks', value: 'Input/Output ‘Jacksockets’' },
              ]
            },
            {
              header: 'Other',
              props: [
                { name: 'Dimensions', value: '120mm x 65mm x 55mm' },
                { name: 'Weight', value: '510 grammes' }
              ]
            },
          ],
          shortDescription: "The JH-1 contains our most outrageous distortion levels to date. The Contour control allows you to not only scoop out the mids, but also choose the frequencies at which the scoop occurs, allowing you to tailor your sound to your individual requirements.",
          description: [
            'For more than 50 years, the Marshall name has been synonymous with genre defining distortion tones. Initially, the way to get classic Marshall distortion was to naturally overdrive one of our valve amps by cranking it up to full volume. As time went by, Marshall Master Volume heads allowed for even more extreme levels of distortion, as the preamp valves were driven harder.',
            'The first generation of Marshall pedals simulated the various types of valve distortions in convenient, cost-effective stomp boxes. The Jackhammer is the next evolutionary step in Marshall distortion pedals.',
            'The JH-1 contains our most outrageous distortion levels to date. The Contour control allows you to not only scoop out the mids, but also choose the frequencies at which the scoop occurs, allowing you to tailor your sound to your individual requirements. Although the Jackhammer has more aggression and gain than any other Marshall pedal, we never forget our heritage, with the JH-1 producing natural and realistic tones.'
          ],
          imgList: ['/img/jackhammer.jpg', '/img/jh1.jpg', '/img/jh2.jpg', '/img/jh3.jpg'],
          mainImg: "/img/jackhammer.jpg"
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

          <Route exact path="/" render={() => <Home products={this.state.products} productsToBuy={this.state.productsToBuy} add={this.addProduct} remove={this.removeProduct} />}/>
          <Route path="/product/:name" render={(props) => {
            const productToShow = _.find(this.state.products, p => p.name ===  props.match.params.name);
            const inBasket = _.indexOf(this.props.productsToBuy, productToShow) === -1 ? false : true;
            return <Product product={productToShow} add={this.addProduct} inBasket={inBasket} />}
          }/>
          <Route path="/order_processing" render={() => <OrderProcessing productsToBuy={this.state.productsToBuy} />} />
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