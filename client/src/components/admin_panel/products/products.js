import React from 'react';
import {
  Button
} from 'reactstrap';
import {
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductListWFilter from './product_list_w_filter/product_list_w_filter';
import AddProductForm from './add_product_form';
import ChangeProductFormContainer from "./change_product_form_container";

class Products extends React.Component {
  render() {
    return (
      <div>
        <h4 style={{display: 'inline-block', marginRight: 15+'px'}}>Products</h4>
        <Button color="primary" size="sm" tag={Link} to={`${this.props.match.url}/add-new-product`}>Add new</Button>

        {/*<!-- List of products. Can be filtered. -->*/}
        <ProductListWFilter
          {...this.props}
          categories={this.props.categories}
          category={this.props.category}
          filteredProducts={this.props.filteredProducts}
          handleFilter={this.props.handleFilter}
          filter={this.props.filter}
          remove={this.props.remove}
          chooseToChange={this.props.chooseToChange}
          products={this.props.products}
        />

        {/*<!-- Add new product -->*/}
        <Route
          path={`${this.props.match.url}/add-new-product`}
          render={() => <AddProductForm
            categories={this.props.categories}
            category={this.props.category}
            prodProps={this.props.prodProps}
            handleInput={this.props.handleAddInput}
            handleInputProps={this.props.handleAddInputProps}
            add={this.props.add}
            flash={this.props.flash}
          /> }
        />

        {/*<!-- Change product -->*/}
        <Route
          path={`${this.props.match.url}/change-product`}
          render={() => (
            this.props.prodToChange
              ? (<ChangeProductFormContainer
                  categories={this.props.categories}
                  product={this.props.prodToChange}
                  change={this.props.change}
                />)
              : (<Redirect to={this.props.match.url} />)
          )}
        />
      </div>
    );
  }
}

export default Products;