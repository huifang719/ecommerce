import React from 'react'
import { Form, Button }from 'react-bootstrap';

const SignUp: React.FC = () => {
  return (
    <>
      <Form>
        <Form.Text style={{ fontSize: '2rem'}}>Sign Up</Form.Text>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Comfirm Password</Form.Label>
          <Form.Control type="password" placeholder="Comfirm Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </>
  )
}

export default SignUp