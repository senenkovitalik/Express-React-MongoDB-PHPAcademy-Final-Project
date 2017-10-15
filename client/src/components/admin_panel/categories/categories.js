import React from 'react';
import {
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Table,
  ListGroup,
  ListGroupItem
} from 'reactstrap';
import AdminCategoryItem from './category_item';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import AddCategoryForm from "./add_category_form";
import ChangeCategoryForm from "./change_category_form";

class Categories extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const categories = [
      {
        name: 'Guitars',
        description: 'Some info about guitars category'
      },
      {
        name: 'Amps',
        description: 'Some info about guitars category'
      },
      {
        name: 'Strings',
        description: 'Some info about guitars category'
      },
      {
        name: 'Combos',
        description: 'Some info about guitars category'
      },
      {
        name: 'Effects',
        description: 'Some info about guitars category'
      }
    ];

    return (
      <div>

      <div className="d-flex flex-row align-items-center">
        <h4 style={{display: 'inline-block', marginRight: 15+'px'}}>List of categories</h4>
        <Button color="primary" size="sm">Add new</Button>
      </div>

        {/*<!-- Category list -->*/}
        <ListGroup style={{marginTop: 5+'px'}}>
          {categories.map((category, i) => {
            return <AdminCategoryItem key={i} category={category}/>;
          })}
        </ListGroup>

        {/* Add new category */}
        <AddCategoryForm />

        {/*<!-- Change existing category -->*/}
        <ChangeCategoryForm />

      </div>
    );
  }
}

export default Categories;