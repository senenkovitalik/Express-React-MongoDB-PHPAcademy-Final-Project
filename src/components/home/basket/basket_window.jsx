import React from 'react';
import BasketProductItem from "./basket_product_item.jsx";
import { Link } from 'react-router-dom';

class BasketWindow extends React.Component {
  constructor(props) {
    super(props);

    this.hideModal = this.hideModal.bind(this);
  }

  hideModal() {
    $('#basketModal').modal('hide');
  }

  render() {
    const lastIndex = this.props.products.length - 1;
    const productList = this.props.products.map((product, index) => {
      if (index !== lastIndex) {
        return <div key={index}><BasketProductItem product={product} remove={this.props.remove} /><hr /></div>;
      } else {
        return <div key={index}><BasketProductItem product={product} remove={this.props.remove} /></div>;
      }
    });

    return (
      <div className="modal fade" id="basketModal" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Basket</h5>
              <button type="button" className="close" onClick={this.hideModal}>
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">

              {productList.length === 0 &&
                <div className="text-center">
                  <img src="glyph-iconset-master/svg/si-glyph-trolley-2.svg" style={{width: 25 + 'px', height: 25+'px', color: '#fff'}}/>
                  Your basket is empty)
                </div>
              }
              {productList}

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={this.hideModal}>Cancel</button>
              <Link to="/order_processing" onClick={this.hideModal} type="button" className="btn btn-primary">To order</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BasketWindow;