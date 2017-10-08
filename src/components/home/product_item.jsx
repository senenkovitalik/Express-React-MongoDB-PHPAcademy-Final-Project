import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

class ProductItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.add(this.props.product);
  }

  render() {
    return (
      <Card className="customCard">
        <CardImg top src={`http://127.0.0.1:3030/${this.props.product.mainImg}`} alt={this.props.product.name}/>
        <CardBody>
          <CardTitle>{this.props.product.name}</CardTitle>
          <CardText>
            {this.props.product.shortDescription}
            <Link to={`/product/${this.props.product.name}`}>Detail</Link>
          </CardText>
          <span className="productPrice">{this.props.product.price}</span>
          <a
            onClick={(e) => this.handleClick(e)}
            href="#"
            className={`btn btn-success ${this.props.inBasket ? "disabled" : ""} float-right priceButton`}
          >Buy</a>
        </CardBody>
      </Card>
    );
  }
}

export default ProductItem;