import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const Carousel = (props) => <UncontrolledCarousel items={props.items}
                                                  indicators={true}
                                                  controls={true} />;

export default Carousel;