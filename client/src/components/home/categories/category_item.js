import React from 'react';
import { ListGroupItem, Collapse } from 'reactstrap';

class CategoryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggle = this.toggle.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleClick(sub) {
    this.props.showProds({
      category: this.props.category.name,
      subcategory: sub
    });
  }

  render() {
    return (
      <div>
        <ListGroupItem color="success"
                       tag="a"
                       onClick={this.toggle}
        >{this.props.category.name}</ListGroupItem>

        <Collapse isOpen={this.state.isOpen}>
          {
              this.props.category.subcategories.map((item, index) => {
              return <ListGroupItem key={index}
                                    tag="a"
                                    action
                                    onClick={(e) => this.handleClick(item)}>{item}</ListGroupItem>
            })
          }
        </Collapse>
      </div>
    );
  }
}





export default CategoryItem;