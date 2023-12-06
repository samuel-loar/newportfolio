
import React,  { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

//import Img from './Img'
const image1 = require( './blog-shot.png');
const image2 = require('./ReactAppImg-modified.png')
const image3 = require('./snakegame-shot-modified (1).png')


function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel  activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item style={{"textAlign": "center"}}>
        <img 
            src={image1}
            alt="trying"
            className={"carousel-img"}
        />
      </Carousel.Item>
      <Carousel.Item style={{"textAlign": "center"}}>
      <img 
            src={image2}
            alt="trying"
            className={"carousel-img"}
        />
      </Carousel.Item>
      <Carousel.Item style={{"textAlign": "center"}}>
        <img 
            src={image3}
            alt="trying"
            className={"carousel-img"}
        />
      </Carousel.Item>
    </Carousel>
  );
}


export default ControlledCarousel;