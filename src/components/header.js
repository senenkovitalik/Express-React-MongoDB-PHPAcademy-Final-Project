import React from 'react';
import {
  Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink,
  Form, Label, Input, Button
} from 'reactstrap';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
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
          <Button color="primary" className="my-2 my-sm-0">Sign up</Button>
        </Form>
      </Collapse>
      {/*<!-- Sign up Modal -->*/}
      {/*<div className="modal fade" id="signupModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">*/}
      {/*<div className="modal-dialog" role="document">*/}
      {/*<div className="modal-content">*/}
      {/*<div className="modal-header">*/}
      {/*<h5 className="modal-title" id="exampleModalLabel">Sign up</h5>*/}
      {/*<button type="button" className="close" data-dismiss="modal" aria-label="Close">*/}
      {/*<span aria-hidden="true">&times;</span>*/}
      {/*</button>*/}
      {/*</div>*/}
      {/*<div className="modal-body">*/}
      {/*<form>*/}
      {/*<div className="form-group">*/}
      {/*<label htmlFor="username">Login</label>*/}
      {/*<input type="text" className="form-control form-control-sm" id="username" placeholder="Login"/>*/}
      {/*</div>*/}
      {/*<div className="form-group">*/}
      {/*<label htmlFor="email">Email</label>*/}
      {/*<input type="email" className="form-control form-control-sm" id="email" placeholder="name@example.com"/>*/}
      {/*<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>*/}
      {/*</div>*/}
      {/*<div className="form-group">*/}
      {/*<label htmlFor="password">Password</label>*/}
      {/*<input type="password" className="form-control form-control-sm" id="password" placeholder="Password"/>*/}
      {/*</div>*/}
      {/*<div className="form-group">*/}
      {/*<label htmlFor="password">Confirm password</label>*/}
      {/*<input type="password" className="form-control form-control-sm" id="confirmPassword" placeholder="Confirm password"/>*/}
      {/*</div>*/}
      {/*</form>*/}
      {/*</div>*/}
      {/*<div className="modal-footer">*/}
      {/*<button type="button" className="btn btn-secondary btn-sm" data-dismiss="modal">Close</button>*/}
      {/*<button type="button" className="btn btn-primary btn-sm">Sign Up</button>*/}
      {/*</div>*/}
      {/*</div>*/}
      {/*</div>*/}
      {/*</div>*/}
    </Navbar>
    );
  }
}

export default Header;