import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';

class ProductItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.addToBasket({ product: this.props.product, count: 1 });
  }

  render() {
    return (
      <Card className="customCard">
        <CardBody>
          <CardImg top src={`/${this.props.product.imgs[0]}`} alt={this.props.product.name}/>
          <CardTitle>{this.props.product.name} {this.props.product.model}</CardTitle>
          <CardText>
            {this.props.product.description.substr(0, 100)+'...'}
            <Link to={`/product/${this.props.product.name}/${this.props.product.model}`}>Detail</Link>
          </CardText>
          <span className="productPrice">${this.props.product.price}</span>
          <Button color="success"
            onClick={this.handleClick}
            className='float-right priceButton'
            disabled={this.props.inBasket}
          >Buy</Button>
        </CardBody>
      </Card>
    );
  }
}

export default ProductItem;