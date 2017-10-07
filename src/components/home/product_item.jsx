import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <div className="card customCard">
        <img className="card-img-top" src={this.props.product.mainImg} alt={this.props.product.name}/>
        <div className="card-body">
          <h3 className="card-title">{this.props.product.name}</h3>
          <p className="card-text">
            {this.props.product.shortDescription}
            <Link to={`/product/${this.props.product.name}`}>Detail</Link>
          </p>
          <span className="productPrice">{this.props.product.price}</span>
          <a
            onClick={(e) => this.handleClick(e)}
            href="#"
            className={`btn btn-success ${this.props.inBasket ? "disabled" : ""} float-right priceButton`}
          >Buy</a>
        </div>
      </div>
    );
  }
}

export default ProductItem;