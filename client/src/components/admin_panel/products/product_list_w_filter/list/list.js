import React from 'react';
import ListItem from './list_item';

class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mt-3">
      {
        this.props.filteredProducts.map((p, i) => {
          return <ListItem key={i} product={p} />
        })
      }
      </div>
    )
  }
}

export default List;