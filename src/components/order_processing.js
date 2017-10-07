import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Collapse } from 'reactstrap';

class OrderProcessing extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      isOpen: true
    });
  }

  render() {
    let total = 0;
    const products = this.props.productsToBuy.map((product, index) => {
      total += parseInt(product.price, 10);
      return <div key={index} className="row p-1">
        <div className="col-2">
          <img src={product.mainImg} className="w-100" alt={product.name} />
        </div>
        <div className="col-6">
          <Link to={`/product/${product.name}`}>{product.name}</Link>
        </div>
        <div className="col-1">1</div>
        <div className="col-3">{product.price}</div>
      </div>
    });

    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Order processing</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 order-lg-2 col-lg-6  mb-2" style={{fontSize: 0.8+'rem'}}>
            <h4>Your order</h4>

            {products}

            <hr className="m-0"/>

            <div className="row justify-content-between mb-2">
              <div className="col-auto"><strong>Total</strong></div>
              <div className="col-3"><strong>{total}</strong></div>
            </div>

            <div className="row justify-content-center">
              <div className="col-auto">
                <a href="#">Edit order</a>
              </div>
            </div>

          </div>

          <div className="col-sm-12 order-lg-1 col-lg-6">
            <h4><span className="badge badge-pill badge-success">1</span> Contacts</h4>

            <Collapse isOpen={true}>
              <form id="user_form">
                <div className="form-group">
                  <label htmlFor="orderUserName">Name and surname</label>
                  <input type="text" className="form-control" id="orderUserName" defaultValue="Senenko Vitaliy"/>
                </div>
                <div className="form-group">
                  <label htmlFor="orderUserPhone">Phone</label>
                  <input type="tel" className="form-control" id="orderUserPhone" defaultValue="+38(093)-059-23-40"/>
                </div>
                <div className="form-group">
                  <button type="button" className="btn btn-success form-control" id="user_btn" onClick={this.handleClick}>Next</button>
                </div>
              </form>
            </Collapse>

            <h4><span className="badge badge-pill badge-dark">2</span> Type of delivery and payment</h4>

            <Collapse isOpen={this.state.isOpen}>
              <form className="collapse" id="delivery_form">
                <div className="form-row">
                  <div className="col-4">
                    <label>Delivery</label>
                  </div>
                  <div className="col-8">
                    <div className="form-check">
                      <label className="form-check-label">
                        <input className="form-check-input" type="radio" name="deliveryRadio" id="deliveryRadio1" defaultValue="self-checkout" defaultChecked={true}/>
                        self-checkout from our store
                      </label>
                    </div>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input className="form-check-input" type="radio" name="deliveryRadio" id="deliveryRadio2" defaultValue="courier"/>
                        by courier
                      </label>
                    </div>
                  </div>
                </div>
                <hr className="mt-1 mb-1"/>
                <div className="form-row">
                  <div className="col-4">
                    <label>Payment</label>
                  </div>
                  <div className="col-8">
                    <div className="form-check">
                      <label className="form-check-label">
                        <input className="form-check-input" type="radio" name="paymentRadio" id="paymentRadio1" defaultValue="cash" defaultChecked={true} />
                        cash
                      </label>
                    </div>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input className="form-check-input" type="radio" name="paymentRadio" id="paymentRadio2" defaultValue="card"/>
                        Visa/MasterCard
                      </label>
                    </div>
                  </div>
                </div>
                <hr className="mb-1 mt-1"/>
                <div className="form-row">
                  <div className="col-4"><label htmlFor="deliveryAddress">Address</label></div>
                  <div className="col-8">
                    <select className="form-control" id="deliveryAddress">
                      <option>Kyiv, Brovary region, Red str., 15</option>
                      <option>add another one...</option>
                    </select>
                    <input type="text" className="form-control form-control-sm mt-1"/>
                    <small className="form-text text-muted">Street</small>
                    <div className="form-row">
                      <div className="col">
                        <input type="text" className="form-control form-control-sm"/>
                        <small className="form-text text-muted">House</small>
                      </div>
                      <div className="col">
                        <input type="text" className="form-control form-control-sm"/>
                        <small className="form-text text-muted">Flat</small>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </Collapse>

            <h2>Summary</h2>
            <div className="row justify-content-between">
              <div className="col-auto">3 products in total</div>
              <div className="col-auto">$2700.00</div>
            </div>
            <div className="row justify-content-between">
              <div className="col-auto">Delivery cost</div>
              <div className="col-auto">free</div>
            </div>
            <hr />
            <div className="row justify-content-between">
              <div className="col-auto">To be paid</div>
              <div className="col-auto"><strong style={{fontSize: 1.2+'rem'}}>$2700.00</strong></div>
            </div>
            <button type="button" className="btn btn-success btn-block mb-2">Confirm the order</button>
          </div>
        </div>
      </div>
    );
  }
}

export default OrderProcessing;