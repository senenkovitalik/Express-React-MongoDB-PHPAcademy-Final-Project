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
import $ from 'jquery';
import CategoryContainer from "./categories/category_container";
import ProductContainer from "./products/product_container";
import UserContainer from "./users/user_container";
import Orders from "./orders/orders";

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
    this.makeAJAX = this.makeAJAX.bind(this);
  }

  makeAJAX(obj, cb) {
    $.ajax({
      ...obj
      //contentType: "application/json; charset=utf-8", // VERY IMPORTANT PART OF REQUEST
    })
    .done(res => {
      cb(res);
    })
    .fail(err => {
      cb(err);
      console.log(err);
    });
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
              <ListGroupItem tag={NavLink} to={`${this.props.match.url}/orders`} action>Orders</ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="10">
            {
              this.state.showFlash &&
              <UncontrolledAlert color={this.state.flash.color}>
                {this.state.flash.message}
              </UncontrolledAlert>
            }
            <Route path={`${this.props.match.url}/categories`} render={(props) => <CategoryContainer {...props} flash={this.flash} makeAJAX={this.makeAJAX} />} />
            <Route path={`${this.props.match.url}/products`} render={(props) => <ProductContainer {...props} flash={this.flash} makeAJAX={this.makeAJAX} />} />
            <Route path={`${this.props.match.url}/users`} render={(props) =>  <UserContainer {...props} flash={this.flash} makeAJAX={this.makeAJAX} /> } />
            <Route path={`${this.props.match.url}/orders`} render={() => <Orders />} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AdminPanel;