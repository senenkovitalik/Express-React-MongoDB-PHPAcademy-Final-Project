import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Input, Button } from 'reactstrap';

class BasketProductItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
      total: this.props.prodObj.product.price
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(arg) {
    switch(arg) {
    case 'plus':
      this.setState((prevState, props) => ({
        count: prevState.count + 1,
        total: (prevState.count + 1) * props.prodObj.product.price
      }), this.props.changeCount({
        product: this.props.prodObj.product,
        count: this.state.count + 1
      }));
      break;
    case 'minus':
    default:
      if (this.state.count > 1) {
        this.setState((prevState, props) => ({
          count: prevState.count - 1,
          total: (prevState.count - 1) * props.prodObj.product.price
        }), this.props.changeCount({
          product: this.props.prodObj.product,
          count: this.state.count - 1
        }));
      }
      break;
    }
  }

  handleChange(e) {
    this.setState({count: e.target.value})
  }

  render() {
    return (
      <div className="productItem mb-2">
        <Row>
          <Col xs="6">
            <img className="card-img-top" src={`/${this.props.prodObj.product.mainImg}`} alt={this.props.prodObj.product.name} />
          </Col>
          <Col sx="6" className="pl-0 d-flex flex-column justify-content-between">
            <div>
              <p className="mb-0">
                <strong>{this.props.prodObj.product.name}</strong><br />
                <span style={{backgroundColor: '#fff3b5', padding: '6px 5px 5px'}}>{this.props.prodObj.product.price}</span>
              </p>
            </div>

            <div className="d-flex flex-row justify-content-between">
              <div>
                <Button onClick={() => this.handleClick('plus')} style={{marginRight: 5+'px'}}>&#x2B;</Button>
                <Input
                  value={this.state.count}
                  onChange={this.handleChange}
                  type="text"
                  size="sm"
                  className="d-inline"
                  style={{width: 50+'px', textAlign: 'center'}}
                />
                <Button onClick={() => this.handleClick('minus')} href="#" style={{marginLeft: 5+'px'}}>&#x2D;</Button>
              </div>
              <div>
                <span className="align-middle">{this.state.total}</span>
              </div>
            </div>

            <div className="d-flex flex-row justify-content-end">
              <Button color="danger" size="sm" onClick={() => this.props.remove(this.props.prodObj)}><i className="fa fa-trash-o" aria-hidden="true"></i></Button>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default BasketProductItem;