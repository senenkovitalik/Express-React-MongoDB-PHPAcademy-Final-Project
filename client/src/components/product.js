import React from 'react';
import $ from 'jquery';
import {
  Container,
  Row,
  Col,
  Button,
  Table
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    const imgGalleryItems = this.props.product.imgs.map((img, index) => {
      return  <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                <img className="d-block w-100" src={`/${img}`} alt="Carousel" />
              </div>
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
      return <img key={index} src={`/${img}`} className="w-100 mb-1" alt={this.props.product.name} />;
    });

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
                  <strong>{this.props.product.price} {this.props.product.currency}</strong>
                  <Row className="justify-content-center">
                    <Col xs="12" lg="6" className="mb-2">
                      <Button onClick={this.handleClick} color="success" block disabled={this.props.inBasket}>
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i> Buy
                      </Button>
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
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    {imgGalleryItems}
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>

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