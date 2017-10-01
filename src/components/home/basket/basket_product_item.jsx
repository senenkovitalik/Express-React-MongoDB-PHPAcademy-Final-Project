import React from 'react';

class BasketProductItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
      total: 0
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(arg) {
    switch(arg) {
    case 'plus':
      this.setState({
        count: this.state.count + 1,
        total: this.state.count * this.props.price
      });
      break;
    case 'minus':
      if (this.state.count > 1)
        this.setState({
          count: this.state.count - 1,
          total: this.state.count * this.props.price
        });
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
            <img className="card-img-top" src={this.props.img} alt={this.props.name} />
          </div>
          <div className="col-6 pl-0 d-flex flex-column justify-content-between">
            <div>
              <p className="mb-0">
                <strong>{this.props.name}</strong><br />
                <span style={{backgroundColor: '#fff3b5', padding: '6px 5px 5px'}}>{this.props.price}</span>
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
              <button className="btn btn-sm btn-danger"><i className="fa fa-trash-o" aria-hidden="true"></i></button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BasketProductItem;