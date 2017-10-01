import React from 'react';

class ProductItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card customCard">
        <img className="card-img-top" src={this.props.img} alt="Card image"/>
        <div className="card-body">
          <h3 className="card-title">{this.props.name}</h3>
          <p className="card-text">{this.props.shortDescription}</p>
          <span className="productPrice">{this.props.price}</span>
          <a href="#" className="btn btn-success float-right priceButton">Buy</a>
        </div>
      </div>
    );
  }
}

export default ProductItem;