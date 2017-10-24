import React from 'react';
import {
  Row,
  Col,
  Button,
} from 'reactstrap';
import {
  Link
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class ListItem extends React.Component {
  constructor(props) {
    super(props);

    this.remove = this.remove.bind(this);
  }

  remove() {
    this.props.remove(this.props.product);
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
          <Button
            color="info"
            tag={Link}
            to={`${this.props.match.url}/change-product`}
            className="btn-outline-info"
            onClick={() => this.props.chooseToChange(this.props.product)}>
            <i className="fa fa-pencil" aria-hidden="true"></i>
          </Button>
          <Button
            color="danger"
            className="btn-outline-danger"
            onClick={this.remove}>
            <i className="fa fa-trash-o" aria-hidden="true"></i>
          </Button>
        </Col>
      </Row>
    )
  }
}




export default ListItem;