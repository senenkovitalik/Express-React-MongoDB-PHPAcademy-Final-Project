import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink
} from 'reactstrap';

import SignUpFormContainer from "./sign_up_form/sign_up_form_container";
import LoginFormContainer from "./login_form/login_form_container";

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      modal: false,
    };

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

  render() {
    return (
      <Navbar color="dark" dark expand="xl">
        <NavbarBrand href="/">GuitarShop</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/contact_us">Contact us</NavLink>
            </NavItem>
          </Nav>

          <LoginFormContainer toggleModal={this.toggleModal}
                              login={this.props.login}
                              isLogged={this.props.isLogged}
                              logout={this.props.logout} />

        </Collapse>

        <SignUpFormContainer modal={this.state.modal}
                             toggle={this.toggleModal}
                             signUp={this.props.signUp} />

    </Navbar>
    );
  }
}

export default Header;