import React from 'react';
import {
  Container, Label, Button, Alert, Collapse, Badge
} from 'reactstrap';
import {
  AvForm,
  AvGroup,
  AvInput,
  AvFeedback
} from 'availity-reactstrap-validation';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class PersonalCabinet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updated: false,
      visible: false,
      isOpenData: false,
      isOpenOrders: false,
      orders: []
    };

    this.handleValidSubmit = this.handleValidSubmit.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
    this.toggleData = this.toggleData.bind(this);
  }

  componentDidMount() {
    $.ajax({
      url: `/orders/${this.props.user.name}`,
      method: 'GET'
    })
    .done(res => {
      if (res.result) {
        this.setState({
          orders: res.orders
        });
      }
    })
    .fail(err => {
      console.error(err);
    });
  }

  handleValidSubmit(event, values) {
    this.props.changeUserData(
      {...values},
      (res) => {
        this.setState({
          updated: res,
          visible: true
        })
      });
  }

  onDismiss() {
    this.setState({ visible: false });
  }

  toggleData(e) {
    e.preventDefault();
    this.setState({
      isOpenData: !this.state.isOpenData
    })
  }

  toggleOrders(e) {
    e.preventDefault();
    this.setState({
      isOpenOrders: !this.state.isOpenOrders
    })
  }

  render() {
    const ulStyle = {
      listStyleType: 'none',
      paddingLeft: 0
    };

    const statusColor = {
      pending: 'danger',
      in_process: 'info',
      delivering: 'primary',
      completed: 'success',
      canceled: 'secondary'
    };

    return (
      <Container style={{paddingBottom: 80+'px'}}>

        <h2>Personal cabinet</h2>

        <h3><a href="#"
               style={{ textDecoration: 'underline' }}
               onClick={(e) => {this.toggleData(e)}}
            >User data</a>
        </h3>

        <Collapse isOpen={this.state.isOpenData}>
          <AvForm onValidSubmit={this.handleValidSubmit} model={this.props.user}>

            <Alert color={this.state.updated ? 'success' : 'info'}
                   isOpen={this.state.visible}
                   toggle={this.onDismiss}>
              {
                this.state.updated
                  ? "Your data successfully changed!"
                  : "Something wrong. Please, try later."
              }
            </Alert>

            <AvGroup>
              <Label for="userName">User name</Label>
              <AvInput id="userName"
                       name="name"
                       type="text"
                       required
                       minLength="7" />
              <AvFeedback>User name must contain at least 7 symbols</AvFeedback>
            </AvGroup>

            <AvGroup>
              <Label for="userLogin">Login</Label>
              <AvInput id="userLogin"
                       name="login"
                       type="text"
                       required
                       minLength="7" />
              <AvFeedback>Login must contain at least 7 symbols</AvFeedback>
            </AvGroup>

            <AvGroup>
              <Label for="userPassword">Password</Label>
              <AvInput id="userPassword"
                       name="password"
                       type="password"
                       required
                       minLength="7" />
              <AvFeedback>User name must contain at least 7 symbols</AvFeedback>
            </AvGroup>

            <AvGroup>
              <Label for="userC_Password">Confirm password</Label>
              <AvInput id="userC_Password"
                       name="c_password"
                       type="password"
                       required
                       validate={{match:{value:'password'}}}
                       minLength="7" />
              <AvFeedback>Input same password as previously</AvFeedback>
            </AvGroup>

            <AvGroup>
              <Label for="userPhone">Phone</Label>
              <AvInput id="userPhone"
                       name="phone"
                       type="text"
                       pattern="\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})" />
              <AvFeedback>Type phone number like XXX-XXX-XXXX or without dashes</AvFeedback>
            </AvGroup>

            <AvGroup>
              <Label for="userEmail">Email</Label>
              <AvInput id="userEmail"
                       name="email"
                       type="email" />
              <AvFeedback>Email is not correct. For example: example@com.ua </AvFeedback>
            </AvGroup>

            <AvGroup>
              <Label for="userAddress">Address</Label>
              <AvInput id="userAddress"
                       name="address"
                       type="text"
                       minLength="10" />
              <AvFeedback>Your address is not correct</AvFeedback>
            </AvGroup>

            <AvGroup>
              <Button color="secondary" block tag={Link} to="/">Cancel</Button>
              <Button color="success" block>Save</Button>
            </AvGroup>

          </AvForm>
        </Collapse>

        <h3><a href="#"
               style={{ textDecoration: 'underline' }}
               onClick={(e) => {this.toggleOrders(e)}}
            >Orders</a>
        </h3>

        <Collapse isOpen={this.state.isOpenOrders}>
          <ul style={ulStyle}>
            {
              this.state.orders.map((o, i) => {
                return <li key={i}>
                  <ul style={ulStyle}>
                    <li>{i + 1}</li>
                    <li>OrderID: {o._id.substr(-6)}</li>
                    <li>Date: {new Date(o.date).toLocaleString()}</li>
                    <li>Products: {o.products.map((p, i) => {
                      return `${p.product.name} ${p.product.model}, ${p.count} = \$${p.product.price * p.count}; `
                    })}</li>
                    <li>Delivery: {o.delivery}</li>
                    {
                      o.delivery === 'courier' && <li>Address: {o.address}</li>
                    }
                    <li>Status: <Badge color={statusColor[o.status]}>{o.status}</Badge></li>
                  </ul>
                  <hr />
                </li>;
              })
            }
          </ul>
        </Collapse>

      </Container>
    )
  }
}

export default PersonalCabinet;