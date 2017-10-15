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

class ChangeCategoryForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row style={{marginTop: 20+'px'}}>
        <Col sm="6">
          <h5>Change category: {this.props.category.name}</h5>
          <Form>

            <FormGroup row>
              <Label for="changeCategoryName" className="col-sm-2 col-form-label"><strong>Name</strong></Label>
              <Col xs="10">
                <Input type="text" id="changeCategoryName" placeholder="Category name" value={this.props.category.name} />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Table>
                <thead>
                <tr>
                  <th>#</th>
                  <th>Field name</th>
                  <th>Type</th>
                  <th>-</th>
                </tr>
                </thead>
                { 
                  this.props.category.fields.map((field, i) =>
                    <tbody key={i}>
                      <tr>
                        <th scope="row">{ i + 1 }</th>
                        <td>
                          <Input type="text" value={field.name}/>
                        </td>
                        <td>
                          <Input type="select" value={field.type}>
                            { this.props.fieldTypes.map((type, i) => {
                              return <option key={i} value={type}>{type}</option>
                            })}
                          </Input>
                        </td>
                        <td>
                          <Button className="btn-outline-danger" title="Remove category field">
                            <i className="fa fa-trash-o" aria-hidden="true"></i>
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                )}
              </Table>
            </FormGroup>

            <FormGroup row>
              <Col sm="2"><strong>Fields</strong></Col>
              <Col sm="10">
                <FormGroup row>
                  <Col sm="auto">
                    <Label for="fieldName">Name</Label>
                    <Input type="text" id="fieldName" placeholder="Filed name" />
                  </Col>
                  <Col>
                    <Label for="filedType">Type</Label>
                    <Input type="select" id="filedType">
                      <option>Text</option>
                      <option>Number</option>
                      <option>Date</option>
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col>
                    <Button color="success" className="float-right" style={{marginTop: 15+'px'}}>Add field</Button>
                  </Col>
                </FormGroup>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col sm="10">
                <Button color="primary">Save</Button>
              </Col>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default ChangeCategoryForm;
