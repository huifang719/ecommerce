import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Products from './Products';

const ProductList: React.FC = () => {
  return (
    <div className="d-flex flex-wrap">
      {Products.map((product) => (
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
    </div>
  );
};

export default ProductList; 



