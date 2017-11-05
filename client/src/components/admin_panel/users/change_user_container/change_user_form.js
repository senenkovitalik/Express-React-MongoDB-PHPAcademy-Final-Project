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

const ChangeUserForm = (props) => {
  return  <Row style={{marginTop: 20+'px'}}>
            <Col sm="7">
              <h5>Change user: {props.user.name}</h5>
              <AvForm onValidSubmit={props.change} model={props.user}>

                <FormGroup row>
                  <Label for="changeName" className="col-sm-2 col-form-label">
                    <strong>Name</strong>
                  </Label>
                  <Col sm="10">
                    <Input type="text" id="changeName" placeholder="Name"
                           name="name"
                           defaultValue={props.user.name}
                           onChange={props.handleInput} />
                  </Col>
                </FormGroup>

                <AvGroup row>
                  <Label for="changeLogin" className="col-sm-2 col-form-label">
                    <strong>Login</strong>
                  </Label>
                  <Col sm="10">
                    <AvInput type="text" id="changeLogin" placeholder="Login"
                           name="login"
                           required
                           minLength="7"
                           onChange={props.handleInput} />
                    <AvFeedback>This fields is required</AvFeedback>
                  </Col>
                </AvGroup>

                <AvGroup row>
                  <Label for="changePassword" className="col-sm-2 col-form-label">
                    <strong>Password</strong>
                  </Label>
                  <Col sm="10">
                    <AvInput type="password" id="changePassword"
                           placeholder="Password"
                           name="password"
                           required
                           minLength="7"
                           onChange={props.handleInput} />
                    <AvFeedback>You need to specify password</AvFeedback>
                  </Col>
                </AvGroup>

                <AvGroup row>
                  <Label for="changeConfirmPassword" className="col-sm-2 col-form-label">
                    <strong>Confirm password</strong>
                  </Label>
                  <Col sm="10">
                    <AvInput type="password" id="changeConfirmPassword"
                           placeholder="Confirm password"
                           name="c_password"
                           required
                           validate={{ match: { value:'password' } }}
                           onChange={props.handleInput} />
                    <AvFeedback>You need to confirm password</AvFeedback>
                  </Col>
                </AvGroup>

                <FormGroup row>
                  <Label for="changeUserRole" className="col-sm-2 col-form-label">
                    <strong>Role</strong>
                  </Label>
                  <Col sm="10">
                    <Input type="select" id="changeUserRole" name="role"
                           defaultValue={props.user.role}
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
                  <Label for="changePhone" className="col-sm-2 col-form-label">
                    <strong>Phone</strong>
                  </Label>
                  <Col sm="10">
                    <Input type="text" id="changePhone" placeholder="Phone"
                           name="phone" defaultValue={props.user.phone}
                           onChange={props.handleInput} />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="changeEmail" className="col-sm-2 col-form-label">
                    <strong>Email</strong>
                  </Label>
                  <Col sm="10">
                    <Input type="email" id="changeEmail" placeholder="Email"
                           name="email" defaultValue={props.user.email}
                           onChange={props.handleInput} />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label for="changeAddress" className="col-sm-2 col-form-label">
                    <strong>Address</strong>
                  </Label>
                  <Col sm="10">
                    <Input type="text" id="changeAddress" placeholder="Address"
                           name="address" defaultValue={props.user.address}
                           onChange={props.handleInput} />
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
          </Row>;
};

export default ChangeUserForm;