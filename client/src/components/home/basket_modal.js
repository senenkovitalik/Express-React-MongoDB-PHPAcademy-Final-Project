import React from 'react';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Link
} from 'react-router-dom';
import BasketProductItem from './basket/basket_product_item';

class BasketModal extends React.Component {
  constructor(props) {
    super(props);

    this.back = this.back.bind(this);
  }

  back(e) {
    e.stopPropagation();
    this.props.history.goBack();
  }

  render() {
    const productList = this.props.prodsInBasket.map((item, index) => {
      return  <div key={index}>
        <BasketProductItem prod={item}
                           remove={this.remove}
                           changeCount = {this.props.changeCount} />
        {index !== this.props.prodsInBasket.length - 1 &&  <hr />}
      </div>;
    });

    return (
      <Modal isOpen={true} toggle={this.back}>
        <ModalHeader toggle={this.back}>Basket</ModalHeader>
        <ModalBody>
          {
             productList.length === 0 &&
             <div className="text-center">
               <i className="fa fa-shopping-cart"
                  aria-hidden="true"
                  style={{width: 25 + 'px', height: 25+'px', color: '#000'}}/>
               Your basket is empty)<br />Try to add some products.
             </div>
           }
          {productList}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={(e) => this.back(e)}>Cancel</Button>
          <Button
            tag={Link}
            to="/order_processing"
            color="primary"
            className={`${productList.length === 0 ? "disabled" : ""}`}
          >To order</Button>
        </ModalFooter>
      </Modal>
    )
  }
}

export default BasketModal;