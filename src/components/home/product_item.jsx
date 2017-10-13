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
    this.props.add({ product: this.props.product, count: 1 });
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
          <Button color="success"
            onClick={(e) => this.handleClick(e)}
            className='float-right priceButton'
            disabled = {this.props.inBasket}
          >Buy</Button>
        </CardBody>
      </Card>
    );
  }
}

export default ProductItem;