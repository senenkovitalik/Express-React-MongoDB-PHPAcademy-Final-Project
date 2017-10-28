import React from 'react';
import {
  Form,
  Label,
  Input,
  Button
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginForm = (props) => {
  const labelStyle = {color: 'white', marginRight: 10+'px'};
  return (
    <Form inline className="my-2 my-lg-0 flex-wrap">
      <Label for="login" style={labelStyle}>Login</Label>
      <Input onChange={props.handleChange}
             name="login"
             id="login"
             className="mr-sm-2"
             type="text"
             placeholder="Login, email or phone number"
      />
      <Label for="passwr" style={labelStyle}>Password</Label>
      <Input onChange={props.handleChange}
             name="password"
             id="passwr"
             className="mr-sm-2"
             type="password"
             placeholder="Password"
      />

      {
        props.isLogged
          ? (<Button onClick={props.handleLogout}
                     color="success"
                     className="my-2 my-sm-0 mr-2">Logout</Button>)
          : (<Button onClick={props.handleLogin}
                     color="success"
                     className="my-2 my-sm-0 mr-2">Login</Button>)
      }

      <Button onClick={props.toggleModal}
              color="primary"
              className="my-2 my-sm-0">Sign up</Button>
    </Form>
  )
};

export default LoginForm;