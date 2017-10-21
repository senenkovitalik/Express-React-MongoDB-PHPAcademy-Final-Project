import React from 'react';
import {
  Form,
  Label,
  Input,
  Button
} from 'reactstrap';
import {
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddProductForm from './add_product_form';
import ChangeProductForm from './change_product_form';

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        name: '',
        category: '',
        model: '',
        vendor: '',
        provider: '',
        description: '',
        imgs: [],
        price: 0,
        prodProps: []
      }
    };
  }

  render() {
    return (
      <div>
        <h4 style={{display: 'inline-block', marginRight: 15+'px'}}>Products</h4>
        <Button color="primary" size="sm" tag={Link} to={`${this.props.match.url}/add-new-product`}>Add new</Button>

        {/*<!-- List of products. Can be filtered. -->*/}
        <Form inline className="justify-content-center">
          <Label for="selectCategory" className="mr-sm-2">Select category</Label>
          <Input type="select" id="selectCategory" className="mb-2 mr-sm-2 mb-sm-0">
            <option>Guitars</option>
            <option>Combos</option>
            <option>Amps</option>
            <option>Strings</option>
            <option>Effects</option>
            <option>Other</option>
          </Input>

          <Label for="filter" className="mr-sm-2">Filter</Label>
          <Input type="text" id="filter" className="mb-2 mr-sm-2 mb-sm-0" />
        </Form>

        {/*<!-- Add new product -->*/}
        <Route
          path={`${this.props.match.url}/add-new-product`}
          render={() => <AddProductForm
            product={this.state.product}
            categories={this.props.categories}
            add={this.props.add}
            flash={this.props.flash}
          /> }
        />

        {/*<!-- Change product -->*/}
        <Route
          path={`${this.props.match.url}/change-product`}
          render={() => (
            this.props.catToChange
              ? (<ChangeProductForm categories={this.props.categories} product={this.props.product} change={this.props.change} />)
              : (<Redirect to={this.props.match.url} />)
          )}
        />
      </div>
    );
  }
}

export default Products;