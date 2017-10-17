import React from 'react';
import Categories from "./categories";
import $ from 'jquery';
import _ from 'lodash';

class CategoryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };

    this.makeAJAX = this.makeAJAX.bind(this);
    this.add = this.add.bind(this);
  }

  componentDidMount() {
    this.makeAJAX({
      method: 'GET',
      url: '/categories'
    }, res => this.setState({ categories: res }));
  }

  makeAJAX(obj, cb) {
    $.ajax({
      ...obj,
      contentType: "application/json; charset=utf-8", // VERY IMPORTANT PART OF REQUEST
    })
    .done(res => {
      cb(res);
    })
    .fail(err => {
      console.log(err);
    });
  }

  add(cat) {
    if (_.find(this.state.categories, { 'name': cat.name })) {
      this.props.flash({
        color: 'warning',
        message: `Sorry, but category ${cat.name} already exist( Try to change name to another.`
      });
    } else {
      this.makeAJAX({
        url: '/category',
        method: 'POST',
        data: JSON.stringify(cat) // VERY IMPORTANT PART OF REQUEST
      }, res => {
        console.log(res);

        let color = 'success';
        let message = `Category ${cat.name} successfully added.`;

        if (res.result) {
          this.setState({
            categories: _.concat(this.state.categories, cat)
          });
        } else {
          color = 'warning';
          message = `Sorry. Server problems.`;
        }

        this.props.flash({
          color: color,
          message: message
        });
      });

    }
  }

  render() {
    return (
      <Categories {...this.props} categories={this.state.categories} add={this.add} />
    );
  }
}

export default CategoryContainer;