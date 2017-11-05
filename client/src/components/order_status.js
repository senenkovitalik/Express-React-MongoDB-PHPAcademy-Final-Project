import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Link
} from 'react-router-dom';

const OrderStatus = (props) => {
  return (
    <Container>
      <Row className="mt-3">
        <Col sm="12" className="text-center">
          {
            props.orderSaved
              ? (
                  <div>
                    <h2>Congratulations!</h2>
                    <p>You order successfully added. The operator will contact
                      you shortly</p>
                  </div>
                )
              : (
                <div>
                  <h2>Ooops! Something happens(</h2>
                  <p>Failed to process you order. We apologize for the
                    inconvenience. Please, try later.</p>
                </div>
              )
          }
          <Link to="/">Back to shopping</Link>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderStatus;