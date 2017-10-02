import React from 'react';

class BasketProductItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
      total: this.props.product.price
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(arg) {
    switch(arg) {
    case 'plus':
      this.setState((prevState, props) => ({
        count: prevState.count + 1,
        total: (prevState.count + 1) * props.product.price
      }));
      break;
    case 'minus':
      if (this.state.count > 1) {
        this.setState((prevState, props) => ({
          count: prevState.count - 1,
          total: (prevState.count - 1) * props.product.price
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
        <div className="row">
          <div className="col-6">
            <img className="card-img-top" src={this.props.product.mainImg} alt={this.props.product.name} />
          </div>
          <div className="col-6 pl-0 d-flex flex-column justify-content-between">
            <div>
              <p className="mb-0">
                <strong>{this.props.product.name}</strong><br />
                <span style={{backgroundColor: '#fff3b5', padding: '6px 5px 5px'}}>{this.props.product.price}</span>
              </p>
            </div>

            <div className="d-flex flex-row justify-content-between">
              <div>
                <a onClick={() => this.handleClick('plus')} href="#" style={{marginRight: 5+'px'}}>&#x2B;</a>
                <input
                  value={this.state.count}
                  onChange={this.handleChange}
                  type="text"
                  className="form-control form-control-sm d-inline"
                  style={{width: 50+'px', textAlign: 'center'}}
                />
                <a onClick={() => this.handleClick('minus')} href="#" style={{marginLeft: 5+'px'}}>&#x2D;</a>
              </div>
              <div>
                <span className="align-middle">{this.state.total}</span>
              </div>
            </div>

            <div className="d-flex flex-row justify-content-end">
              <button onClick={() => this.props.remove(this.props.product)} className="btn btn-sm btn-danger"><i className="fa fa-trash-o" aria-hidden="true"></i></button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BasketProductItem;