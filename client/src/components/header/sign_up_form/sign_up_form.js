import React from 'react';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignUpForm = (props) => {
  return (
    <Modal isOpen={props.modal} toggle={props.toggle}>
      <ModalHeader toggle={props.toggle}>Sign up</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="username">Login</Label>
            <Input
              type="text"
              size="sm"
              id="username"
              placeholder="Login"
              name="login"
              onChange={props.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              size="sm"
              id="email"
              placeholder="name@example.com"
              name="email"
              onChange={props.handleChange}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              size="sm"
              id="password"
              placeholder="Password"
              name="password"
              onChange={props.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Confirm password</Label>
            <Input
              type="password"
              size="sm"
              id="confirmPassword"
              placeholder="Confirm password"
              name="c_password"
              onChange={props.handleChange}
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" size="sm" onClick={props.toggle}>Close</Button>
        <Button color="primary" size="sm" onClick={props.signUp}>Sign Up</Button>
      </ModalFooter>
    </Modal>
  );
};

export default SignUpForm;