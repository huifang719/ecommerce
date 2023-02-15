import React, { useState } from 'react'
import { Form, Button }from 'react-bootstrap';

interface FormState {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };
  const handleSignIn = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    console.log(formState)
  }

  return (
    <>
      <Form onSubmit={handleSignIn}>
        <Form.Text style={{ fontSize: '2rem'}}>Sign In</Form.Text>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" value={formState.email} onChange={handleInputChange} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" value={formState.password} onChange={handleInputChange} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign In
        </Button>
      </Form>
    </>
  )
}

export default SignIn