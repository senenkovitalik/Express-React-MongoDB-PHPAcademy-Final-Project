import React from 'react';
import {
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Button,
  Table,
  Label,
  Link
} from 'reactstrap';
import _ from 'lodash';
import 'bootstrap/dist/css/bootstrap.min.css';

class AddCategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      fields: [
        { name: 'Brand', type: 'text' },
        { name: 'Weight', type: 'number' }
      ],
      fieldTypes: ['text', 'number'],
      newField: {
        name: null,
        type: 'text'
      },
      nameValid: false,
      isNameDirty: false,
      fieldValid: false,
      isFieldDirty: false
    };

    this.addField = this.addField.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.remove = this.remove.bind(this);
    this.save = this.save.bind(this);
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
    case "categoryName":
      stateObj.name = value;
      stateObj.nameValid = value.length >= 3;
      stateObj.isNameDirty = value.length > 0;
      break;
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
    }

    this.setState(stateObj)
  }

  remove(field) {
    this.setState({
      fields: _.without(this.state.fields, field)
    })
  }

  save() {
    const obj = {
      name: this.state.name,
      fields: this.state.fields
    };
    console.log("Push data to server: ", obj);
  }

  render() {
    return (
      <Row style={{marginTop: 20+'px'}}>
        <Col xs="5">
          <h5 color="light">Add new category</h5>
            <Form>

              <FormGroup row>
                <Label for="categoryName" className="col-sm-2 col-form-label">Name</Label>
                <Col xs="10">
                  <Input
                    type="text"
                    id="categoryName"
                    name="categoryName"
                    placeholder="Category name"
                    onChange={this.handleInputChange}
                    { ...this.state.isNameDirty ? {valid: this.state.nameValid} : {} }
                  />
                </Col>
              </FormGroup>

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
                  return  <tbody key={i}>
                            <tr>
                              <th scope="row">{i+1}</th>
                              <td>{field.name}</td>
                              <td>{field.type}</td>
                              <td>
                                <Button onClick={() => this.remove(field)} className="btn-outline-danger" title="Remove category field">
                                  <i className="fa fa-trash-o" aria-hidden="true"></i>
                                </Button>
                              </td>
                            </tr>
                          </tbody>;
                })}
              </Table>

              <FormGroup row>
                <Col sm="2">Fields</Col>
                <Col sm="10">
                  <div className="form-row">
                    <div className="col">
                      <Label for="fieldName">Name</Label>
                      <Input
                        type="text"
                        id="fieldName"
                        name="fieldName"
                        onChange={this.handleInputChange}
                        placeholder="Field name"
                        { ...this.state.isFieldDirty ? {valid: this.state.fieldValid} : {} }
                      />
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
                  </div>
                  <FormGroup row>
                    <Col>
                      <Button
                        onClick={this.addField}
                        color="success"
                        className="float-right"
                        style={{marginTop: 15+'px'}}
                        disabled={!this.state.fieldValid}
                      >Add field</Button>
                    </Col>
                  </FormGroup>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col sm="10">
                  <Button
                    color="primary"
                    onClick={this.save}
                    disabled={!this.state.nameValid}
                  >Save</Button>
                </Col>
              </FormGroup>

            </Form>
        </Col>
      </Row>
    );
  }
}

export default AddCategoryForm;