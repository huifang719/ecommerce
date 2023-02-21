import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { bookInventroy } from './Products';
import { FaCartPlus } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const Details: React.FC = () => {
  const id = useParams().id
  const displayBook = bookInventroy.filter(book => book.OLID === id)[0]
  const addToCart = () => {
    console.log(displayBook.OLID)
  }
  return (
    <Container>
      <IconContext.Provider value={{ size: '3rem', color: 'black' }}>
        <Row>
          <Col xs={12} md={6} xl={6} >
            <Image src={displayBook.imageUrl} />
          </Col>
          <Col xs={12} md={6} xl={6} >
            <h5>{displayBook.name}</h5>
            <h6>{displayBook.author}</h6>
            <p>Author: {displayBook.description}</p>
            <p>$ {displayBook.price}</p>
            <FaCartPlus onClick={addToCart} />
          </Col>
        </Row>
      </IconContext.Provider>
    </Container>
  )
}

export default Details;