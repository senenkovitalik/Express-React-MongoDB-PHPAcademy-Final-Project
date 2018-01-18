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
import {
  AvForm,
  AvInput,
  AvGroup,
  AvFeedback
} from 'availity-reactstrap-validation';

class AddProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgs: []
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleInputProps = this.handleInputProps.bind(this);
  }

  handleInput(e) {
    const name = e.target.name;

    this.props.handleInput(e);

    let obj = {};

    switch (name) {
    case 'imgs':
      const fileList = e.target.files;
      let previewArr = [];
      for (let i = 0; i < fileList.length; i++) {
        let item = fileList.item(i);
        if (item.size < 3000000) {
          previewArr.push(URL.createObjectURL(item));
        }
      }
      obj.imgs = previewArr;
      break;
    }
    this.setState(obj);
  }

  handleInputProps(e) {
    this.props.handleInputProps(e);
  }

  _capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    return (
      <Row style={{marginTop: 20+'px'}}>
        <Col sm="7">
          <h5>Add new product</h5>
          <AvForm onValidSubmit={this.props.add}>
            <FormGroup row>
              <Label for="addProductCategory"
                     className="col-sm-2 col-form-label">Category</Label>
              <Col sm="10">
                <Input type="select"
                       id="addProductCategory"
                       name="category"
                       onChange={this.handleInput}>
                  {
                    this.props.categories.map((val, i) => {
                      return <option key={i}>{val.name}</option>;
                    })
                  }
                </Input>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="addProductSubcategory"
                     className="col-sm-2 col-form-label">Subcategory</Label>
              <Col sm="10">
                <Input type="select"
                       id="addProductSubcategory"
                       name="subcategory"
                       onChange={this.handleInput}>
                  {
                    this.props.category.subcategories.map((val, i) => {
                      return <option key={i}>{val}</option>;
                    })
                  }
                </Input>
              </Col>
            </FormGroup>

            <AvGroup row>
              <Label for="addProductName"
                     className="col-sm-2 col-form-label">Name</Label>
              <Col sm="10">
                <AvInput type="text"
                         id="addProductName"
                         name="name"
                         minLength="3"
                         onChange={this.handleInput}
                         required />
                <AvFeedback>Type product name. Min 3 chars.</AvFeedback>
              </Col>
            </AvGroup>

            <AvGroup row>
              <Label for="addProductModel"
                     className="col-sm-2 col-form-label">Model</Label>
              <Col sm="10">
                <AvInput type="text"
                         id="addProductModel"
                         name="model"
                         required
                         minLength="2"
                         onChange={this.handleInput} />
                <AvFeedback>Type product model. Min 2 chars.</AvFeedback>
              </Col>
            </AvGroup>

            <FormGroup row>
              <Label for="addProductVendor"
                     className="col-sm-2 col-form-label">Vendor</Label>
              <Col sm="10">
                <Input type="text"
                       id="addProductVendor"
                       name="vendor"
                       onChange={this.handleInput} />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="addProductProvider"
                     className="col-sm-2 col-form-label">Provider</Label>
              <Col sm="10">
                <Input type="text"
                       id="addProductProvider"
                       name="provider"
                       onChange={this.handleInput} />
              </Col>
            </FormGroup>

            <AvGroup row>
              <Label for="addProductDescription"
                     className="col-sm-2 col-form-label">Description</Label>
              <Col sm="10">
                <AvInput type="textarea"
                         rows="5"
                         id="addProductDescription"
                         name="description"
                         required
                         minLength="20"
                         onChange={this.handleInput} />
                <AvFeedback>Add some descriptive information about product.</AvFeedback>
              </Col>
            </AvGroup>

            <AvGroup row>
              <Label for="addProductPhoto"
                     className="col-sm-2 col-form-label">Photos</Label>
              <Col sm="10">
                <AvInput type="file"
                         multiple
                         id="addProductPhoto"
                         name="imgs"
                         style={{marginBottom: 5+'px'}}
                         required
                         onChange={this.handleInput} />
                <AvFeedback>Choose at least 1 photo.</AvFeedback>
                <div className="d-flex flex-row flex-wrap">
                {
                  this.state.imgs.map((src, i) => {
                    return  <div key={i} className="w-50">
                              <img src={src} width="100%" height="auto" />
                            </div>;
                  })
                }
                </div>
              </Col>
            </AvGroup>

            <AvGroup row>
              <Label for="addProductPrice"
                     className="col-sm-2 col-form-label">Price</Label>
              <Col sm="10">
                <AvInput type="number"
                         id="addProductPrice"
                         name="price"
                         required
                         onChange={this.handleInput} />
                <AvFeedback>Very important part.</AvFeedback>
              </Col>
            </AvGroup>

            <FormGroup row>
              <Col sm="12"><strong>Category specific fields</strong></Col>
            </FormGroup>



            {
              this.props.prodProps.map((property, i) => {
                const name = property.name;
                const capName = this._capitalizeFirstLetter(name);

                return (
                  <FormGroup row key={i}>
                    <Label for={`addProduct${capName}`}
                           className="col-sm-2 col-form-label">{name}</Label>
                    <Col sm="10">
                      <AvInput
                        id={`addProduct${capName}`}
                        name={name}
                        onChange={this.handleInput}
                      />
                    </Col>
                  </FormGroup>
                );
              })
            }

            <AvGroup row>
              <Col sm="12" className="d-flex flex-row justify-content-end">
                <Button color="secondary"
                        onClick={(e) => {
                          e.preventDefault();
                          this.props.history.goBack();
                        }}>Cancel</Button>
                <Button color="primary" className="ml-1">Save</Button>
              </Col>
            </AvGroup>
          </AvForm>
        </Col>
      </Row>
    );
  }
}

export default AddProductForm;