import React from 'react';
import BasketProductItem from "./basket_product_item.jsx";

class BasketWindow extends React.Component {
  render() {
    return (
      <div className="modal fade" id="basketModal" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Basket</h5>
              <button type="button" className="close" data-dismiss="modal">
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">

            <BasketProductItem  img="img/lespaul.jpg" name="Gibson Les Paul" price="100" />

            <hr />

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-primary">To order</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BasketWindow;