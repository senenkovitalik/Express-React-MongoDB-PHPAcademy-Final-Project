import React from 'react';
import {
  Container, Row, Col, Label, Button
} from 'reactstrap';
import {
  AvForm,
  AvGroup,
  AvInput,
  AvFeedback
} from 'availity-reactstrap-validation';
import { Link } from 'react-router-dom';

class PersonalCabinet extends React.Component {
  constructor(props) {
    super(props);

    this.handleValidSubmit = this.handleValidSubmit.bind(this);
  }

  handleValidSubmit() {
    console.log("Valid");
  }

  render() {
    return (
      <Container style={{paddingBottom: 80+'px'}}>
        <h2>Personal cabinet</h2>
        <AvForm onValidSubmit={this.handleValidSubmit} model={this.props.user}>
          <h3>User data</h3>
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
                     name="password"
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
      </Container>
    )
  }
}

export default PersonalCabinet;