import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./slides.css";

class Slides extends React.Component {
  state = {
    index: 0,
    direction: null
  };

  handleSelect = (selectedIndex, e) => {
    this.setState({ index: selectedIndex, direction: e.direction });
  };
  render() {
    const { index, direction } = this.state;

    return (
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}>
        <Carousel.Item>
          <img className="d-block w-100 bck" />
          <Carousel.Caption>
            <div className="carousel-caption text-left">
              <h1>Example headline.</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis
                dolor dictum, tempus arcu quis, eleifend dui.
              </p>
              <p>
                <a className="btn btn-lg btn-primary" href="#" role="button">
                  Sign up today
                </a>
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 bck" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 bck" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
export default Slides;
