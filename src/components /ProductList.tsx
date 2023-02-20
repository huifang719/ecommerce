import React from 'react';
import { Card, Button, Container, Image } from 'react-bootstrap';
import Products from './Products';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductList: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    pauseOnHover: true,
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
      <h6 style={{ textAlign: 'center' }}>Trending Books</h6>
      <Slider {...settings}>
        {Products.map((product, index) => (
        <Image 
          key={index}
          src={product.imageUrl} 
          height={200} />
      ))}
          
      </Slider>
    </Container>
  );
};

export default ProductList; 



