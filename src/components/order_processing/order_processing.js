import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from './custom_link';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Collapse, Badge, Form, FormGroup, Label, Input, Button } from 'reactstrap';

class OrderProcessing extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpenFirst: true,
      isOpenSecond: false,
      badgeColorFirst: 'success',
      badgeColorSecond: 'dark',
      isLink: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpenFirst: !this.state.isOpenFirst,
      isOpenSecond: !this.state.isOpenSecond,
      badgeColorFirst: this.state.badgeColorSecond,
      badgeColorSecond: this.state.badgeColorFirst,
      isLink: !this.state.isLink
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
          <Col xs="12" lg="6" className="order-lg-2 mb-2" style={{fontSize: 0.8+'rem'}}>
            <h4>Your order</h4>
            {products}
            <hr className="m-0"/>

            <Row className="justify-content-between mb-2">
              <Col xs="auto"><strong>Total</strong></Col>
              <Col xs="3"><strong>{total}</strong></Col>
            </Row>

            <Row className="justify-content-center">
              <Col xs="auto">
                <a href="#">Edit order</a>
              </Col>
            </Row>
          </Col>

          <Col xs="12" lg="6" className="order-lg-1">
            <CustomLink isLink={this.state.isLink} color={this.state.badgeColorFirst} toggle={this.toggle} />

            <Collapse isOpen={this.state.isOpenFirst}>
              <Form>
                <FormGroup>
                  <Label for="orderUserName">Name and surname</Label>
                  <Input type="text" id="orderUserName" defaultValue="Senenko Vitaliy"/>
                </FormGroup>
                <FormGroup>
                  <Label for="orderUserPhone">Phone</Label>
                  <Input type="tel" id="orderUserPhone" defaultValue="+38(093)-059-23-40"/>
                </FormGroup>
                <FormGroup>
                  <Button color="success" block onClick={this.toggle}>Next</Button>
                </FormGroup>
              </Form>
            </Collapse>

            <h4><Badge pill color={this.state.badgeColorSecond}>2</Badge> Type of delivery and payment</h4>

            <Collapse isOpen={this.state.isOpenSecond}>
              <Form>
                <FormGroup row>
                  <Col sm="4">
                    <Label>Delivery</Label>
                  </Col>
                  <Col xs="8">
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" name="deliveryRadio" id="deliveryRadio1" defaultValue="self-checkout" defaultChecked={true}/>
                        self-checkout from our store
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" name="deliveryRadio" id="deliveryRadio2" defaultValue="courier"/>
                        by courier
                      </Label>
                    </FormGroup>
                  </Col>
                </FormGroup>
                <hr className="mt-1 mb-1"/>
                <FormGroup row>
                  <Col xs="4">
                    <Label>Payment</Label>
                  </Col>
                  <Col xs="8">
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
                  </Col>
                </FormGroup>
                <hr className="mb-1 mt-1"/>
                <FormGroup row>
                  <Col xs="4">
                    <Label htmlFor="deliveryAddress">Address</Label>
                  </Col>
                  <Col xs="8">
                    <Input type="select" id="deliveryAddress">
                      <option>Kyiv, Brovary region, Red str., 15</option>
                      <option>add another one...</option>
                    </Input>
                    <Input type="text" size="sm" className="mt-1"/>
                    <small className="form-text text-muted">Street</small>
                    <FormGroup row>
                      <Col>
                        <Input type="text" size="sm" />
                        <small className="form-text text-muted">House</small>
                      </Col>
                      <Col>
                        <Input type="text" size="sm" />
                        <small className="form-text text-muted">Flat</small>
                      </Col>
                    </FormGroup>
                  </Col>
                </FormGroup>
              </Form>
            </Collapse>

            <h2>Summary</h2>
            <Row className="justify-content-between">
              <Col xs="auto">3 products in total</Col>
              <Col xs="auto">$2700.00</Col>
            </Row>
            <Row className="justify-content-between">
              <Col xs="auto">Delivery cost</Col>
              <Col xs="auto">free</Col>
            </Row>
            <hr />
            <Row className="justify-content-between">
              <Col xs="auto">To be paid</Col>
              <Col xs="auto"><strong style={{fontSize: 1.2+'rem'}}>$2700.00</strong></Col>
            </Row>
            <Button color="success" block className="mb-2">Confirm the order</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default OrderProcessing;