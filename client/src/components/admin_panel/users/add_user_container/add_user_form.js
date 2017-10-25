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

const AddUserForm = (props) => {
  return  <Row style={{marginTop: 20+'px'}}>
            <Col sm="7">
            <h5>Add new user</h5>
            <Form>
              <FormGroup row>
                <Label for="newName" className="col-sm-2 col-form-label"><strong>Name</strong></Label>
                <Col sm="10">
                  <Input type="text" id="newName" placeholder="Name" name="name" value="" onChange={props.handleInput} />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="newLogin" className="col-sm-2 col-form-label"><strong>Login</strong></Label>
                <Col sm="10">
                  <Input type="text" id="newLogin" placeholder="Login" name="login" value="" onChange={props.handleInput} />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="newPassword" className="col-sm-2 col-form-label"><strong>Password</strong></Label>
                <Col sm="10">
                  <Input type="text" id="newPassword" placeholder="Password" name="password" value="" onChange={props.handleInput} />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="newConfirmPassword" className="col-sm-2 col-form-label"><strong>Confirm password</strong></Label>
                <Col sm="10">
                  <Input type="text" id="newConfirmPassword" placeholder="Confirm password" name="confirm_password" value="" onChange={props.handleInput} />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="newUserRole" className="col-sm-2 col-form-label"><strong>Role</strong></Label>
                <Col sm="10">
                  <Input type="select" id="newUserRole" name="role" onChange={props.handleInput}>
                    <option>admin</option>
                    <option>user</option>
                  </Input>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="newPhone" className="col-sm-2 col-form-label"><strong>Phone</strong></Label>
                <Col sm="10">
                  <Input type="email" id="newPhone" placeholder="Phone" name="phone" value="" onChange={props.handleInput} />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="newEmail" className="col-sm-2 col-form-label"><strong>Email</strong></Label>
                <Col sm="10">
                  <Input type="email" id="newEmail" placeholder="Email" name="email" value="" onChange={props.handleInput} />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="newAddress" className="col-sm-2 col-form-label"><strong>Address</strong></Label>
                <Col sm="10">
                  <Input type="text" id="newAddress" placeholder="Address" name="address" value="" onChange={props.handleInput} />
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

export default AddUserForm;