import React from 'react';
import $ from 'jquery';
import {
  Container,
  Row,
  Col,
  Button,
  Table
} from 'reactstrap';
import {
  Link
} from 'react-router-dom';
import Carousel from './carousel';

class Product extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // We don't want to brake tabs and carousel)
    $(document).ready(function() {
      let activeTab = $('#myTabs a').filter('.active');
      $('#myTabs a').on('click', function(e) {
        e.preventDefault();
        activeTab.removeClass('active');
        $(activeTab.attr('href')).removeClass('active');
        activeTab = $(this);
        activeTab.addClass("active");
        $(activeTab.attr('href')).addClass('active');
      });
    });
  }

  handleClick() {
    this.props.add({ product: this.props.product, count: 1 });
  }

  render() {
    const items = this.props.product.imgs.map((img, index) => {
      return  { src: `/${img}`, altText: '', caption: '' }
    });

    const characteristics = this.props.product.prodProps.map((item, index) => {
      return  <tbody key={index}>
                <tr>
                  <td className="d-inline-block col-4">{item.name}</td>
                  <td className="d-inline-block col-8">{item.value}</td>
                </tr>
              </tbody>
    });

    const images = this.props.product.imgs.map((img, index) => {
      return <div key={index} className="text-center">
              <img key={index}
                  src={`/${img}`}
                  className="mb-1"
                  style={{width: 100+'%', height: 'auto'}}
                  alt={this.props.product.name} />
             </div>;
    });

    const iconStyle = {
      fontSize: 1.1 + 'rem'
    };

    const linkStyle= {fontSize: 0.8+'rem'};

    return (
      <Container fluid>

        <Row>
          <Col sm="12">
            <h1>{this.props.product.name} {this.props.product.model}</h1>
          </Col>
        </Row>

        <Row>
          <Col xs="12" lg="5" xl="6" className="order-lg-2 mb-2">
            <Row className="justify-content-center">
              <Col xs="12" lg="7" className="text-center">
                <div className="px-1" style={{fontSize: 1.3+'rem', backgroundColor: '#fff3b5'}}>
                  <strong>${this.props.product.price}</strong>
                  <Row className="justify-content-center">
                    <Col xs="12" lg="6" className="mb-2">
                      {
                        this.props.inBasket
                          ? <Button color="success"
                                    tag={Link}
                                    to={{
                                      pathname: '/basket',
                                      state: { modal: true }
                                    }}
                                    block
                                    className='priceButton'
                        ><i className="fa fa-shopping-cart"
                            aria-hidden="true"
                            style={iconStyle}/> To basket</Button>
                          : <Button color="success"
                                    block
                                    onClick={this.handleClick}
                                    className='priceButton'
                        >Buy</Button>
                      }
                      <Link to="/" style={linkStyle}>Back to products</Link>
                      <br />
                      {
                        this.props.inBasket &&
                        <Link to="/order_processing"
                              style={linkStyle}>To order processing</Link>
                      }
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Col>

          <Col xs="12" lg="7" xl="6" className="order-lg-1">
            <nav className="nav nav-pills flex-column flex-sm-row" id="myTabs" role="tablist">
              <a className="flex-sm-fill text-sm-center nav-link active" href="#overview" role="tab" data-toggle="tab">Overview</a>
              <a className="flex-sm-fill text-sm-center nav-link" href="#characteristic" role="tab" data-toggle="tab">Characteristic</a>
              <a className="flex-sm-fill text-sm-center nav-link" href="#photos" role="tab" data-toggle="tab">Photos</a>
            </nav>
            <div className="tab-content mt-2" id="tabContent">

              <div className="tab-pane active" id="overview" role="tabpanel">

                <Carousel items={items} />

                <p>{this.props.product.description}</p>

              </div>

              <div className="tab-pane" id="characteristic" role="tabpanel">
                <Table size="sm">
                  {characteristics}
                </Table>
              </div>

              <div className="tab-pane" id="photos" role="tabpanel">
                {images}
              </div>

            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}




export default Product;