import React from 'react';
import ChangeProductForm from "./change_product_form";
import _ from 'lodash';

class ChangeProductFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.product,
      categories: this.props.categories,
      category: _.find(this.props.categories, { name: this.props.product.category}),
      imgs: this.props.product.imgs,
      files: []
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleInputProp = this.handleInputProp.bind(this);
    this.removeImg = this.removeImg.bind(this);
    this.change = this.change.bind(this);
  }

  handleInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    switch (name) {
    case 'category':
      const category = _.find(this.state.categories, { 'name': value });

      let prodProps = [];
      category.prodProps.forEach(elem => {
        prodProps.push({ name: elem.name, value: '' })
      });

      this.setState({
        category: category,
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
      let imgs = [];

      for (let i = 0; i < fileList.length; i++) {
        let item = fileList.item(i);
        if (item.size < 3000000) {
          arr.push(item);
          imgs.push({
            src: URL.createObjectURL(item),
            saved: false
          });
        }
      }

      console.log(arr);

      this.setState({
        files: arr,
        imgs: _.uniqBy(_.concat(this.state.imgs, imgs), 'src')
      });
      break;
    default:  // for model, vendor, provider, description and price
      this.setState({
        product: Object.assign(
          {},
          this.state.product,
          { [name]: value }
        )
      });
    }
  }

  handleInputProp(e) {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    const prop = _.find(this.state.product.prodProps, { name: name });

    if (prop) {
      const newProp = Object.assign({}, prop, { value: value });

      const filteredArr = _.filter(this.state.product.prodProps, val => {
        return val.name !== name;
      });

      this.setState({
        product: Object.assign(
          {},
          this.state.product,
          { prodProps: _.concat(filteredArr, newProp) }
        )
      })
    }
  }

  removeImg(img) {
    console.log(_.without(this.state.imgs, img));
    this.setState({
      imgs: _.without(this.state.imgs, img)
    });
  }

  change() {
    const formData = new FormData();
    this.state.files.forEach(f => formData.append("imgs", f));
    const savedImages = _.filter(this.state.imgs, { saved: true }).map(img => img.src.slice(1));
    const prodToChange = Object.assign({}, this.state.product, { imgs: savedImages });
    formData.append("product", JSON.stringify(prodToChange));

    this.props.change(formData);
  }

  render() {
    return (<ChangeProductForm
      product={this.state.product}
      categories={this.state.categories}
      category={this.state.category}
      imgs={this.state.imgs}
      handleInput={this.handleInput}
      handleInputProp={this.handleInputProp}
      removeImg={this.removeImg}
      change={this.change}
    />);
  }
}

export default ChangeProductFormContainer;