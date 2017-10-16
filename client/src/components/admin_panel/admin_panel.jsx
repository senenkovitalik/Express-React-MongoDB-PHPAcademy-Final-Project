import React from 'react';
import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  UncontrolledAlert
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Route,
  NavLink
} from 'react-router-dom';
import Categories from "./categories/categories";

class AdminPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flash: {
        color: '',
        message: ''
      },
      showFlash: false
    };

    this.flash = this.flash.bind(this);
  }

  flash(flashObj) {
    this.setState({
      flash: {
        ...flashObj
      },
      showFlash: true
    });
  }

  render() {
    return (
      <Container fluid>
        <Row style={{paddingTop: 15+'px'}}>
          <Col lg="2">
            <ListGroup>
              <ListGroupItem tag={NavLink} to={`${this.props.match.url}/categories`} action>Categories</ListGroupItem>
              <ListGroupItem tag={NavLink} to={`${this.props.match.url}/products`} action>Products</ListGroupItem>
              <ListGroupItem tag={NavLink} to={`${this.props.match.url}/users`} action>Users</ListGroupItem>
              <ListGroupItem tag={NavLink} to={`${this.props.match.url}/providers`} action>Providers</ListGroupItem>
              <ListGroupItem tag={NavLink} to={`${this.props.match.url}/orders`} action>Orders</ListGroupItem>
              <ListGroupItem tag={NavLink} to={`${this.props.match.url}/statistics`} action>Statistics</ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="10">
            {
              this.state.showFlash &&
              <UncontrolledAlert color={this.state.flash.color}>
                {this.state.flash.message}
              </UncontrolledAlert>
            }
            <Route path={`${this.props.match.url}/categories`} render={(props) => <Categories {...props} flash={this.flash} />} />
            <Route path={`${this.props.match.url}/products`} render={() => <h1>Products</h1>} />
            <Route path={`${this.props.match.url}/users`} render={() => <h1>Users</h1>} />
            <Route path={`${this.props.match.url}/providers`} render={() => <h1>Providers</h1>} />
            <Route path={`${this.props.match.url}/orders`} render={() => <h1>Orders</h1>} />
            <Route path={`${this.props.match.url}/statistics`} render={() => <h1>Statistics</h1>} />
          </Col>
        </Row>
      </Container>
    );
  }
};

export default AdminPanel;