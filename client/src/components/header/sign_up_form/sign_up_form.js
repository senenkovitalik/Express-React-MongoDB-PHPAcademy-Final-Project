import React from 'react';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Button
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  AvForm,
  AvGroup,
  AvInput,
  AvFeedback
} from 'availity-reactstrap-validation';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleValidSubmit = this.handleValidSubmit.bind(this);
  }

  handleValidSubmit() {
    this.props.signUp();
  }

  render() {
    return (
      <Modal isOpen={this.props.modal} toggle={this.props.toggle}>
        <ModalHeader toggle={this.props.toggle}>Sign up</ModalHeader>
        <AvForm onValidSubmit={this.handleValidSubmit}>
          <ModalBody>

            <AvGroup>
              <Label for="username">Login</Label>
              <AvInput
                type="text"
                size="sm"
                id="username"
                placeholder="Login"
                name="login"
                required
                minLength="7"
                onChange={this.props.handleChange}
              />
              <AvFeedback>Login must be at least 7 symbols</AvFeedback>
            </AvGroup>
            <AvGroup>
              <Label for="email">Email</Label>
              <AvInput
                type="email"
                size="sm"
                id="email"
                placeholder="name@example.com"
                name="email"
                onChange={this.props.handleChange}
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </AvGroup>
            <AvGroup>
              <Label for="password">Password</Label>
              <AvInput
                type="password"
                size="sm"
                id="password"
                placeholder="Password"
                name="password"
                required
                minLength="7"
                onChange={this.props.handleChange}
              />
              <AvFeedback>Password must be at least 7 symbols</AvFeedback>
            </AvGroup>
            <AvGroup>
              <Label for="c_password">Confirm password</Label>
              <AvInput
                type="password"
                size="sm"
                id="c_password"
                placeholder="Confirm password"
                name="c_password"
                required
                validate={{match: {value: 'password'}}}
                onChange={this.props.handleChange}
              />
              <AvFeedback>Type same password as previously</AvFeedback>
            </AvGroup>

          </ModalBody>
          <ModalFooter>
            <AvGroup>
              <Button color="secondary" size="sm"
                      onClick={() => this.props.toggle()}>Close</Button>
              <Button color="primary" size="sm">Sign Up</Button>
            </AvGroup>

          </ModalFooter>
        </AvForm>
      </Modal>
    );
  }
}

export default SignUpForm;