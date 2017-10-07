import React from 'react';
import {
  Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      modal: false
    };

    this.toggle = this.toggle.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  toggleModal() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <Navbar color="dark" dark expand="xl">
        <NavbarBrand href="/">GuitarShop</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/" active>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact_us">Contact us</NavLink>
            </NavItem>
          </Nav>
          <Form inline className="my-2 my-lg-0 flex-wrap">
            <Label for="login" style={{color: 'white', marginRight: 10+'px'}}>Login</Label>
            <Input id="login" className="mr-sm-2" type="text" placeholder="Login, email or phone number" />
            <Label for="passwr" style={{color: 'white', marginRight: 10+'px'}}>Password</Label>
            <Input id="passwr" className="mr-sm-2" type="password" placeholder="Password" />
            <Button color="success" className="my-2 my-sm-0" style={{marginRight: 10+'px'}}>Log in</Button>
            <Button onClick={this.toggleModal} color="primary" className="my-2 my-sm-0">Sign up</Button>
          </Form>
        </Collapse>

        <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Sign up</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="username">Login</Label>
                <Input type="text" size="sm" id="username" placeholder="Login"/>
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input type="email" size="sm" id="email" placeholder="name@example.com" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input type="password" size="sm" id="password" placeholder="Password"/>
              </FormGroup>
              <FormGroup>
                <Label for="password">Confirm password</Label>
                <Input type="password" size="sm" id="confirmPassword" placeholder="Confirm password"/>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" size="sm" onClick={this.toggleModal}>Close</Button>
            <Button color="primary" size="sm">Sign Up</Button>
          </ModalFooter>
        </Modal>
    </Navbar>
    );
  }
}

export default Header;