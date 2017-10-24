import React from 'react';
import Products from './products';
import _ from 'lodash';

class ProductContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			categories: [],
      category: null,
      subcats: [],
      prodProps: [],
      files: [],

      product: {
        name: '',
        category: '',
        subcategory: '',
        model: '',
        vendor: '',
        provider: '',
        description: '',
        price: 0,
        prodProps: []
      },

      filter: {
			  category: '',
        subcategory: '',
        // name: '',
        // model: ''
      },

      filteredProducts: [],

      prodToChange: null,
		};

		this.add = this.add.bind(this);
		this.remove = this.remove.bind(this);
		this.chooseToChange = this.chooseToChange.bind(this);
		this.filter = this.filter.bind(this);
		this.handleFilter = this.handleFilter.bind(this);
		this.handleAddInput = this.handleAddInput.bind(this);
    this.handleAddInputProps = this.handleAddInputProps.bind(this);
	}

  componentDidMount() {
    this.props.makeAJAX({
      method: 'GET',
      url: '/category/all',
    }, res => {
      const prodProps = res[0].prodProps.map(elem => {
        return { name: elem.name, value: '' }
      });

      this.setState({
        categories: res,
        category: res[0],
        subcats: res[0].subcategories,
        prodProps: prodProps,
        product: Object.assign(
          {},
          this.state.product,
          {
            category: res[0].name,
            subcategory: res[0].subcategories[0],
            prodProps: prodProps
          }
        ),
        filter: Object.assign(
          {},
          this.state.filter,
          {
            category: res[0].name,
            subcategory: res[0].subcategories[0]
          }
        )
      });
    });
  }

  filter() {
	  const cat = this.state.filter.category;
	  const subcat = this.state.filter.subcategory;
	  this.props.makeAJAX({
      method: 'GET',
      url: `/product/${cat}/${subcat}`
    }, res => {
	    // console.log(res);
	    if (res.result) {
	      this.setState({
          filteredProducts: res.products
        });
      }
    });
  }

  handleFilter(e) {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
    case "category":
      const newCat = _.find(this.state.categories, { name: value });
      this.setState({
        category: newCat,
        filter: Object.assign(
          {},
          this.state.filter,
          {
            category: value,
            subcategory: newCat.subcategories[0]
          }
        )
      });
      break;
    case "subcategory":
      this.setState({
        filter: Object.assign(
          {},
          this.state.filter,
          {
            subcategory: value
          }
        )
      });
      break;
    // default:
    //   console.log(name, value);
    //   this.setState({
    //     filter: Object.assign(
    //       {},
    //       this.state.filter,
    //       {
    //         [name]: value
    //       }
    //     )
    //   });
    }
  }

  handleAddInput(e) {

    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
    case 'category':
      const category = _.find(this.state.categories, { 'name': value });

      let prodProps = [];
      category.prodProps.forEach(elem => {
        prodProps.push({ name: elem.name, value: '' })
      });

      this.setState({
        category: category,
        prodProps: prodProps,
        product: Object.assign(
          {},
          this.state.product,
          {
            category: value,
            subcategory: category.subcategories[0],
            prodProps: prodProps
          })
      });

      break;
    case 'imgs':
      const fileList = e.target.files;
      let arr = [];
      for (let i = 0; i < fileList.length; i++) {
        let item = fileList.item(i);
        if (item.size < 3000000) {
          arr.push(item);
        }
      }
      this.setState({
        files: arr
      });
      break;
    default:  // for model, vendor, provider, description and price
      this.setState({
        product: Object.assign({}, this.state.product, { [name]: value })
      });
    }
  }

  handleAddInputProps(e) {
    const name = e.target.name;
    const value = e.target.value;

    const prop = _.find(this.state.product.prodProps, { name: name });

    if (prop) {
      const newProp = Object.assign({}, prop, { value: value });

      const filteredArr = _.filter(this.state.product.prodProps, val => {
        return val.name !== name;
      });

      this.setState({
        product: Object.assign({}, this.state.product, { prodProps: _.concat(filteredArr, newProp) })
      })
    }
  }

  add() {

	  const formData = new FormData();

	  this.state.files.forEach(f => formData.append("imgs", f));

	  formData.append("product", JSON.stringify(this.state.product));

		const propObj = {
      cache: false,
      url: '/product',
      type: 'POST',
      data: formData,
      contentType: false,
      dataType: 'json',
      processData: false
    };

		this.props.makeAJAX(propObj, res => {
      let color = 'success';
      let message = `Product successfully added.`;

      if (res.result) {

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

	remove(prod) {
    this.props.makeAJAX({
      method: "DELETE",
      url: "/product",
      data: JSON.stringify(prod),
      contentType: "application/json; charset=utf-8"
    }, res => {

      this.setState({
        filteredProducts: _.without(this.state.filteredProducts, prod)
      });

      let color = 'success';
      let message = `Product successfully removed.`;

      if (res.result) {

      } else {
        color = 'warning';
        message = res.message;
      }

      this.props.flash({
        color: color,
        message: message
      });
    });
  }

  chooseToChange(prod) {
	  this.setState({
	    prodToChange: prod,
      changeProdProps: prod.prodProps
    });
  }

	render() {
		return (
			<Products {...this.props}
                categories={this.state.categories}
                category={this.state.category}
                prodProps={this.state.prodProps}
                changeProdProps={this.state.changeProdProps}
                filteredProducts={this.state.filteredProducts}
                handleFilter={this.handleFilter}
                handleAddInput={this.handleAddInput}
                handleAddInputProps={this.handleAddInputProps}
                filter={this.filter}
                remove={this.remove}
                chooseToChange={this.chooseToChange}
                prodToChange={this.state.prodToChange}
                add={this.add}
                flash={this.props.flash} />
		);
	}
}

export default ProductContainer;