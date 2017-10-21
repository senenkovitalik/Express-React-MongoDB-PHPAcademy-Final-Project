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
import PropertyField from "../categories/property_field";
import _ from 'lodash';

class AddProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.product,
      category: null,
      upload: null,
      imgs: []
    };

    this.add = this.add.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleInputProps = this.handleInputProps.bind(this);
  }

  add() {
    if (this.state.upload) {
      this.state.upload.append('product', JSON.stringify(this.state.product));
      this.props.add(this.state.upload);
      this.setState({
        upload: null
      });
    }
  }

  handleInput(e) {
    const name = e.target.name;
    const value = e.target.value;

    let obj = {};

    switch (name) {
    case 'category':
      const category = _.find(this.props.categories, { 'name': value });

      let prodProps = {};
      category.prodProps.forEach(elem => {
        prodProps[elem.name.toLowerCase()] = (elem.type === 'number') ? 0 : '';
      });

      obj.category = category;
      obj.product = Object.assign(this.state.product, { [name]: value });
      obj.product.prodProps = prodProps;
      break;
    case 'imgs':
      const fileList = e.target.files;
      let previewArr = [];
      let formData = new FormData();

      for (let i = 0; i < fileList.length; i++) {
        let item = fileList.item(i);

        if (item.size < 3000000) {
          formData.append('imgs', item);
          previewArr.push(URL.createObjectURL(item));
        }
      }

      obj.upload = formData;
      obj.imgs = previewArr;
      break;
    default:
      obj.product = Object.assign(this.state.product, { [name]: value });
    }

    this.setState(obj);
  }

  handleInputProps(e) {
    const name = e.target.name;
    const value = e.target.value;

    const newProdProps = Object.assign({}, this.state.product.prodProps, { [name]: value });
    const newProd = Object.assign({}, this.state.product, { 'prodProps': newProdProps });

    this.setState({
      product: newProd
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.categories.length > 0) {

      let prodProps = {};
      nextProps.categories[0].prodProps.forEach(elem => {
        prodProps[elem.name.toLowerCase()] = (elem.type === 'number') ? 0 : '';
      });

      this.setState({
        product: Object.assign(
          this.state.product,
          { category: nextProps.categories[0].name },
          { prodProps: prodProps }
        ),
        category: nextProps.categories[0],
      });
    }
  }

  render() {

    let prodProps = [];
    if (this.state.category !== null) {
       prodProps =  this.state.category.prodProps.map((property, i) => {
        return <PropertyField key={i} property={property} handleInput={this.handleInputProps} />
      });
    }

    return (
      <Row style={{marginTop: 20+'px'}}>
        <Col sm="7">
          <h5>Add new product</h5>
          <Form encType="multipart/form-data">
            <FormGroup row>
              <Label for="addProductCategory" className="col-sm-2 col-form-label">Category</Label>
              <Col sm="10">
                <Input type="select" id="addProductCategory" name="category" onChange={this.handleInput}>
                  {
                    this.props.categories.map((val, i) => {
                      return <option key={i}>{val.name}</option>;
                    })
                  }
                </Input>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="addProductName" className="col-sm-2 col-form-label">Name</Label>
              <Col sm="10">
                <Input type="text" id="addProductName" name="name" onChange={this.handleInput} />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="addProductModel" className="col-sm-2 col-form-label">Model</Label>
              <Col sm="10">
                <Input type="text" id="addProductModel" name="model" onChange={this.handleInput} />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="addProductVendor" className="col-sm-2 col-form-label">Vendor</Label>
              <Col sm="10">
                <Input type="text" id="addProductVendor" name="vendor" onChange={this.handleInput} />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="addProductProvider" className="col-sm-2 col-form-label">Provider</Label>
              <Col sm="10">
                <Input type="text" id="addProductProvider" name="provider" onChange={this.handleInput} />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="addProductDescription" className="col-sm-2 col-form-label">Description</Label>
              <Col sm="10">
                <Input type="textarea" rows="5" id="addProductDescription" name="description" onChange={this.handleInput} />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="addProductPhoto" className="col-sm-2 col-form-label">Photos</Label>
              <Col sm="10">
                <Input type="file" multiple id="addProductPhoto" name="imgs" style={{marginBottom: 5+'px'}} onChange={this.handleInput} />
                <div className="d-flex flex-row flex-wrap">
                {
                  this.state.imgs.map((src, i) => {
                    return  <div key={i} className="w-50">
                              <img src={src} width="100%" height="100%" />
                            </div>;
                  })
                }
                </div>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="addProductPrice" className="col-sm-2 col-form-label">Price</Label>
              <Col sm="10">
                <Input type="number" id="addProductPrice" name="price" onChange={this.handleInput} />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col sm="12"><strong>Category specific fields</strong></Col>
            </FormGroup>

            { prodProps }

            <FormGroup row>
              <Col sm="10">
                <Button color="primary" onClick={this.add} disabled={!this.state.upload}>Save</Button>
              </Col>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default AddProductForm;