import React from "react";
import Carousel from "react-bootstrap/Carousel";
import imgCarouselFirst from "../../../images/1.jpg";
import imgCarouselSecond from "../../../images/2.jpg";
import imgCarouselThird from "../../../images/3.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imgCarouselFirst}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imgCarouselSecond}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imgCarouselThird}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Hero;
