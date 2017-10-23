import React from 'react';
import Filter from './filter';
import List from './list/list';

class ProductListWFilter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Filter
          categories={this.props.categories}
          category={this.props.category}
          handleFilter={this.props.handleFilter}
          filter={this.props.filter}
        />
        <List
          filteredProducts={this.props.filteredProducts}
        />
      </div>
    );
  }
}

export default ProductListWFilter;