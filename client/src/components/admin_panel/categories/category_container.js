import React from 'react';
import Categories from "./categories";
import _ from 'lodash';

class CategoryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      catToChange: null
    };

    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
    this.choose = this.choose.bind(this);
    this.change = this.change.bind(this);
  }

  componentDidMount() {
    this.props.makeAJAX({
      method: 'GET',
      url: '/category/all'
    }, res => {
      this.setState({ categories: res.categories })
    });
  }

  add(cat) {
    if (_.find(this.state.categories, { 'name': cat.name })) {
      this.props.flash({
        color: 'warning',
        message: `Sorry, but category ${cat.name} already exist( Try to change name to another.`
      });
    } else {
      this.props.makeAJAX({
        url: '/category',
        method: 'POST',
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(cat) // VERY IMPORTANT PART OF REQUEST
      }, res => {
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

  remove(cat) {
    this.props.makeAJAX({
      method: 'DELETE',
      url: `/category/${cat.name}`
    }, res => {
      let color = 'success';
      let message = `Category ${cat.name} successfully removed.`;

      if (res.result) {
        this.setState({
          categories: _.without(this.state.categories, cat)
        });
      } else {
        color = 'warning';
        message = `Can't remove category ${cat.name} from DB. Server error.`;
      }

      this.props.flash({
        color: color,
        message: message
      });
    });
  }

  choose(cat) {
    this.setState({
      catToChange: cat
    });
  }

  change(cat) {
    this.props.makeAJAX({
      method: 'PUT',
      url: '/category',
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(cat)
    }, res => {
      
      console.log(res);

      let color = 'success';
      let message = `Category ${cat.name} successfully updated.`;

      if (res.result) {
        this.setState({
          categories: _.concat(_.without(this.state.categories, this.state.catToChange), cat),
          catToChange: cat
        });
      } else {
        color = 'warning';
        message = `Can't update category ${cat.name}. Server error.`;
      }

      this.props.flash({
        color: color,
        message: message
      });
    });
  }

  render() {
    return (
      <Categories
        {...this.props}
        categories={this.state.categories}
        add={this.add}
        remove={this.remove}
        choose={this.choose}
        change={this.change}
        catToChange={this.state.catToChange}
      />
    );
  }
}

export default CategoryContainer;