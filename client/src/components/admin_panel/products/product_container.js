import React from 'react';
import Products from './products';
import $ from 'jquery';

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
      url: '/category/all',
    }, res => {
      this.setState({ categories: res })
    });
  }

  add(prod) {

		console.log(prod);

		$.ajax({
			cache: false,
      url: '/product',
      type: 'POST',
      data: prod,
      contentType: false, /*"multipart/form-data",*/
			dataType: 'json',
      processData: false
		})
		.done(res => {
			console.log(res);
		})
		.fail(err => {
			console.log(err);
		});
	}

	render() {
		return (
			<Products categories={this.state.categories} add={this.add} />
		);
	}
}

export default ProductContainer;