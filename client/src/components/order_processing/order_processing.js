import React from 'react';
import ProductList from './product_list/prod_list';
import Forms from "./forms/forms";
import Summary from "./summary";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Row,
  Col,
  Button
} from 'reactstrap';
import {
  Link
} from 'react-router-dom';

class OrderProcessing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: true,
      useCourier: false,

      name: this.props.user ? this.props.user.name : '',
      phone: this.props.user ? this.props.user.phone : '',
      delivery: 'self-checkout',
      address: this.props.user ? this.props.user.address : ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user !== null) {
      this.setState({
        name: nextProps.user.name,
        phone: nextProps.user.phone,
        address: nextProps.user.address
      });
    } else {
      this.setState({
        name: '',
        phone: '',
        address: ''
      });
    }
  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    if (name === 'delivery') {
      this.setState({
        [name]: value,
        useCourier: value === 'courier',
        checked: !this.state.checked
      })
    } else {
      this.setState({
        [name]: value
      })
    }
  }

  handleConfirm() {
    const order = {
      products: this.props.products,
      name: this.state.name,
      phone: this.state.phone,
      delivery: this.state.delivery,
      address: this.state.address,
      status: 'pending'
    };

    this.props.saveOrder(order);
  }

  render() {
    return (
      <div style={{paddingBottom: 80 + 'px'}}>

        <Row>
          <Col xs="12">
            <h1>Order processing</h1>
          </Col>
        </Row>

        <Row>
          <ProductList products={this.props.products}
                       total={this.props.total} />

          <Col xs="12" lg="6" className="order-lg-1">
            <Forms name={this.state.name}
                   phone={this.state.phone}
                   address={this.state.address}
                   checked={this.state.checked}
                   handleChange={this.handleChange} />

            <Summary count={this.props.products.length}
                     total={this.props.total}
                     useCourier={this.state.useCourier} />

            <Button color="success"
                    block
                    className="mb-2"
                    tag={Link}
                    to={`${this.props.match.url}/order_status`}
                    onClick={this.handleConfirm}>Confirm the order</Button>
          </Col>
        </Row>
      </div>
    )
  }
}

export default OrderProcessing;