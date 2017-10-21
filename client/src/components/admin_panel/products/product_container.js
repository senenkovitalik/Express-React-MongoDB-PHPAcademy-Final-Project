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
      url: '/category/all',
    }, res => {
      this.setState({ categories: res })
    });
  }

  add(prod) {

		const propObj = {
      cache: false,
      url: '/product',
      type: 'POST',
      data: prod,
      contentType: false,
      dataType: 'json',
      processData: false
    };

		this.props.makeAJAX(propObj, res => {
      let color = 'success';
      let message = `Product successfully added.`;

      if (res.result) {
        // this.setState({
        //   categories: _.concat(this.state.categories, cat)
        // });
      } else {
        color = 'warning';
        message = `Sorry. Server problems.`;
      }

      this.props.flash({
        color: color,
        message: message
      });
		});
	}

	render() {
		return (
			<Products categories={this.state.categories} add={this.add} flash={this.props.flash} />
		);
	}
}

export default ProductContainer;