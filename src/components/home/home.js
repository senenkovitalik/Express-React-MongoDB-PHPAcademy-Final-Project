import React from 'react';
import Basket from "./basket/basket.js";
import Categories from "./categories/categories.jsx";
import ProductsList from "./products_list.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'reactstrap';

class Home extends React.Component {

  render() {
    return (
      <Container fluid>
        <Row style={{marginTop: 15+'px'}}>
          <Basket products={this.props.productsToBuy} remove={this.props.remove} />
          <Categories />
          <ProductsList products={this.props.products} productsToBuy={this.props.productsToBuy} add={this.props.add} />
        </Row>
      </Container>
    );
  }
}

export default Home;