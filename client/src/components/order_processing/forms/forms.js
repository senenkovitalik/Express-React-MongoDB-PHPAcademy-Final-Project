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
import {
  AvForm,
  AvGroup,
  AvInput,
  AvFeedback
} from 'availity-reactstrap-validation';

class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenFirst: true,
      isOpenSecond: false,
      badgeColorFirst: 'success',
      badgeColorSecond: 'dark',
      isLink: false,

      name: false
    };

    this.toggle = this.toggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleValidSubmit = this.handleValidSubmit.bind(this);
    this.handleInvalidSubmit = this.handleInvalidSubmit.bind(this);
  }

  handleSubmit(event, errors, values) {
    this.setState({errors, values});
    console.log("Submit: ", errors, values);
  }

  handleValidSubmit(event, values) {
    console.log("Valid: ", values);
    // this.setState({name: values.name});
  }

  handleInvalidSubmit(event, errors, values) {
    console.log("Invalid: ", errors, values);
    // this.setState({name: values.name, error: true});
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

        <AvForm onSubmit={this.handleSubmit} onValidSubmit={this.handleValidSubmit} onInvalidSubmit={this.handleInvalidSubmit}>

          <AvGroup>
            <Label for="orderUserName">Name and surname</Label>
            <AvInput type="text"
                     id="orderUserName"
                     placeholder="Name Surname"
                     name="name"
                     required
                     // onChange={this.props.handleChange}
                     // value={this.props.name}
            />
            <AvFeedback>Type your name</AvFeedback>
          </AvGroup>

          <AvGroup>
            <Label for="orderUserPhone">Phone</Label>
            <AvInput type="tel"
                     id="orderUserPhone"
                     name="phone"
                     required
                     // onChange={this.props.handleChange}
                     // value={this.props.phone}
                     placeholder="+XX(XXX)-XX-XX-XX" />
            <AvFeedback>We need your phone number to contact you</AvFeedback>
          </AvGroup>

          <AvGroup>
            <Button color="success" block
                    // onClick={this.toggle}
            >Next</Button>
          </AvGroup>

        </AvForm>

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