import React from 'react';
import CustomLink from './custom_link';
import ProductList from './prod_list';
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
      isLink: false,

      checked: true,
      courier: false,

      name: '',
      phone: '',
      delivery: '',
      address: ''
    };

    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
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

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    console.log(name, value);

    if (name === 'delivery') {
      this.setState({
        [name]: value,
        checked: !this.state.checked
      })
    } else {
      this.setState({
        [name]: value
      })
    }
  }

  render() {

    return (
      <Container>
        <Row>
          <Col xs="12">
            <h1>Order processing</h1>
          </Col>
        </Row>

        <Row>

          <ProductList products={this.props.products}
                       total={this.props.total} />

          <Col xs="12" lg="6" className="order-lg-1">
            <CustomLink isLink={this.state.isLink}
                        color={this.state.badgeColorFirst}
                        toggle={this.toggle} />

            <Collapse isOpen={this.state.isOpenFirst}>
              <Form>
                <FormGroup>
                  <Label for="orderUserName">Name and surname</Label>
                  <Input type="text" id="orderUserName"
                         placeholder="Name Surname"
                         name="name"
                         onChange={this.handleChange}
                         defaultValue={this.props.user ? this.props.user.name : ''} />
                </FormGroup>
                <FormGroup>
                  <Label for="orderUserPhone">Phone</Label>
                  <Input type="tel"
                         id="orderUserPhone"
                         name="phone"
                         onChange={this.handleChange}
                         defaultValue={this.props.user ? this.props.user.phone : ''}
                         placeholder="+XX(0XX)-XX-XX-XX"/>
                </FormGroup>
                <FormGroup>
                  <Button color="success" block onClick={this.toggle}>Next</Button>
                </FormGroup>
              </Form>
            </Collapse>

            <h4>
              <Badge pill color={this.state.badgeColorSecond}>2</Badge>
              Delivery
            </h4>

            <Collapse isOpen={this.state.isOpenSecond}>
              <Form>
                <FormGroup row>
                  <Col sm="4">
                    <Label>Delivery</Label>
                  </Col>
                  <Col xs="8">
                    <FormGroup check>
                      <Label check>
                        <Input type="radio"
                               name="delivery"
                               value="self-checkout"
                               checked={this.state.checked}
                               onChange={this.handleChange} />
                        self-checkout from our store
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input type="radio"
                               name="delivery"
                               value="courier"
                               checked={!this.state.checked}
                               onChange={this.handleChange} />
                        by courier
                      </Label>
                    </FormGroup>
                  </Col>
                </FormGroup>
                <hr className="mt-1 mb-1"/>
                <FormGroup row>
                  <Col xs="4">
                    <Label htmlFor="deliveryAddress">Address</Label>
                  </Col>
                  <Col xs="8">
                    <Input type="text" size="sm" className="mt-1"
                           id="deliveryAddress" name="address"
                           onChange={this.handleChange}
                           defaultValue={this.props.user ? this.props.user.address : ''} />
                  </Col>
                </FormGroup>
              </Form>
            </Collapse>

            <h2>Summary</h2>
            <Row className="justify-content-between">
              <Col xs="auto">{this.props.products.length} products in total</Col>
              <Col xs="auto">${this.props.total}</Col>
            </Row>
            <Row className="justify-content-between">
              <Col xs="auto">Delivery cost</Col>
              <Col xs="auto">{this.state.courier ? 'courier service' : 'free' }</Col>
            </Row>
            <hr />
            <Row className="justify-content-between">
              <Col xs="auto">To be paid</Col>
              <Col xs="auto"><strong style={{fontSize: 1.2+'rem'}}>${this.props.total}</strong></Col>
            </Row>
            <Button color="success" block className="mb-2">Confirm the order</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default OrderProcessing;