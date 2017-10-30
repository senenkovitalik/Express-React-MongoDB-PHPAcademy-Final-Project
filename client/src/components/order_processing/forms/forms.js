import React from 'react';
import {
  Col,
  Collapse,
  Badge,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormText
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomLink from './custom_link';

class Forms extends React.Component {
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
    return (
      <div>
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
                   onChange={this.props.handleChange}
                   value={this.props.name} />
          </FormGroup>
          <FormGroup>
            <Label for="orderUserPhone">Phone</Label>
            <Input type="tel"
                   id="orderUserPhone"
                   name="phone"
                   onChange={this.props.handleChange}
                   value={this.props.phone}
                   placeholder="+XX(0XX)-XX-XX-XX"/>
          </FormGroup>
          <FormGroup>
            <Button color="success" block onClick={this.toggle}>Next</Button>
          </FormGroup>
        </Form>
      </Collapse>

      <h4>
        <Badge pill color={this.state.badgeColorSecond}>2</Badge>Delivery
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
                         checked={this.props.checked}
                         onChange={this.props.handleChange} />
                  self-checkout from our store
                </Label>
                <FormText color="muted">Free</FormText>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio"
                         name="delivery"
                         value="courier"
                         checked={!this.props.checked}
                         onChange={this.props.handleChange} />
                  by courier
                </Label>
                <FormText color="muted">Check price by manager</FormText>
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
                     onChange={this.props.handleChange}
                     value={this.props.address} />
            </Col>
          </FormGroup>
        </Form>
      </Collapse>
      </div>
    );
  }
}




export default Forms;