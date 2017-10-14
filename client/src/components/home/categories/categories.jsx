import React from 'react';
import CategoryItem from './category_item';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, ListGroup } from 'reactstrap';

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          name: "Guitars",
          subcategories: [
            {
              name: 'Acoustic',
              link: '#'
            },
            {
              name: 'Electric',
              link: '#'
            },
            {
              name: 'Bass',
              link: '#'
            },
            {
              name: 'Classic',
              link: '#'
            },
          ]
        },
        {
          name: "Amps",
          subcategories: [
            {
              name: 'Transistor',
              link: '#'
            },
            {
              name: 'Lamp',
              link: '#'
            },
            {
              name: 'Hybrid',
              link: '#'
            }
          ]
        },
        {
          name: "Effects",
          subcategories: [
            {
              name: 'Distortion',
              link: '#'
            },
            {
              name: 'Delay',
              link: '#'
            },
            {
              name: 'Reverb',
              link: '#'
            }
          ]
        }
      ]
    };
  }

  render() {
    return (
      <Col xs="12" md="3" lg="2" className="order-md-1" id="categories">
        <ListGroup id="list-tab">
          {this.state.categories.map((c, index) => {
            return <CategoryItem key={index} category={c} />;
          })}
        </ListGroup>
      </Col>
    );
  }
}

export default Categories;