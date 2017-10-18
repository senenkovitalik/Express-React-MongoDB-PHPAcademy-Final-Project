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
    // this.makeAJAX({
    //   method: 'GET',
    //   url: '/categories'
    // }, res => {
    //   console.log(res);
    //   this.setState({ categories: res })
    // });
		this.setState({
			categories: ['Guitars', 'Amps', 'Combos', 'Strings', 'Effects']
		})
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