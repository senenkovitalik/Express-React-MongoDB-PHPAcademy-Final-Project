import React from 'react';
import ProductItem from './product_item.jsx';

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
          <div className="col-12 col-md-3 col-lg-2 order-md-3">
            <button type="button" className="btn btn-lg btn-block" id="basketButton" data-toggle="modal"  data-target="#basketModal" style={{backgroundColor: '#007bff', color: '#fff'}}>
              Basket <img src="glyph-iconset-master/svg/si-glyph-trolley-2.svg" style={{width: 25 + 'px', height: 25+'px', color: '#fff'}}/>
              <span className="badge badge-success">3</span>
            </button>
            <div className="modal fade" id="basketModal" tabIndex="-1" role="dialog">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Basket</h5>
                    <button type="button" className="close" data-dismiss="modal">
                      <span>&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="productItem mb-2">
                      <div className="row">
                        <div className="col-6">
                          <img className="card-img-top" src="img/lespaul.jpg" alt="Card image"/>
                        </div>
                        <div className="col-6 pl-0 d-flex flex-column justify-content-between">
                          <div>
                            <p className="mb-0">
                              <strong>Gibson Les Paul</strong><br />
                              <span style={{backgroundColor: '#fff3b5', padding: '6px 5px 5px'}}>$100.0</span>
                            </p>
                          </div>

                          <div className="d-flex flex-row justify-content-between">
                            <div>
                              <span style={{marginRight: 5+'px'}}>&#x2B;</span>
                              <input type="number" className="form-control form-control-sm d-inline" style={{width: 50+'px', textAlign: 'center'}} defaultValue={1} />
                              <span style={{marginLeft: 5+'px'}}>&#X2D;</span>
                            </div>
                            <div><span className="align-middle">$100.0</span></div>
                          </div>

                          <div className="d-flex flex-row justify-content-end">
                            <button className="btn btn-sm btn-danger"><i className="fa fa-trash-o" aria-hidden="true"></i></button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <hr />

                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    <button type="button" className="btn btn-primary">To order</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-3 col-lg-2 order-md-1" id="categories">
            <div className="list-group" id="list-tab" role="tablist">
              <a href="#listCollapseGuitar" className="list-group-item list-group-item-success list-group-item-action" data-toggle="collapse" aria-expanded="false" aria-controls="collapseExample">Guitars <span className="oi oi-chevron-bottom float-right"></span></a>
              <div className="collapse" id="listCollapseGuitar">
                <a href="#" className="list-group-item list-group-item-action">Acoustic</a>
                <a href="#" className="list-group-item list-group-item-action">Electric</a>
                <a href="#" className="list-group-item list-group-item-action">Bass</a>
              </div>
              <a href="#listCollapseCombo" className="list-group-item list-group-item-success list-group-item-action" data-toggle="collapse" aria-expanded="false" aria-controls="collapseExample">Combos <span className="oi oi-chevron-bottom float-right"></span></a>
              <div className="collapse" id="listCollapseCombo">
                <a href="#" className="list-group-item list-group-item-action">Transistor</a>
                <a href="#" className="list-group-item list-group-item-action">Lamp</a>
                <a href="#" className="list-group-item list-group-item-action">Hybrid</a>
              </div>
              <a href="#listCollapseAmp" className="list-group-item list-group-item-success list-group-item-action" data-toggle="collapse" aria-expanded="false" aria-controls="collapseExample">Amps <span className="oi oi-chevron-bottom float-right"></span></a>
              <div className="collapse" id="listCollapseAmp">
                <a href="#" className="list-group-item list-group-item-action">Transistor</a>
                <a href="#" className="list-group-item list-group-item-action">Lamp</a>
                <a href="#" className="list-group-item list-group-item-action">Hybrid</a>
              </div>
              <a href="#" className="list-group-item list-group-item-success list-group-item-action">Cabinets</a>
              <a href="#listCollapseEffect" className="list-group-item list-group-item-success list-group-item-action" data-toggle="collapse" aria-expanded="false" aria-controls="collapseExample">Effects <span className="oi oi-chevron-bottom float-right"></span></a>
              <div className="collapse" id="listCollapseEffect">
                <a href="#" className="list-group-item list-group-item-action">Distortion</a>
                <a href="#" className="list-group-item list-group-item-action">Delay</a>
                <a href="#" className="list-group-item list-group-item-action">Reverb</a>
                <a href="#" className="list-group-item list-group-item-action">Wah-Wah</a>
                <a href="#" className="list-group-item list-group-item-action">Horus</a>
              </div>
              <a href="#listCollapseString" className="list-group-item list-group-item-success list-group-item-action" data-toggle="collapse" aria-expanded="false" aria-controls="collapseExample">Strings <span className="oi oi-chevron-bottom float-right"></span></a>
              <div className="collapse" id="listCollapseString">
                <a href="#" className="list-group-item list-group-item-action">Distortion</a>
                <a href="#" className="list-group-item list-group-item-action">Delay</a>
                <a href="#" className="list-group-item list-group-item-action">Reverb</a>
                <a href="#" className="list-group-item list-group-item-action">Wah-Wah</a>
                <a href="#" className="list-group-item list-group-item-action">Horus</a>
              </div>
              <a href="#" className="list-group-item list-group-item-success list-group-item-action">Picks</a>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-8 order-md-2">
            <div className="row">
              <div className="col-sm-12 d-flex flex-wrap" id="products-list">

                {productItems}

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;