import React from 'react';
import { Card, Button } from 'react-bootstrap';

interface Product {
  id: number;
  name: string;
  author: string;
  price: number;
  imageUrl: string;
}

interface Props {
  products: Product[];
}

const ProductList: React.FC<Props> = ({ products }) => {
  return (
    <div className="d-flex flex-wrap">
      {products.map((product) => (
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



