import React from "react";
import { Carousel, Item, Caption } from "react-bootstrap";

const CarouselComp = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.codingblocks.com/img/eoss-banner.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="text-dark">First slide label</h3>
          <p className="text-dark">
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.codingblocks.com/img/NPB-BANNER%20copy-5%20-%20java.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className="text-dark">Second slide label</h3>
          <p className="text-dark">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.codingblocks.com/img/live-banner-june.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className="text-dark">Third slide label</h3>
          <p className="text-dark">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComp;
