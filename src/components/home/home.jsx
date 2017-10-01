import React from 'react';
import ProductItem from './product_item.jsx';
import Basket from "./basket/basket.jsx";
import Categories from "./categories.jsx";
import ProductsList from "./products_list.jsx";

class Home extends React.Component {
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
          imgList: ['img/jackhammer.jpg'],
          mainImg: "img/jackhammer.jpg"
        }
      ]
    }
  }

  render() {

    const productItems = this.state.products.map((product, index) => {
      return <ProductItem
        key={index}
        name={product.name}
        shortDescription={product.shortDescription}
        price={product.price}
        img={product.mainImg}
      />;
    });

    return (
      <div className="container-fluid">
        <div className="row" style={{marginTop: 15+'px'}}>
          <Basket/>
          <Categories/>
          <ProductsList prodItems={productItems} />
        </div>
      </div>
    )
  }
}

export default Home;