import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import Products from './Products';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductList: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container fluid className="pt-3">
      <h5 style={{ textAlign: 'center' }}>New Release</h5>
      <Slider {...settings}>
        {Products.map((product, index) => (
        <Card key={product.id} className="m-3" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={product.imageUrl} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.author}</Card.Text>
            <Card.Text>${product.price}</Card.Text>
            <Button variant="primary">Add to Cart</Button>
          </Card.Body>
        </Card>
      ))}
          
      </Slider>
    </Container>
  );
};

export default ProductList; 



