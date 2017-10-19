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

class ChangeProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.product
    };

    this.handleInput = this.handleInput.bind(this);
    this.change = this.change.bind(this);
  }

  handleInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      product: Object.assign(this.state.product, { [name]: value })
    });
  }

  change() {

  }

  render() {
    return (
      <Row style={{marginTop: 20+'px'}}>
        <Col sm="7">
          <h5>Change product: {/*this.state.product.name*/}</h5>
          <Form>
            <FormGroup row>
              <Label for="changeProductCategory" className="col-sm-2 col-form-label">Category</Label>
              <Col sm="10">
                <Input type="select" id="changeProductCategory" name="category" onChange={this.handleInput}>
                  {/*{*/}
                    {/*this.props.categories.map((val, i) => {*/}
                      {/*return <option key={i}>{val}</option>;*/}
                    {/*})*/}
                  {/*}*/}
                </Input>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="changeProductName" className="col-sm-2 col-form-label">Name</Label>
              <Col sm="10">
                <Input type="text" id="changeProductName" name="name" onChange={this.handleInput} />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="changeProductModel" className="col-sm-2 col-form-label">Model</Label>
              <Col sm="10">
                <Input type="text" id="changeProductModel" name="model" onChange={this.handleInput} />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="changeProductVendor" className="col-sm-2 col-form-label">Vendor</Label>
              <Col sm="10">
                <Input type="text" id="changeProductVendor" name="vendor" onChange={this.handleInput} />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="changeProductProvider" className="col-sm-2 col-form-label">Provider</Label>
              <Col sm="10">
                <Input type="text" id="changeProductProvider" name="provider" onChange={this.handleInput} />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="changeProductDescription" className="col-sm-2 col-form-label">Description</Label>
              <Col sm="10">
                <Input type="textarea" rows="5" id="changeProductDescription" name="description" onChange={this.handleInput} />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col sm="12">Set of category specific fields</Col>
            </FormGroup>

            <FormGroup row>
              <Label for="changeProductPhoto" className="col-sm-2 col-form-label">Photos</Label>
              <Col sm="10">
                <Input type="file" className="form-control-file" id="changeProductPhoto" />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="changeProductMainImg" className="col-sm-2 col-form-label">Main photo</Label>
              <Col sm="10">
                <Input type="file" className="form-control-file" id="changeProductMainImg" />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="changeProductPrice" className="col-sm-2 col-form-label">Price</Label>
              <Col sm="10">
                <Input type="number" id="changeProductPrice" name="price" onChange={this.handleInput} />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col sm="10">
                <Button color="primary" onClick={this.change}>Save changes</Button>
              </Col>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default ChangeProductForm;