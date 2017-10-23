import React from 'react';
import {
  Row,
  Col,
  Button
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class ListItem extends React.Component {
  constructor(props) {
    super(props);

    this.change = this.change.bind(this);
    this.remove = this.remove.bind(this);
  }

  change() {
    console.log("Change product ", this.props.product.name);
  }

  remove() {
    console.log("Remove product ", this.props.product.name);
  }

  render() {
    return (
      <Row className="mb-1">
        <Col sm="2">
          <img src={'/' + this.props.product.imgs[0]} className="w-100" />
        </Col>
        <Col sm="8">
          <h4><strong>{this.props.product.name} {this.props.product.model}</strong></h4>
          <p>{this.props.product.description.slice(0, 200)}...</p>
        </Col>
        <Col sm="2" className="d-flex flex-row justify-content-center align-items-center">
          <Button color="info" className="btn-outline-info" onClick={this.change}><i className="fa fa-pencil" aria-hidden="true"></i></Button>
          <Button color="danger" className="btn-outline-danger" onClick={this.remove}><i className="fa fa-trash-o" aria-hidden="true"></i></Button>
        </Col>
      </Row>
    )
  }
}




export default ListItem;