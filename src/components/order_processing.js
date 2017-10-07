import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Collapse, Badge, Form, FormGroup, Label, Input, Button } from 'reactstrap';

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
      return  <Row key={index} className="p-1">
                <Col xs="2">
                  <img src={product.mainImg} className="w-100" alt={product.name} />
                </Col>
                <Col xs="6">
                  <Link to={`/product/${product.name}`}>{product.name}</Link>
                </Col>
                <Col xs="1">1</Col>
                <Col xs="3">{product.price}</Col>
              </Row>
    });

    return (
      <Container>
        <Row>
          <Col xs="12">
            <h1>Order processing</h1>
          </Col>
        </Row>

        <Row>
          <Col sm="12" lg="6" className="order-lg-2 mb-2" style={{fontSize: 0.8+'rem'}}>
            <h4>Your order</h4>
            {products}
            <hr className="m-0"/>

            <Row className="justify-content-between mb-2">
              <Col className="col-auto"><strong>Total</strong></Col>
              <Col xs="3"><strong>{total}</strong></Col>
            </Row>

            <Row className="justify-content-center">
              <div className="col-auto">
                <a href="#">Edit order</a>
              </div>
            </Row>
          </Col>

          <Col sm="12" lg="6" className="order-lg-1">
            <h4><Badge pill color="success">1</Badge> Contacts</h4>

            <Collapse isOpen={true}>
              <Form id="user_form">
                <FormGroup>
                  <Label for="orderUserName">Name and surname</Label>
                  <Input type="text" id="orderUserName" defaultValue="Senenko Vitaliy"/>
                </FormGroup>
                <FormGroup>
                  <Label for="orderUserPhone">Phone</Label>
                  <Input type="tel" id="orderUserPhone" defaultValue="+38(093)-059-23-40"/>
                </FormGroup>
                <FormGroup>
                  <Button color="success" id="user_btn" onClick={this.handleClick}>Next</Button>
                </FormGroup>
              </Form>
            </Collapse>

            <h4><Badge pill color="dark">2</Badge> Type of delivery and payment</h4>

            <Collapse isOpen={this.state.isOpen}>
              <Form>
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
              </Form>
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
          </Col>
        </Row>
      </Container>
    );
  }
}

export default OrderProcessing;