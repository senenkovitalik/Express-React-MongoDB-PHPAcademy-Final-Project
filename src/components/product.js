import React from 'react';
import $ from 'jquery';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inBasket: this.props.inBasket
    };

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
    this.props.add(this.props.product);
    this.setState({
      inBasket: true
    });
  }

  render() {
    const imgGalleryItems = this.props.product.imgList.map((img, index) => {
      return <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
        <img className="d-block w-100" src={img} alt="Carousel" />
      </div>;
    });
    const description = this.props.product.description.map((paragraph, index) => {
      return <p key={index}>{paragraph}</p>;
    });
    const characteristics = this.props.product.characteristics.map((item, index) => {
      return <tbody key={index}>
        <tr>
          <td colSpan="2" className="table-info text-center"><strong>{item.header}</strong></td>
        </tr>
        {
          item.props.map((pair, index) => {
            return <tr key={index}>
              <td className="d-inline-block col-4">{pair.name}</td>
              <td className="d-inline-block col-8">{pair.value}</td>
            </tr>;
          })
        }
        </tbody>
    });

    const images = this.props.product.imgList.map((img, index) => {
      return <img key={index} src={img} className="w-100 mb-1" alt="Product" />;
    });

    return (
      <div className="container-fluid">

        <div className="row">
          <div className="col-12">
            <h1>{this.props.product.name}</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-lg-5 col-xl-6 order-lg-2 mb-2">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-7 text-center">
                <div className="px-1" style={{fontSize: 1.3+'rem', backgroundColor: '#fff3b5'}}>
                  <strong>{this.props.product.price} {this.props.product.currency}</strong>
                  <div className="row justify-content-center">
                    <div className="col-12 col-lg-6 mb-2">
                      <button onClick={this.handleClick} type="button" className={`btn btn-success ${this.state.inBasket ? "disabled" : ""} btn-block`}>
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i> Buy
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-7 col-xl-6 order-lg-1">
            <nav className="nav nav-pills flex-column flex-sm-row" id="myTabs" role="tablist">
              <a className="flex-sm-fill text-sm-center nav-link active" href="#overview" role="tab" data-toggle="tab">Overview</a>
              <a className="flex-sm-fill text-sm-center nav-link" href="#characteristic" role="tab" data-toggle="tab">Characteristic</a>
              <a className="flex-sm-fill text-sm-center nav-link" href="#photos" role="tab" data-toggle="tab">Photos</a>
              <a className="flex-sm-fill text-sm-center nav-link" href="#comments" role="tab" data-toggle="tab">Comments</a>
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

                {description}

              </div>
              <div className="tab-pane" id="characteristic" role="tabpanel">
                <table className="table table-sm">
                  {characteristics}
                </table>
              </div>
              <div className="tab-pane" id="photos" role="tabpanel">
                {images}
              </div>
              <div className="tab-pane" id="comments" role="tabpanel">
                <ul className="list-unstyled mt-3">
                  <li className="media">
                    <img className="d-flex" src="img/comment-icon.png" alt="Avatar" />
                    <div className="media-body">
                      <h5 className="mt-0 mb-1">Senenko Vitaliy</h5>
                      I wanna to buy this guitar. It's awesome!

                      <div className="media mt-3">
                        <a className="d-flex pr-3" href="#">
                          <img src="img/comment-icon.png" alt="Generic placeholder"/>
                        </a>
                        <div className="media-body">
                          <h5 className="mt-0">Media heading</h5>
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras
                          purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
                          vulputate fringilla. Donec lacinia congue felis in faucibus.
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="media">
                    <img className="d-flex" src="img/comment-icon.png" alt="User avatar" />
                    <div className="media-body">
                      <h5 className="mt-0 mb-1">Senenko Vitaliy</h5>
                      But I don't have money(
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;