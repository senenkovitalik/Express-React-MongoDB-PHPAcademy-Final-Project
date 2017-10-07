import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Categories extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-12 col-md-3 col-lg-2 order-md-1" id="categories">
        <div className="list-group" id="list-tab" role="tablist">
          <a href="#listCollapseGuitar" className="list-group-item list-group-item-success list-group-item-action" data-toggle="collapse" aria-expanded="false" aria-controls="collapseExample">Guitars <span className="oi oi-chevron-bottom float-right"></span></a>
          <div className="collapse" id="listCollapseGuitar">
            <a href="#" className="list-group-item list-group-item-action">Acoustic</a>
            <a href="#" className="list-group-item list-group-item-action">Electric</a>
            <a href="#" className="list-group-item list-group-item-action">Bass</a>
          </div>
          <a href="#listCollapseCombo" className="list-group-item list-group-item-success list-group-item-action" data-toggle="collapse" aria-expanded="false" aria-controls="collapseExample">Combos <span className="oi oi-chevron-bottom float-right"></span></a>
          <div className="collapse" id="listCollapseCombo">
            <a href="#" className="list-group-item list-group-item-action">Transistor</a>
            <a href="#" className="list-group-item list-group-item-action">Lamp</a>
            <a href="#" className="list-group-item list-group-item-action">Hybrid</a>
          </div>
          <a href="#listCollapseAmp" className="list-group-item list-group-item-success list-group-item-action" data-toggle="collapse" aria-expanded="false" aria-controls="collapseExample">Amps <span className="oi oi-chevron-bottom float-right"></span></a>
          <div className="collapse" id="listCollapseAmp">
            <a href="#" className="list-group-item list-group-item-action">Transistor</a>
            <a href="#" className="list-group-item list-group-item-action">Lamp</a>
            <a href="#" className="list-group-item list-group-item-action">Hybrid</a>
          </div>
          <a href="#" className="list-group-item list-group-item-success list-group-item-action">Cabinets</a>
          <a href="#listCollapseEffect" className="list-group-item list-group-item-success list-group-item-action" data-toggle="collapse" aria-expanded="false" aria-controls="collapseExample">Effects <span className="oi oi-chevron-bottom float-right"></span></a>
          <div className="collapse" id="listCollapseEffect">
            <a href="#" className="list-group-item list-group-item-action">Distortion</a>
            <a href="#" className="list-group-item list-group-item-action">Delay</a>
            <a href="#" className="list-group-item list-group-item-action">Reverb</a>
            <a href="#" className="list-group-item list-group-item-action">Wah-Wah</a>
            <a href="#" className="list-group-item list-group-item-action">Horus</a>
          </div>
          <a href="#listCollapseString" className="list-group-item list-group-item-success list-group-item-action" data-toggle="collapse" aria-expanded="false" aria-controls="collapseExample">Strings <span className="oi oi-chevron-bottom float-right"></span></a>
          <div className="collapse" id="listCollapseString">
            <a href="#" className="list-group-item list-group-item-action">Distortion</a>
            <a href="#" className="list-group-item list-group-item-action">Delay</a>
            <a href="#" className="list-group-item list-group-item-action">Reverb</a>
            <a href="#" className="list-group-item list-group-item-action">Wah-Wah</a>
            <a href="#" className="list-group-item list-group-item-action">Horus</a>
          </div>
          <a href="#" className="list-group-item list-group-item-success list-group-item-action">Picks</a>
        </div>
      </div>
    );
  }
}

export default Categories;