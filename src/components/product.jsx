import React from 'react';

class Product extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <nav className="breadcrumb w-100" style={{borderRadius: 0}}>
            <a className="breadcrumb-item" href="#">Home</a>
            <a className="breadcrumb-item" href="#">Guitars</a>
            <a className="breadcrumb-item" href="#">Electric</a>
            <span className="breadcrumb-item active">Gibson</span>
          </nav>
        </div>

        <div className="row">
          <div className="col-12">
            <h1>Gibson Les Paul</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-lg-5 col-xl-6 order-lg-2 mb-2">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-7 text-center">
                <div className="px-1" style={{fontSize: 1.3+'rem', backgroundColor: '#fff3b5'}}>
                  <strong>1500.00 USD</strong>
                  <div className="row justify-content-center">
                    <div className="col-12 col-lg-6 mb-2">
                      <button type="button" className="btn btn-success btn-block">
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i> Buy
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-7 col-xl-6 order-lg-1">
            <nav className="nav nav-pills flex-column flex-sm-row" role="tablist" id="myTabs">
              <a className="flex-sm-fill text-sm-center nav-link active" href="#overview" role="tab">Overview</a>
              <a className="flex-sm-fill text-sm-center nav-link" href="#characteristic" role="tab">Characteristic</a>
              <a className="flex-sm-fill text-sm-center nav-link" href="#photos" role="tab">Photos</a>
              <a className="flex-sm-fill text-sm-center nav-link" href="#comments" role="tab">Comments</a>
            </nav>
            <div className="tab-content mt-2" id="tabContent">
              <div className="tab-pane active" id="overview" role="tabpanel">
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img className="d-block w-100" src="img/lespaul.jpg" alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src="img/lp1.jpg" alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src="img/lp2.jpg" alt="Third slide"/>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src="img/lp3.jpg" alt="Third slide"/>
                    </div>
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

                <p>The <strong>Gibson Les Paul</strong> is a solid body electric guitar that was first sold by the Gibson
                  Guitar Corporation in 1952.[1] The Les Paul was designed by Gibson president Ted McCarty, factory manager
                  John Huis and their team, along with guitarist/inventor Les Paul.</p>
                <p>The Les Paul was originally offered with a gold finish and two P-90 pickups. In 1957, humbucking pickups
                  were added, along with sunburst finishes in 1958. The sunburst 1958–1960 Les Paul – today one of the
                  best-known electric guitar types in the world – was considered a failure, with low production and sales.
                  For 1961, the Les Paul was redesigned into what is now known as the Gibson SG. This design continued as a
                  separate guitar when the traditional single cutaway, carved top bodystyle was re-introduced in 1968. The
                  Les Paul has been continually produced in countless versions and editions since. Along with Fender's
                  Telecaster and Stratocaster, it was one of the first mass-produced electric solid-body guitars. Les Pauls
                  have been used in many genres, including rock, country, pop, soul, rhythm and blues, blues, jazz, reggae,
                  punk, and heavy metal.</p>
              </div>
              <div className="tab-pane" id="characteristic" role="tabpanel">
                <table className="table table-sm">
                  <tbody>
                  <tr>
                    <td colSpan="2" className="table-info text-center"><strong>Construction</strong></td>
                  </tr>
                  <tr>
                    <td className="d-inline-block col-4">Body type</td>
                    <td className="d-inline-block col-8">Solid, Single cut</td>
                  </tr>
                  <tr>
                    <td className="d-inline-block col-4">Neck joint</td>
                    <td className="d-inline-block col-8">Sent-in</td>
                  </tr>
                  <tr>
                    <td className="d-inline-block col-4">Scale</td>
                    <td className="d-inline-block col-8">24.75"</td>
                  </tr>
                  <tr>
                    <td colSpan="2" className="table-info text-center"><strong>Woods</strong></td>
                  </tr>
                  <tr>
                    <td className="d-inline-block col-4">Body</td>
                    <td className="d-inline-block col-8">Mahogany, Maple top</td>
                  </tr>
                  <tr>
                    <td className="d-inline-block col-4">Neck</td>
                    <td className="d-inline-block col-8">Mahogany</td>
                  </tr>
                  <tr>
                    <td className="d-inline-block col-4">Fretboard</td>
                    <td className="d-inline-block col-8">Ebony</td>
                  </tr>
                  <tr>
                    <td colSpan="2" className="table-info text-center"><strong>Hardware</strong></td>
                  </tr>
                  <tr>
                    <td className="d-inline-block col-4">Bridge</td>
                    <td className="d-inline-block col-8">Tune-o-matic</td>
                  </tr>
                  <tr>
                    <td className="d-inline-block col-4">Pickup(s)</td>
                    <td className="d-inline-block col-8">A Burstbucker 3 humbucker at the bridge, P-90H at the neck, and a
                      piezoelectric built into the bridge.
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div className="tab-pane" id="photos" role="tabpanel">
                <img src="img/lespaul.jpg" className="w-100 mb-1"/>
                <img src="img/lp1.jpg" className="w-100 mb-1"/>
                <img src="img/lp2.jpg" className="w-100 mb-1"/>
                <img src="img/lp3.jpg" className="w-100 mb-1"/>
              </div>
              <div className="tab-pane" id="comments" role="tabpanel">
                <ul className="list-unstyled mt-3">
                  <li className="media">
                    <img className="d-flex" src="img/comment-icon.png"/>
                    <div className="media-body">
                      <h5 className="mt-0 mb-1">Senenko Vitaliy</h5>
                      I wanna to buy this guitar. It's awesome!

                      <div className="media mt-3">
                        <a className="d-flex pr-3" href="#">
                          <img src="img/comment-icon.png" alt="Generic placeholder image"/>
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
                    <img className="d-flex" src="img/comment-icon.png"/>
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