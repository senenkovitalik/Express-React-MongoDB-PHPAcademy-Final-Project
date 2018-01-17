import React from 'react';
import {
  ListGroupItem,
  Collapse,
  Button,
  Table
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
    this.props.choose(this.props.category)
  }

  render() {
    return (
      <div>
        <ListGroupItem onClick={this.toggle}>
          <strong>{this.props.category.name}</strong>
          <Collapse isOpen={this.state.isOpen}>
            <p>Subcategories: {this.props.category.subcategories.join(', ')}</p>
            <p className="mb-3">{this.props.category.description}</p>
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Field name</th>
                  <th>Type</th>
                </tr>
              </thead>
              { this.props.category.prodProps.map((field, i) => {
                return  <tbody key={i}>
                          <tr>
                            <td>{i + 1}</td>
                            <td>{field.name}</td>
                            <td>{field.type}</td>
                          </tr>
                        </tbody>
              }) }
            </Table>
            <Button color="info"
                    size="sm"
                    tag={Link}
                    to={`${this.props.match.url}/change-category`}
                    onClick={this.change}>Change</Button>
            <Button color="danger"
                    size="sm"
                    onClick={() => this.props.remove(this.props.category)}>Delete</Button>
          </Collapse>
        </ListGroupItem>
      </div>
    );
  }
}

export default AdminCategoryItem;