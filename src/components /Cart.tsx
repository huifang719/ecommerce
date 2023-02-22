import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cartSlice from '../features/cartSlice';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { removeItem, updateItem } from '../features/cartSlice';

const Cart: React.FC = () => {
  const dispatch = useDispatch()
  const CartItems = useSelector((state: any) => state.cart.value)
  const totalItems = CartItems.reduce((total: number, item: any) => total + item.quantity, 0)
  const totalPrice = CartItems.reduce((total: number, item: any) => total + item.quantity * item.price, 0)
  console.log(totalItems)
  console.log(totalPrice)

  const handleRemove = (index: number) : void => {
    const itemId = CartItems[index].id
    dispatch(removeItem(itemId))
  }

  const handleDeduction = (index: number) : void => {
    const selectedBook = CartItems[index]
    dispatch(updateItem({id: selectedBook.OLID, name: selectedBook.name, imageUrl: selectedBook.imageUrl, quantity: selectedBook.quantity - 1, price: selectedBook.price}))
  }

  const handleAddition = (index: number) : void => {
    const selectedBook = CartItems[index]
    dispatch(updateItem({id: selectedBook.OLID, name: selectedBook.name, imageUrl: selectedBook.imageUrl, quantity: selectedBook.quantity + 1, price: selectedBook.price}))
  }

  return (
    <Container >
      <h5>Your Cart</h5>
      {CartItems&&CartItems.map((item: any, index: number) =>
      <Row 
        style={{height: "8rem", background:"#E6E3EB",marginBottom: 2}}
        key={index}>
        <Col xs={3} lg={1} md={1} >
          <Image src={item.imageUrl} style={{height: "8rem"}}/>
        </Col>
        <Col xs={7} lg={5} md={5}>
          <Row className='ps-8'>
            <Col>{item.name}</Col>
            <Col>
              <Button onClick={() => handleRemove(index) }>Remove Item</Button>
            </Col> 
          </Row>
          <h6>Price: ${item.price}</h6>
        </Col>
        <Col 
          xs={2} lg={5} md={5}
          className='d-inline-flex align-self-center'>
          <FaMinus className='align-self-center' onClick={()=> handleDeduction(index) } />
          <h5>{item.quantity}</h5>
          <FaPlus className='align-self-center' onClick={()=> handleAddition(index)} />
        </Col>
        
      </Row>)}
      <Row className='justify-content-end'>Total Price {totalPrice}</Row>
    </Container>
  )
}

export default Cart; 