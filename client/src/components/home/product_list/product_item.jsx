import React from 'react';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';

const iconStyle = {
  fontSize: 1.1 + 'rem'
};

const ProductItem = (props) => {
    return (
      <Card className="customCard">
        <CardBody className="d-flex flex-column">
          <CardImg top src={`/${props.product.imgs[0]}`} alt={props.product.name}/>
          <CardTitle>{props.product.name} {props.product.model}</CardTitle>
          <CardText>
            {props.product.description.substr(0, 100)+'...'}
            <Link to={`/product/${props.product.name}/${props.product.model}`}>Detail</Link>
          </CardText>
          <div className="mt-auto">
            <span className="productPrice">${props.product.price}</span>
            {
              props.inBasket
                ? <Button color="success"
                          tag={Link}
                          to={{
                            pathname: '/basket',
                            state: { modal: true }
                          }}
                          className='float-right priceButton'
                  ><i className="fa fa-shopping-cart"
                      aria-hidden="true"
                      style={iconStyle}/> To basket</Button>
                : <Button color="success"
                          onClick={() => props.addToBasket({ product: props.product, count: 1 })}
                          className='float-right priceButton'
                  >Buy</Button>
            }
          </div>
        </CardBody>
      </Card>
    );
}





export default ProductItem;