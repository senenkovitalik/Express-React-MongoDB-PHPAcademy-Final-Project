import React from 'react';
import './top_button.css';

class ScrollToTopButton extends React.Component {
  constructor() {
    super();

    this.state = {
      intervalId: 0,
      display: 'none'
    };

    this.scrollStep = this.scrollStep.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    let display = "none";

    if (
      document.body.scrollTop > 600
      || document.documentElement.scrollTop > 600
    ) {
      display = "block"
    } else {
      display = "none";
    }

    this.setState({
      display: display
    });
  }

  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  scrollToTop() {
    let intervalId = setInterval(this.scrollStep, this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  }

  render() {
    return (
      <button onClick={this.scrollToTop}
              id="myBtn"
              title="Go to top"
              style={{ display: this.state.display }}>Top</button>
    )
  }
}






export default ScrollToTopButton;