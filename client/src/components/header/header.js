import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import $ from 'jquery';
import SignUpFormContainer from "./sign_up_form/sign_up_form_container";

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      modal: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleLoginButton = this.handleLoginButton.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggle(e) {
    e.preventDefault();
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  toggleModal() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleInputChange(e) {
    const name = e.target.name;
    this.setState({
      [name]: e.target.value
    });
  }

  handleLoginButton() {
    const login = this.state.login;
    const password = this.state.password;
    $.ajax({
      method: 'post',
      url: `/login/${login}/${password}`
    })
    .done(res => {
      console.log(res);
      let isLogged = false;
      let user = null;

      if (res) {
        isLogged = true;
        user = res;
      }

      this.props.logging({
        loggedIn: isLogged,
        user: user
      });
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
              <NavLink tag={Link} to="/" active>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/contact_us">Contact us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/admin">Admin</NavLink>
            </NavItem>
          </Nav>
          <Form inline className="my-2 my-lg-0 flex-wrap">
            <Label for="login" style={{color: 'white', marginRight: 10+'px'}}>Login</Label>
            <Input onChange={this.handleInputChange} name="login" id="login" className="mr-sm-2" type="text" placeholder="Login, email or phone number" />
            <Label for="passwr" style={{color: 'white', marginRight: 10+'px'}}>Password</Label>
            <Input onChange={this.handleInputChange} name="password" id="passwr" className="mr-sm-2" type="password" placeholder="Password" />
            <Button onClick={this.handleLoginButton} color="success" className="my-2 my-sm-0" style={{marginRight: 10+'px'}}>Log in</Button>
            <Button onClick={this.toggleModal} color="primary" className="my-2 my-sm-0">Sign up</Button>
          </Form>
        </Collapse>

        <SignUpFormContainer modal={this.state.modal} toggle={this.toggleModal} signUp={this.props.signUp} />

    </Navbar>
    );
  }
}

export default Header;