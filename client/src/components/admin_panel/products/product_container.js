import React from 'react';
import Products from './products';

class ProductContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			categories: []
		};

		this.add = this.add.bind(this);
	}

  componentDidMount() {
    this.props.makeAJAX({
      method: 'GET',
      url: '/category/all'
    }, res => {
      this.setState({ categories: res })
    });
  }

  add(prod) {

		console.log(prod);

		this.props.makeAJAX({
			url: '/product',
			method: 'POST',
			data: JSON.stringify(prod)
		}, (res) => {
			console.log(res)
		});
	}

	render() {
		return (
			<Products categories={this.state.categories} add={this.add} />
		);
	}
}

export default ProductContainer;