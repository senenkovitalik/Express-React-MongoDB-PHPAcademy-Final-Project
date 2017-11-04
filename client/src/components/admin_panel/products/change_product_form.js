import React from 'react';
import {
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  AvForm,
  AvInput,
  AvGroup,
  AvFeedback
} from 'availity-reactstrap-validation';
import PropertyField from '../categories/property_field';

const ChangeProductForm = (props) => {
    return (
      <Row style={{marginTop: 20+'px'}}>
        <Col sm="7">
          <h5>Change product: {props.product.name} {props.product.model}</h5>
          <AvForm onValidSubmit={props.change}>
            <FormGroup row>
              <Label for="addProductCategory" className="col-sm-2 col-form-label">Category</Label>
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
              <Label for="addProductSubcategory" className="col-sm-2 col-form-label">Subcategory</Label>
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

            <AvGroup row>
              <Label for="addProductName" className="col-sm-2 col-form-label">Name</Label>
              <Col sm="10">
                <AvInput type="text" id="addProductName" name="name"
                         minLength="3"
                         onChange={props.handleInput}
                         defaultValue={props.product.name}
                         required />
                <AvFeedback>Type product name. Min 3 chars.</AvFeedback>
              </Col>
            </AvGroup>

            <AvGroup row>
              <Label for="addProductModel" className="col-sm-2 col-form-label">Model</Label>
              <Col sm="10">
                <AvInput type="text" id="addProductModel" name="model"
                         required
                         minLength="2"
                         defaultValue={props.product.model}
                         onChange={props.handleInput} />
                <AvFeedback>Type product model. Min 2 chars.</AvFeedback>
              </Col>
            </AvGroup>

            <FormGroup row>
              <Label for="addProductVendor" className="col-sm-2 col-form-label">Vendor</Label>
              <Col sm="10">
                <Input type="text" id="addProductVendor" name="vendor"
                       defaultValue={props.product.vendor}
                       onChange={props.handleInput} />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="addProductProvider" className="col-sm-2 col-form-label">Provider</Label>
              <Col sm="10">
                <Input type="text" id="addProductProvider" name="provider"
                       defaultValue={props.product.provider}
                       onChange={props.handleInput} />
              </Col>
            </FormGroup>

            <AvGroup row>
              <Label for="addProductDescription" className="col-sm-2 col-form-label">Description</Label>
              <Col sm="10">
                <AvInput type="textarea" rows="5" id="addProductDescription"
                         name="description"
                         required
                         minLength="20"
                         defaultValue={props.product.description}
                         onChange={props.handleInput} />
                <AvFeedback>Add some descriptive information about product.</AvFeedback>
              </Col>
            </AvGroup>

            <AvGroup row>
              <Label for="changeProductPhoto" className="col-sm-2 col-form-label">Photos</Label>
              <Col sm="10">
                <AvInput type="file" multiple id="changeProductPhoto"
                         name="imgs"
                         required={props.imgs.length === 0}
                         style={{marginBottom: 5+'px'}}
                         onChange={props.handleInput} />
                <AvFeedback>Must be at least 1 photo</AvFeedback>
                <div className="d-flex flex-row flex-wrap">
                  {
                    props.imgs.map((img, i) => {
                      return  <div key={i} className="w-50">
                        <img src={img.src} width="100%" height="auto"
                             onClick={() => props.removeImg(img)} />
                      </div>;
                    })
                  }
                </div>
              </Col>
            </AvGroup>

            <AvGroup row>
              <Label for="addProductPrice" className="col-sm-2 col-form-label">Price</Label>
              <Col sm="10">
                <AvInput type="number" id="addProductPrice"
                         name="price"
                         required
                         defaultValue={props.product.price}
                         onChange={props.handleInput} />
                <AvFeedback>Very important part.</AvFeedback>
              </Col>
            </AvGroup>
            
            <FormGroup row>
              <Col sm="12"><strong>Category specific fields</strong></Col>
            </FormGroup>

            {
              props.product.prodProps.map((property, i) => {
                return <PropertyField key={i} property={property} handleInput={props.handleInputProp} />
              })
            }

            <AvGroup row>
              <Col sm="12" className="d-flex flex-row justify-content-end">
                <Button color="secondary"
                        onClick={(e) => {
                          e.preventDefault();
                          props.history.goBack();
                        }}>Cancel</Button>
                <Button color="primary" className="ml-1">Save</Button>
              </Col>
            </AvGroup>
          </AvForm>
        </Col>
      </Row>
    );
};

export default ChangeProductForm;