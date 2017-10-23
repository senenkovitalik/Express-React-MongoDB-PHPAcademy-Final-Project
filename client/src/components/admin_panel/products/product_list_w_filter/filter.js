import React from 'react';
import {
  Form,
  Label,
  Input,
  Button
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Filter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Form inline className="justify-content-center">
        <Label for="selectCategory" className="mr-sm-2">Category</Label>
        <Input type="select" id="selectCategory" name="category" className="mb-2 mr-sm-2 mb-sm-0" onChange={(e) => {this.props.handleFilter(e)}}>
          {
            this.props.categories.map((cat, i) => {
              return <option key={i}>{cat.name}</option>
            })
          }
        </Input>

        <Label for="selectSubcat" className="mr-sm-2">Subcategory</Label>
        <Input type="select" id="selectSubcat" name="subcategory" className="mb-2 mr-sm-2 mb-sm-0" onChange={(e) => {this.props.handleFilter(e)}}>
          {
            this.props.category &&
            this.props.category.subcategories.map((subcat, i) =>  {
              return <option key={i}>{subcat}</option>
            })
          }
        </Input>

        {/*<Label for="selectName" className="mr-sm-2">Name</Label>*/}
        {/*<Input type="text" id="selectName" className="mb-2 mr-sm-2 mb-sm-0" name="name" onChange={(e) => {this.props.handleFilter(e)}} />*/}

        {/*<Label for="selectModel" className="mr-sm-2">Model</Label>*/}
        {/*<Input type="text" id="selectModel" className="mb-2 mr-sm-2 mb-sm-0" name="model" onChange={(e) => {this.props.handleFilter(e)}} />*/}

        <Button color="success" onClick={this.props.filter}>Filter</Button>
      </Form>
    );
  }
}

export default Filter;