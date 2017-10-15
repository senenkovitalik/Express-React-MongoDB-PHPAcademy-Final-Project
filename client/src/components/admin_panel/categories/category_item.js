import React from 'react';
import {
  ListGroupItem,
  Collapse,
  Button
} from 'reactstrap';
import {
  Link
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class AdminCategoryItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };

    this.toggle = this.toggle.bind(this);
    this.change = this.change.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  change() {
    this.props.change(this.props.category)
  }

  render() {
    return (
      <div>
        <ListGroupItem onClick={this.toggle}>
          {this.props.category.name}
          <Collapse isOpen={this.state.isOpen}>
            <p className="mb-3">{this.props.category.description}</p>
            <Button color="info" size="sm" tag={Link} to={`${this.props.match.url}/change-category`} onClick={this.change}>Change</Button>
            <Button color="danger" size="sm">Delete</Button>
          </Collapse>
        </ListGroupItem>
      </div>
    );
  }
}

export default AdminCategoryItem;