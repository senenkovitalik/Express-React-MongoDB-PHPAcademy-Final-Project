import React from 'react';
import {
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';
import {
  AvForm,
  AvGroup,
  AvInput,
  AvFeedback
} from 'availity-reactstrap-validation';

const AddUserForm = (props) => {
  return (
    <Row style={{marginTop: 20+'px'}}>
      <Col sm="7">
      <h5>Add new user</h5>
      <AvForm onValidSubmit={props.add}>
        <FormGroup row>
          <Label for="newName" className="col-sm-2 col-form-label">
            <strong>Name</strong>
          </Label>
          <Col sm="10">
            <Input type="text" id="newName" placeholder="Name"
                   name="name" onChange={props.handleInput} />
          </Col>
        </FormGroup>

        <AvGroup row>
          <Label for="newLogin" className="col-sm-2 col-form-label">
            <strong>Login</strong>
          </Label>
          <Col sm="10">
            <AvInput type="text" id="newLogin" placeholder="Login"
                     name="login"
                     required
                     onChange={props.handleInput} />
            <AvFeedback>This fields is required</AvFeedback>
          </Col>
        </AvGroup>


        <AvGroup row>
          <Label for="newPassword" className="col-sm-2 col-form-label">
            <strong>Password</strong>
          </Label>
          <Col sm="10">
            <AvInput type="password" id="newPassword" placeholder="Password"
                 name="password"
                 required
                 minLength="7"
                 onChange={props.handleInput} />
            <AvFeedback>You need to specify password</AvFeedback>
          </Col>
        </AvGroup>

        <AvGroup row>
          <Label for="newConfirmPassword" className="col-sm-2 col-form-label">
            <strong>Confirm password</strong>
          </Label>
          <Col sm="10">
            <AvInput type="password" id="newConfirmPassword"
                   placeholder="Confirm password" name="c_password"
                   required
                   validate={{ match: { value:'password' } }}
                   onChange={props.handleInput} />
            <AvFeedback>You need to confirm password</AvFeedback>
          </Col>
        </AvGroup>

        <FormGroup row>
          <Label for="newUserRole" className="col-sm-2 col-form-label">
            <strong>Role</strong>
          </Label>
          <Col sm="10">
            <Input type="select" id="newUserRole" name="role"
                   onChange={props.handleInput}>
                {
                  props.roles.map((role, i) => {
                    return <option key={i}>{role}</option>;
                  })
                }
            </Input>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="newPhone" className="col-sm-2 col-form-label">
            <strong>Phone</strong>
          </Label>
          <Col sm="10">
            <Input type="text" id="newPhone" placeholder="Phone"
                   name="phone" onChange={props.handleInput} />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="newEmail" className="col-sm-2 col-form-label">
            <strong>Email</strong>
          </Label>
          <Col sm="10">
            <Input type="email" id="newEmail" placeholder="Email" name="email"
                   onChange={props.handleInput} />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="newAddress" className="col-sm-2 col-form-label">
            <strong>Address</strong>
          </Label>
          <Col sm="10">
            <Input type="text" id="newAddress" placeholder="Address"
                   name="address" onChange={props.handleInput} />
          </Col>
        </FormGroup>

        <AvGroup row>
          <Col sm="10">
            <Button color="secondary"
                    className="mr-1"
                    onClick={(e) => {
                      e.preventDefault();
                      props.history.goBack();
                    }}>Cancel</Button>
            <Button color="success">Save</Button>
          </Col>
        </AvGroup>
      </AvForm>
      </Col>
    </Row>
  )
};

export default AddUserForm;