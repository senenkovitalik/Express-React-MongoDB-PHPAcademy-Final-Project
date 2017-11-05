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
import CustomLink from './custom_link';
import {
  AvForm,
  AvGroup,
  AvInput,
  AvFeedback,
  AvRadio,
  AvRadioGroup
} from 'availity-reactstrap-validation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Summary from "../summary";

class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenFirst: true,
      isOpenSecond: false,
      badgeColorFirst: 'success',
      badgeColorSecond: 'dark',
      isLink: false,

      nextError: true,
      confirmError: true
    };

    this.toggle = this.toggle.bind(this);
    this.handleValidNext = this.handleValidNext.bind(this);
    this.handleInvalidNext = this.handleInvalidNext.bind(this);
    this.handleValidConfirm = this.handleValidConfirm.bind(this);
  }

  handleValidNext(event, values) {
    console.log("Valid: ", values);
    this.setState({ nextError: false });
    this.toggle();
  }

  handleInvalidNext(event, errors, values) {
    console.log("Invalid: ", errors, values);
    this.setState({ nextError: true });
  }

  handleValidConfirm(event, values) {
    if (!this.state.nextError) {
      this.props.handleConfirm();
    }
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
    const defValues = {
      delivery: this.props.checked ? 'self-checkout' : 'courier'
    };
    return (
      <div>
      <CustomLink isLink={this.state.isLink}
                  color={this.state.badgeColorFirst}
                  toggle={this.toggle} />
      <Collapse isOpen={this.state.isOpenFirst}>

        <AvForm onValidSubmit={this.handleValidNext}
                onInvalidSubmit={this.handleInvalidNext}>

          <AvGroup>
            <Label for="orderUserName">Name and surname</Label>
            <AvInput type="text"
                     id="orderUserName"
                     placeholder="Name Surname"
                     name="name"
                     required
                     minLength="5"
                     onChange={this.props.handleChange}
                     value={this.props.name}
            />
            <AvFeedback>Type your name</AvFeedback>
          </AvGroup>

          <AvGroup>
            <Label for="orderUserPhone">Phone</Label>
            <AvInput type="text"
                     id="orderUserPhone"
                     name="phone"
                     required
                     pattern="\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})"
                     onChange={this.props.handleChange}
                     value={this.props.phone}
                     placeholder="XXX-XXX-XXXX" />
            <AvFeedback>We need your phone number to contact you</AvFeedback>
          </AvGroup>

          <AvGroup>
            <Button color="success" block>Next</Button>
          </AvGroup>

        </AvForm>

      </Collapse>

      <h4>
        <Badge pill color={this.state.badgeColorSecond}>2</Badge>Delivery
      </h4>

        <AvForm model={defValues}
                onValidSubmit={this.handleValidConfirm}>

          <Collapse isOpen={this.state.isOpenSecond}>

            <AvGroup row>
              <Col sm="4">
                <Label>Delivery</Label>
              </Col>
              <Col xs="8">

                <AvRadioGroup name="delivery">
                  <AvRadio label="self-checkout from our store"
                           value="self-checkout"
                           onChange={this.props.handleChange} />
                  <FormText color="muted">Free</FormText>

                  <AvRadio label="by courier"
                           value="courier"
                           onChange={this.props.handleChange} />
                  <FormText color="muted">Check price by manager</FormText>
                </AvRadioGroup>

              </Col>
            </AvGroup>

            <hr className="mt-1 mb-1"/>

            <AvGroup row>
              <Col xs="4">
                <Label htmlFor="deliveryAddress">Address</Label>
              </Col>
              <Col xs="8">
                <AvInput type="text"
                         size="sm"
                         className="mt-1"
                         id="deliveryAddress"
                         name="address"
                         minLength="10"
                         disabled={this.props.checked}
                         required={!this.props.checked}
                         onChange={this.props.handleChange}
                         value={this.props.address} />
                <AvFeedback>Courier need to know your address</AvFeedback>
              </Col>
            </AvGroup>

          </Collapse>

          <Summary count={this.props.products.length}
                   total={this.props.total}
                   useCourier={this.state.useCourier} />

          <AvGroup>
            <Button color="success"
                    block
                    className="mb-2"
                    disabled={this.state.nextError}
            >Confirm the order</Button>
          </AvGroup>
        </AvForm>
      </div>
    );
  }
}

export default Forms;