import React from 'react';
import {
  ListGroupItem,
  Collapse,
  Button
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class AdminCategoryItem extends React.Component {

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
      <div>
        <ListGroupItem tag="a" onClick={this.toggle}>
          {this.props.category.name}
          <Collapse isOpen={this.state.isOpen}>
            <p className="mb-3">{this.props.category.description}</p>
            <Button color="info" size="sm">Change</Button>
            <Button color="danger" size="sm">Delete</Button>
          </Collapse>
        </ListGroupItem>
      </div>
    );
  }
}

export default AdminCategoryItem;