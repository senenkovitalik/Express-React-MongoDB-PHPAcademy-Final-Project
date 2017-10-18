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

class AddProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        name: '',
        category: '',
        model: '',
        vendor: '',
        provider: '',
        description: '',
        imgs: [],
        mainImg: '',
        price: 0
      }
    };

    this.add = this.add.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  add() {
    this.props.add(this.state.product);
  }

  handleInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      product: Object.assign(this.state.product, { [name]: value })
    });
  }

  render() {
    return (
      <Row style={{marginTop: 20+'px'}}>
        <Col sm="7">
          <h5>Add new product</h5>
          <Form>
            <FormGroup row>
              <Label for="addProductCategory" className="col-sm-2 col-form-label">Category</Label>
              <Col sm="10">
                <Input type="select" id="addProductCategory" name="category" onChange={this.handleInput}>
                  {
                    this.props.categories.map((val, i) => {
                      return <option key={i}>{val}</option>;
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
              <Col sm="12">Set of category specific fields</Col>
            </FormGroup>

            <FormGroup row>
              <Label for="addProductPhoto" className="col-sm-2 col-form-label">Photos</Label>
              <Col sm="10">
                <Input type="file" className="form-control-file" id="addProductPhoto" />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="addProductMainImg" className="col-sm-2 col-form-label">Main photo</Label>
              <Col sm="10">
                <Input type="file" className="form-control-file" id="addProductMainImg" />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="addProductPrice" className="col-sm-2 col-form-label">Price</Label>
              <Col sm="10">
                <Input type="number" id="addProductPrice" name="price" onChange={this.handleInput} />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col sm="10">
                <Button color="primary" onClick={this.add}>Save</Button>
              </Col>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default AddProductForm;