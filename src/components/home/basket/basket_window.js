import React from 'react';
import BasketProductItem from "./basket_product_item.js";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';

class BasketWindow extends React.Component {
  constructor(props) {
    super(props);

    this.hideModal = this.hideModal.bind(this);
  }

  hideModal() {
    $('#basketModal').modal('hide');
  }

  render() {

  }
}

export default BasketWindow;