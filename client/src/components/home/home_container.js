import React from 'react';
import Categories from "./categories/categories.jsx";
import ProductsList from "./product_list/products_list.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'reactstrap';
import $ from 'jquery';
import ScrollToTopButton from "./scroll_to_top_button/scroll_to_top_button";
import BasketButton from "./basket/basket_button";

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
        <Row style={{marginTop: 15+'px'}} className="justify-content-between">
          <BasketButton count={this.props.prodsInBasket.length} />
          <Categories categories={this.state.categories}
                      getProds={this.props.getProds}
          />
          <ProductsList products={this.props.products}
                        prodsInBasket={this.props.prodsInBasket}
                        addToBasket={this.props.addToBasket} />

          <ScrollToTopButton scrollStepInPx="50" delayInMs="16.66" />
        </Row>
      </Container>
    );
  }
}




export default HomeContainer;