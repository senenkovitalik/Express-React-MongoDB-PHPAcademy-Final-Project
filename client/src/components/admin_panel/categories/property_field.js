import React from 'react';
import {
  FormGroup,
  Label,
  Col,
  Input
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  AvGroup,
  AvInput
} from 'availity-reactstrap-validation';

class PropertyField extends React.Component {
  render() {

    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const name = this.props.property.name;
    const capName = capitalizeFirstLetter(name);

    return (
      <FormGroup row>
        <Label for={`addProduct${capName}`} className="col-sm-2 col-form-label">{name}</Label>
        <Col sm="10">
          <Input
            type={this.props.property.type}
            id={`addProduct${capName}`}
            name={name}
            defaultValue={this.props.property.value}
            onChange={this.props.handleInput}
            required
          />
        </Col>
      </FormGroup>
    );
  }
}

export default PropertyField;