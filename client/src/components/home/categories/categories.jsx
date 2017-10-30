import React from 'react';
import CategoryItem from './category_item';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, ListGroup } from 'reactstrap';

class Categories extends React.Component {
  render() {
    return (
      <Col xs="12" md="3" lg="2" className="order-md-1" id="categories">
        <ListGroup id="list-tab">
          {this.props.categories.map((c, index) => {
            return <CategoryItem key={index}
                                 category={c}
                                 getProds={this.props.getProds} />;
          })}
        </ListGroup>
      </Col>
    );
  }
}

export default Categories;