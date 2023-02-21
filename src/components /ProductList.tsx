import React from 'react';
import { Card, Button, Container, Image, OverlayTrigger, Popover, Row } from 'react-bootstrap';
import { FaCartPlus } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import {TrendingBooks, classicBooks} from './Products';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';

const ProductList: React.FC = () => {
  
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    pauseOnHover: true,
    centerPadding: "10px",
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container className="pt-1">
      <IconContext.Provider value={{ size: '1rem', color: 'black' }}>
        <Row>
          <h6 style={{ textAlign: 'center' }}>Trending Books</h6>
          <Slider {...settings} >
            {TrendingBooks.map((product, index) => (
            <Container key={index} style={{width: "120px", height: "auto"}} >
              <OverlayTrigger 
                trigger="click" 
                placement="bottom" 
                overlay={
                  <Popover id="popover-basic" className='d-inline-flex'>
                    <h6>${product.price}</h6>
                    <Button style={{backgroundColor:"transparent"}}><FaCartPlus /></Button>
                  </Popover>
                }>
                <Image fluid
                  src={product.imageUrl} 
                  height={200} 
    
                />
              </OverlayTrigger>
            </Container> 
            ))}        
          </Slider>
        </Row>
        <Row>
          <h6 style={{ textAlign: 'center' }}>Classic</h6>
          <Slider {...settings} >
            {classicBooks.map((product, index) => (
            <Container key={index} style={{width: "120px", height: "auto"}} >
              <OverlayTrigger 
                trigger="click" 
                placement="bottom" 
                overlay={
                  <Popover id="popover-basic" className='d-inline-flex'>
                    <h6>${product.price}</h6>
                    <Button style={{backgroundColor:"transparent"}}><FaCartPlus /></Button>
                  </Popover>
                }>
                <Image fluid
                  src={product.imageUrl} 
                  height={200} 
    
                />
              </OverlayTrigger>
            </Container> 
            ))}        
          </Slider>
        </Row>  
        
      </IconContext.Provider>
    </Container>
  );
};

export default ProductList; 



