import React from 'react';

class BasketButton extends React.Component {
  render() {
    return (
      <button type="button" className="btn btn-lg btn-block" id="basketButton" data-toggle="modal"  data-target="#basketModal" style={{backgroundColor: '#007bff', color: '#fff'}}>
        Basket <img src="glyph-iconset-master/svg/si-glyph-trolley-2.svg" style={{width: 25 + 'px', height: 25+'px', color: '#fff'}}/>
        <span className="badge badge-success">3</span>
      </button>
    );
  }
}

export default BasketButton;