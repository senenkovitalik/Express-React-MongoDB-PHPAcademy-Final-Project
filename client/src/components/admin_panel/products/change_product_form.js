import React from 'react';
import {
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropertyField from '../categories/property_field';
import _ from 'lodash';

class ChangeProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.product,
      categories: this.props.categories,
      category: this.props.category,
      imgs: this.props.product.imgs,
      // prodProps: this.props.product.prodProps,
      files: []
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleInputProps = this.handleInputProps.bind(this);
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

  handleInputProps(e) {
    const name = e.target.name;
    const value = e.target.value;

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

  change() {
    console.log("Try to change product");
  }

  render() {
    return (
      <Row style={{marginTop: 20+'px'}}>
        <Col sm="7">
          <h5>Change product: {this.state.product.name} {this.state.product.model}</h5>
          <Form>
            <FormGroup row>
              <Label for="changeProductCategory" className="col-sm-2 col-form-label">Category</Label>
              <Col sm="10">
                <Input
                  type="select"
                  id="changeProductCategory"
                  name="category"
                  value={this.state.product.category}
                  onChange={this.handleInput} >
                  {
                    this.state.categories.map((val, i) => {
                      return <option key={i} value={val.name}>{val.name}</option>;
                    })
                  }
                </Input>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="changeProductSubcategory" className="col-sm-2 col-form-label">Subcategory</Label>
              <Col sm="10">
                <Input
                  type="select"
                  id="changeProductSubcategory"
                  name="subcategory"
                  value={this.state.product.subcategory}
                  onChange={this.handleInput} >
                  {
                    this.state.category.subcategories.map((val, i) => {
                      return <option key={i} value={val}>{val}</option>;
                    })
                  }
                </Input>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="changeProductName" className="col-sm-2 col-form-label">Name</Label>
              <Col sm="10">
                <Input
                  type="text"
                  id="changeProductName"
                  name="name"
                  onChange={this.handleInput}
                  defaultValue={this.state.product.name}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="changeProductModel" className="col-sm-2 col-form-label">Model</Label>
              <Col sm="10">
                <Input
                  type="text"
                  id="changeProductModel"
                  name="model"
                  onChange={this.handleInput}
                  defaultValue={this.state.product.model}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="changeProductVendor" className="col-sm-2 col-form-label">Vendor</Label>
              <Col sm="10">
                <Input
                  type="text"
                  id="changeProductVendor"
                  name="vendor"
                  onChange={this.handleInput}
                  defaultValue={this.state.product.vendor}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="changeProductProvider" className="col-sm-2 col-form-label">Provider</Label>
              <Col sm="10">
                <Input
                  type="text"
                  id="changeProductProvider"
                  name="provider"
                  onChange={this.handleInput}
                  defaultValue={this.state.product.provider}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="changeProductDescription" className="col-sm-2 col-form-label">Description</Label>
              <Col sm="10">
                <Input
                  type="textarea"
                  rows="5"
                  id="changeProductDescription"
                  name="description"
                  onChange={this.handleInput}
                  defaultValue={this.state.product.description}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="changeProductPhoto" className="col-sm-2 col-form-label">Photos</Label>
              <Col sm="10">
                <Input type="file" multiple id="changeProductPhoto" name="imgs" style={{marginBottom: 5+'px'}} onChange={this.handleInput} />
                <div className="d-flex flex-row flex-wrap">
                  {
                    this.state.product.imgs.map((src, i) => {
                      return  <div key={i} className="w-50">
                        <img src={`/${src}`} width="100%" height="100%" />
                      </div>;
                    })
                  }
                </div>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="changeProductPrice" className="col-sm-2 col-form-label">Price</Label>
              <Col sm="10">
                <Input
                  type="number"
                  id="changeProductPrice"
                  name="price"
                  onChange={this.handleInput}
                  defaultValue={this.state.product.price}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col sm="12"><strong>Category specific fields</strong></Col>
            </FormGroup>

            {
              this.state.product.prodProps.map((property, i) => {
                return <PropertyField key={i} property={property} handleInput={this.handleInputProps} />
              })
            }

            <FormGroup row>
              <Col sm="10">
                <Button color="primary" onClick={this.change}>Save</Button>
              </Col>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default ChangeProductForm;