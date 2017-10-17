import React from 'react';
import {
  ListGroup,
  Button
} from 'reactstrap';
import {
  Link,
  Route,
  Redirect
} from 'react-router-dom';
import AdminCategoryItem from './category_item';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import AddCategoryForm from "./add_category_form";
import ChangeCategoryForm from "./change_category_form";

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: this.props.categories,
      fieldTypes: ['text', 'number']
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      categories: nextProps.categories
    });
  }

  render() {
    return (
      <div>
        <div className="d-flex flex-row align-items-center">
          <h4 style={{display: 'inline-block', marginRight: 15+'px'}}>List of categories</h4>
          <Button color="primary" size="sm" tag={Link} to={`${this.props.match.url}/add-new-category`}>Add new</Button>
        </div>

          {/*<!-- Category list -->*/}
          <ListGroup style={{marginTop: 5+'px'}}>
            {this.state.categories.map((category, i) => {
              return <AdminCategoryItem key={i} category={category} {...this.props} />;
            })}
          </ListGroup>

          {/* Add new category */}
          <Route
            path={`${this.props.match.url}/add-new-category`}
            render={() => <AddCategoryForm fieldTypes={this.state.fieldTypes} add={this.props.add} />}
          />

          {/*<!-- Change existing category -->*/}
          <Route
            path={`${this.props.match.url}/change-category`}
            render={() => (
              this.props.catToChange
                ? (<ChangeCategoryForm category={this.props.catToChange} fieldTypes={this.state.fieldTypes} change={this.props.change} />)
                : (<Redirect to={this.props.match.url} />)
            )}
          />
      </div>
    );
  }
}

export default Categories;