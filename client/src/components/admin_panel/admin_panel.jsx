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
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class AdminPanel extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row style={{paddingTop: 15+'px'}}>
          <Router>
            <div>
              <Col lg="2">
                <ListGroup>
                  <ListGroupItem tag={Link} to="/" active>Categories</ListGroupItem>
                  <ListGroupItem tag={Link} to="/products">Products</ListGroupItem>
                  <ListGroupItem tag={Link} to="/users">Users</ListGroupItem>
                  <ListGroupItem tag={Link} to="/providers">Providers</ListGroupItem>
                  <ListGroupItem tag={Link} to="/orders">Orders</ListGroupItem>
                  <ListGroupItem tag={Link} to="/statistics">Statistics</ListGroupItem>
                </ListGroup>
              </Col>
              <Col lg="10">
                <UncontrolledAlert color="primary">
                  Something happens! Maybe you add new category, change exist one or delete.
                </UncontrolledAlert>
                <Route exact path="/" render={() => <h1>Categories</h1>} />
                <Route path="/products" render={() => <h1>Products</h1>} />
                <Route path="/users" render={() => <h1>Users</h1>} />
                <Route path="/providers" render={() => <h1>Providers</h1>} />
              </Col>
            </div>
          </Router>
        </Row>
      </Container>
    );
  }
}

export default AdminPanel;