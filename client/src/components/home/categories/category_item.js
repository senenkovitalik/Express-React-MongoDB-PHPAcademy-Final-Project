import React from 'react';
import { ListGroupItem, Collapse } from 'reactstrap';

class CategoryItem extends React.Component {
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
        <ListGroupItem color="success" tag="a" onClick={this.toggle}>{this.props.category.name} <span className="oi oi-chevron-bottom float-right"></span></ListGroupItem>
        <Collapse isOpen={this.state.isOpen} id="listCollapseGuitar">
          {this.props.category.subcategories.map((item, index) => {
            return <ListGroupItem key={index} tag="a" href={item.link} action>{item.name}</ListGroupItem>
          })}
        </Collapse>
      </div>
    );
  }
}

export default CategoryItem;