import React from 'react';
import Categories from "./categories/categories.jsx";
import ProductsList from "./products_list.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'reactstrap';
import $ from 'jquery';
import BasketContainer from "./basket/basket_container";

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }

  componentDidMount() {
    $.ajax({
      url: '/category/all',
      method: 'GET'
    })
    .done(res => {
      if (res.result) {
        console.log(res);
        this.setState({
          categories: res.categories
        });
      }
    })
    .fail(err => {
      console.log('Couldn\'t get data from server', err);
    });
  }

  render() {
    return (
      <Container fluid>
        <Row style={{marginTop: 15+'px'}}>
          <BasketContainer prodsInBasket={this.props.prodsInBasket}
                           remove={this.props.remove}
                           changeCount={this.props.changeCount}
          />
          <Categories categories={this.state.categories}
                      getProds={this.props.getProds}
          />
          <ProductsList products={this.props.products}
                        prodsInBasket={this.props.prodsInBasket}
                        addToBasket={this.props.addToBasket} />
        </Row>
      </Container>
    );
  }
}




export default HomeContainer;