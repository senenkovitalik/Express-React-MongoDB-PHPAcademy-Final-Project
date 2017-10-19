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
      url: '/categories'
    }, res => {
      this.setState({ categories: res })
    });
  }

  add(prod) {
		console.log(prod);
	}

	render() {
		return (
			<Products categories={this.state.categories} add={this.add} />
		);
	}
}

export default ProductContainer;