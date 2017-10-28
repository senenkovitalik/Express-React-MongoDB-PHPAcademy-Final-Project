import React from 'react';
import Basket from "./basket/basket.js";
import Categories from "./categories/categories.jsx";
import ProductsList from "./products_list.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'reactstrap';
import $ from 'jquery';

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      products: [],
      prodsInBasket: []
    };

    this.showProds = this.showProds.bind(this);
    this.addToBasket = this.addToBasket.bind(this);
    this.remove = this.remove.bind(this);
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
      console.log(err);
    });
  }

  showProds(o) {
    console.log(o);
    $.ajax({
      url: `/product/${o.category}/${o.subcategory}`,
      method: 'GET'
    })
    .done(res => {
      if (res.result) {
        this.setState({
          products: res.products
        });
      } else {
        this.setState({
          products: []
        });
      }
    })
    .fail(err => {
      console.log(err);
    });
  }

  addToBasket() {

  }

  remove() {

  }

  render() {
    return (
      <Container fluid>
        <Row style={{marginTop: 15+'px'}}>
          <Basket products={this.props.productsToBuy}
                  remove={this.props.remove}
                  changeCount={this.props.changeCount}
          />
          <Categories categories={this.state.categories}
                      showProds={this.showProds}
          />
          <ProductsList products={this.state.products}
                        productsToBuy={this.props.productsToBuy}
                        add={this.props.add} />
        </Row>
      </Container>
    );
  }
}

export default HomeContainer;