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

const ChangeUserForm = (props) => {
  return  <Row style={{marginTop: 20+'px'}}>
            <Col sm="7">
            <h5>Add new user</h5>
            <Form>
              <FormGroup row>
                <Label for="newUserName" className="col-sm-2 col-form-label"><strong>Name</strong></Label>
                <Col sm="10">
                  <Input type="text" id="newUserName" placeholder="Name" value="" />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="newUserSurname" className="col-sm-2 col-form-label"><strong>Surname</strong></Label>
                <Col sm="10">
                  <Input type="text" className="form-control" id="newUserSurname" placeholder="Surname" value="" />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="newUserRole" className="col-sm-2 col-form-label"><strong>Role</strong></Label>
                <Col sm="10">
                  <Input type="select" id="newUserRole">
                    <option>admin</option>
                    <option>user</option>
                  </Input>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="newUserEmail" className="col-sm-2 col-form-label"><strong>Email</strong></Label>
                <Col sm="10">
                  <Input type="email" className="form-control" id="newUserEmail" placeholder="Email" value="" />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="newUserOther" className="col-sm-2 col-form-label"><strong>Other</strong></Label>
                <Col sm="10">
                  <Input type="text" className="form-control" id="newUserOther" placeholder="Other" value="" />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col sm="10">
                  <Button color="primary">Save</Button>
                </Col>
              </FormGroup>
            </Form>
            </Col>
          </Row>;
};

export default ChangeUserForm;