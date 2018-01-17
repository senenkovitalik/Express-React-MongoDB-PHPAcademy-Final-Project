import React from 'react';
import {
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Button,
  Table,
  Label
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  AvForm,
  AvInput,
  AvGroup,
  AvFeedback
} from 'availity-reactstrap-validation';
import _ from 'lodash';

class ChangeCategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: this.props.category.prodProps,
      fieldTypes: this.props.fieldTypes,
      newField: {
        name: null,
        type: 'text'
      },
      fieldValid: false,
    };

    this.addField = this.addField.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.remove = this.remove.bind(this);
    this.handleValidSubmit = this.handleValidSubmit.bind(this);
  }

  addField() {
    if (this.state.newField.name !== null && _.find(this.state.fields, this.state.newField) === undefined) {
      this.setState({
        fields: _.concat(this.state.fields, this.state.newField)
      });
    }
  }

  handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    let stateObj = {};

    switch (name) {
    case "fieldName":
      stateObj.newField = {
        name: value,
        type: this.state.newField.type
      };
      stateObj.fieldValid = value.length >= 3;
      stateObj.isFieldDirty = value.length > 0;
      break;
    case "fieldType":
      stateObj.newField = {
        name: this.state.newField.name,
        type: value
      };
      break;
    default:
      break;
    }

    this.setState(stateObj)
  }

  remove(field) {
    this.setState({
      fields: _.without(this.state.fields, field),
      isDataDirty: true
    })
  }

  handleValidSubmit(event, values) {
    this.props.change(
      Object.assign(
        {},
        this.props.category,
        {
          name: values.name,
          subcategories: values.subcategories.trim().match(/\w+/gi),
          description: values.description,
          prodProps: this.state.fields
        }
      )
    );
    this.props.history.goBack();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      ...nextProps.category,
      fieldTypes: nextProps.fieldTypes
    });
  }

  render() {
    const defaultValues = Object.assign({}, this.props.category, { subcategories: this.props.category.subcategories.join(" ") });

    return (
      <Row style={{marginTop: 20+'px'}}>
        <Col xs="6">
          <h5 color="light">Change category: {this.props.category.name}</h5>

          <AvForm onValidSubmit={this.handleValidSubmit} model={defaultValues}>

            <AvGroup row>
              <Label for="categoryName"
                     className="col-sm-3 col-form-label">Name</Label>
              <Col xs="9">
                <AvInput
                  type="text"
                  id="categoryName"
                  name="name"
                  placeholder="Category name"
                  minLength="3"
                  required />
                <AvFeedback>Choose the name for category. At least 3 chars.</AvFeedback>
              </Col>
            </AvGroup>

            <AvGroup row>
              <Label for="subcategories"
                     className="col-sm-3 col-form-label">Subcategories</Label>
              <Col xs="9">
                <AvInput
                  type="text"
                  id="subCats"
                  name="subcategories"
                  placeholder="Subcat1 Subcat2 ... SubcatN"
                  pattern="^(\w+\s*?)*$"
                  required />
                <AvFeedback>You need to specify at least 1 subcategory. Use pattern for multiple values.</AvFeedback>
              </Col>
            </AvGroup>

            <AvGroup row>
              <Label for="categoryDescription"
                     className="col-sm-3 col-form-label">Description</Label>
              <Col xs="9">
                <AvInput
                  type="textarea"
                  name="description"
                  id="categoryDescription"
                  rows="5"
                  required
                  minLength="15" />
                <AvFeedback>Add some description. Only 15 chars.</AvFeedback>
              </Col>
            </AvGroup>

            {
              this.state.fields.length > 0 &&
              <Table>
                <thead>
                <tr>
                  <th>#</th>
                  <th>Field name</th>
                  <th>Type</th>
                  <th>-</th>
                </tr>
                </thead>
                {this.state.fields.map((field, i) => {
                  return <tbody key={i}>
                  <tr>
                    <th scope="row">{i + 1}</th>
                    <td>{field.name}</td>
                    <td>{field.type}</td>
                    <td>
                      <Button onClick={() => this.remove(field)}
                              color="danger"
                              outline
                              title="Remove category field">
                        <i className="fa fa-trash-o" aria-hidden="true"/>
                      </Button>
                    </td>
                  </tr>
                  </tbody>;
                })}
              </Table>
            }

            <AvGroup row>
              <Col sm="3">Fields</Col>
              <Col sm="9">
                <AvGroup row>
                  <div className="col">
                    <Label for="fieldName">Name</Label>
                    <AvInput
                      type="text"
                      id="fieldName"
                      name="fieldName"
                      onChange={this.handleInputChange}
                      placeholder="Field name"
                      required={this.state.fields.length === 0}
                      minLength="3" />
                    <AvFeedback>Add field name - min 3 chars</AvFeedback>
                  </div>
                  <Col>
                    <Label for="filedType">Type</Label>
                    <Input
                      type="select"
                      id="fieldType"
                      name="fieldType"
                      onChange={this.handleInputChange}
                    >
                      {this.state.fieldTypes.map((type, i) => {
                        return <option key={i}>{type}</option>;
                      })}
                    </Input>
                  </Col>
                </AvGroup>
                <FormGroup row>
                  <Col>
                    <Button
                      onClick={this.addField}
                      color="primary"
                      className="float-right"
                      style={{marginTop: 15+'px'}}
                      disabled={!this.state.fieldValid}
                    >Add field</Button>
                  </Col>
                </FormGroup>
              </Col>
            </AvGroup>

            <AvGroup row>
              <Col sm="12" className="d-flex flex-row justify-content-end">
                <Button color="secondary"
                        onClick={(e) => {
                          e.preventDefault();
                          this.props.history.goBack();
                        }}>Cancel</Button>
                <Button color="success" className="ml-1">Save</Button>
              </Col>
            </AvGroup>

          </AvForm>
        </Col>
      </Row>
    );
  }
}

export default ChangeCategoryForm;
