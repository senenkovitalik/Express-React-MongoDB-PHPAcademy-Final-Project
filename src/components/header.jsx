import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
        <Link to="/" className="navbar-brand">GuitarShop</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className={(window.location.pathname == "/") ? "nav-item active" : "nav-item"}>
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className={(window.location.pathname == "/contact_us") ? "nav-item active" : "nav-item"}>
              <Link to="/contact_us" className="nav-link">Contact us</Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0 flex-wrap">
            <label htmlFor="login" style={{color: 'white', marginRight: 10+'px'}}>Login</label>
            <input id="login" className="form-control mr-sm-2" type="text" placeholder="Login, email or phone number" aria-label="Login"/>
            <label htmlFor="passwr" style={{color: 'white', marginRight: 10+'px'}}>Password</label>
            <input id="passwr" className="form-control mr-sm-2" type="password" placeholder="Password" aria-label="Password"/>
            <button className="btn btn-success my-2 my-sm-0" style={{marginRight: 10+'px'}} type="button">Log in</button>
            <button className="btn btn-primary my-2 my-sm-0" data-toggle="modal" data-target="#signupModal" type="button">Sign up
            </button>
          </form>
          {/*<!-- Sign up Modal -->*/}
          <div className="modal fade" id="signupModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Sign up</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="form-group">
                      <label htmlFor="username">Login</label>
                      <input type="text" className="form-control form-control-sm" id="username" placeholder="Login"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input type="email" className="form-control form-control-sm" id="email" placeholder="name@example.com"/>
                      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input type="password" className="form-control form-control-sm" id="password" placeholder="Password"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Confirm password</label>
                      <input type="password" className="form-control form-control-sm" id="confirmPassword" placeholder="Confirm password"/>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary btn-sm" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary btn-sm">Sign Up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;