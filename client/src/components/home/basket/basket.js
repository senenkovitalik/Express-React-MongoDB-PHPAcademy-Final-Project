import React from 'react';
import BasketProductItem from './basket_product_item';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';
import { Col, Button, Badge, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Basket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };

    this.toggle = this.toggle.bind(this);
    this.remove = this.remove.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  remove(prod) {
    this.props.remove(prod);
  }

  handleChange(e, prod) {
    const count = e.target.value;
    this.props.changeCount(prod, count);
  }

  render() {

    const productList = this.props.prodsInBasket.map((item, index) => {
      return  <div key={index}>
                <BasketProductItem prod={item}
                                   remove={this.remove}
                                   handleChange={this.handleChange} />
                {index !== this.props.prodsInBasket.length - 1 &&  <hr />}
              </div>;
    });

    return (
      <Col xs="12" md="3" lg="2" className="order-md-3">
        <Button size="lg"
                block
                onClick={this.toggle}
                id="basketButton"
                style={{backgroundColor: '#007bff', color: '#fff'}}
        >
          Basket <i className="fa fa-shopping-cart"
                    aria-hidden="true"
                    style={{width: 25 + 'px', height: 25+'px', color: '#fff'}}></i>
          {
            this.props.prodsInBasket.length > 0
            && <Badge color="success">{this.props.prodsInBasket.length}</Badge>
          }
        </Button>

        <Modal isOpen={this.state.isOpen} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Basket</ModalHeader>
          <ModalBody>
            {
              productList.length === 0 &&
              <div className="text-center">
                <i className="fa fa-shopping-cart"
                   aria-hidden="true"
                   style={{width: 25 + 'px', height: 25+'px', color: '#000'}}></i>
                Your basket is empty)<br />Try to add some products.
              </div>
            }
            {productList}
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            <Button
              tag={Link}
              to="/order_processing"
              color="primary"
              className={`${productList.length === 0 ? "disabled" : ""}`}
            >To order</Button>
          </ModalFooter>
        </Modal>
      </Col>
    );
  }
}

export default Basket;