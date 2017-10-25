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

const ChangeProductForm = (props) => {
    return (
      <Row style={{marginTop: 20+'px'}}>
        <Col sm="7">
          <h5>Change product: {props.product.name} {props.product.model}</h5>
          <Form>
            <FormGroup row>
              <Label for="changeProductCategory" className="col-sm-2 col-form-label">Category</Label>
              <Col sm="10">
                <Input
                  type="select"
                  id="changeProductCategory"
                  name="category"
                  value={props.product.category}
                  onChange={props.handleInput} >
                  {
                    props.categories.map((val, i) => {
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
                  value={props.product.subcategory}
                  onChange={props.handleInput} >
                  {
                    props.category.subcategories.map((val, i) => {
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
                  onChange={props.handleInput}
                  defaultValue={props.product.name}
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
                  onChange={props.handleInput}
                  defaultValue={props.product.model}
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
                  onChange={props.handleInput}
                  defaultValue={props.product.vendor}
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
                  onChange={props.handleInput}
                  defaultValue={props.product.provider}
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
                  onChange={props.handleInput}
                  defaultValue={props.product.description}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="changeProductPhoto" className="col-sm-2 col-form-label">Photos</Label>
              <Col sm="10">
                <Input type="file" multiple id="changeProductPhoto" name="imgs" style={{marginBottom: 5+'px'}} onChange={props.handleInput} />
                <div className="d-flex flex-row flex-wrap">
                  {
                    props.imgs.map((img, i) => {
                      return  <div key={i} className="w-50">
                        <img src={img.src} width="100%" height="100%" onClick={() => props.removeImg(img)} />
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
                  onChange={props.handleInput}
                  defaultValue={props.product.price}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col sm="12"><strong>Category specific fields</strong></Col>
            </FormGroup>

            {
              props.product.prodProps.map((property, i) => {
                return <PropertyField key={i} property={property} handleInput={props.handleInputProp} />
              })
            }

            <FormGroup row>
              <Col sm="10">
                <Button color="primary" onClick={props.change}>Save</Button>
              </Col>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    );
};

export default ChangeProductForm;