import React from 'react';
import { Container, Image } from 'react-bootstrap';
import Products from './Products';



const SearchResults: React.FC = () => {

  return (
    <Container className="pt-1">
      <h6 style={{ textAlign: 'center' }}>Results</h6>
    
        {Products.map((product, index) => (
        <Container key={index} style={{width: "120px", height: "auto"}} >
          <Image fluid
            src={product.imageUrl} 
            height={200}  
           />
        </Container>
        
      ))}
          
      
    </Container>
  );
};

export default SearchResults; 



