import React from 'react';
import BasketProductItem from './basket_product_item';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Col, Button, Badge, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Basket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {

    const lastIndex = this.props.products.length - 1;
    const productList = this.props.products.map((product, index) => {
      return <div key={index}><BasketProductItem product={product} remove={this.props.remove} />
        {index !== lastIndex &&  <hr />}
      </div>;
    });

    return (
      <Col xs="12" md="3" lg="2" className="order-md-3">
        <Button size="lg" block onClick={this.toggle} id="basketButton" style={{backgroundColor: '#007bff', color: '#fff'}}>
          Basket <img src="glyph-iconset-master/svg/si-glyph-trolley-2.svg" style={{width: 25 + 'px', height: 25+'px', color: '#fff'}} alt="Shop cart" />
          { this.props.products.length > 0 && <Badge color="success">{this.props.products.length}</Badge> }
        </Button>

        <Modal isOpen={this.state.isOpen} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Basket</ModalHeader>
          <ModalBody>
            {productList.length === 0 &&
              <div className="text-center">
                <img src="glyph-iconset-master/svg/si-glyph-trolley-2.svg" style={{width: 25 + 'px', height: 25+'px', color: '#fff'}} alt="Empty basket" />
                Your basket is empty)
              </div>
            }
            {productList}
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            <Button tag={Link} to="/order_processing" color="primary" className={`${productList.length === 0 ? "disabled" : ""}`}>To order</Button>
          </ModalFooter>
        </Modal>
      </Col>
    );
  }
}

export default Basket;