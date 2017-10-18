import React from 'react';
import {
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Table,
  Button
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Users extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
          <h4 style={{display: 'inline-block', marginRight: 15+'px'}}>Users</h4>

          {/*<!-- Users list -->*/}
          <Table>
            <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Surname</th>
              <th>Role</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Other</th>
              <th>Control</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Vitaliy</td>
              <td>Senenko</td>
              <td>admin</td>
              <td>+38-093-059-23-40</td>
              <td>senenkovitalik@gmail.com</td>
              <td>Some data</td>
              <td>
                <Button className="btn btn-outline-info" title="Change user data"><span className="oi oi-pencil"></span></Button>
                <Button className="btn btn-outline-danger" title="Delete user"><span className="oi oi-trash"></span></Button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Ivan</td>
              <td>Ivanov</td>
              <td>client</td>
              <td>+38-093-666-66-66</td>
              <td>ivanov@gmail.com</td>
              <td>Client number one</td>
              <td>
                <Button className="btn btn-outline-info" title="Change user data"><span className="oi oi-pencil"></span></Button>
                <Button className="btn btn-outline-danger" title="Delete user"><span className="oi oi-trash"></span></Button>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Petro</td>
              <td>Buy</td>
              <td>user</td>
              <td>+38-066-11-61-66</td>
              <td>pbuy@gmail.com</td>
              <td>Be careful with this guy!</td>
              <td>
                <Button className="btn btn-outline-info" title="Change user data"><span className="oi oi-pencil"></span></Button>
                <Button className="btn btn-outline-danger" title="Delete user"><span className="oi oi-trash"></span></Button>
              </td>
            </tr>
            </tbody>
          </Table>

          {/*<!-- Add new user -->*/}
          <Row style={{marginTop: 20+'px'}}>
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
                      <option>client</option>
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
          </Row>

          {/*<!-- Change user data -->*/}
        <Row style={{marginTop: 20+'px'}}>
          <Col sm="7">
            <h5>Change user: </h5>
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
                    <option>client</option>
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
        </Row>
      </div>
    );
  }
}

export default Users;