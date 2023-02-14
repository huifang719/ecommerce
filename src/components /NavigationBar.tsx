import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import {
  FaFacebook, FaInstagram, FaTwitter,
} from 'react-icons/fa';
import { IconContext } from 'react-icons';

const NavigationBar: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">E-Commerce Website</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#products">Products</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
        </Nav>
        <Form className="d-inline-flex">
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
        <IconContext.Provider value={{ size: '1.5rem', color: 'black' }}>
        <Breadcrumb>
          <Breadcrumb.Item href="/">
            <FaFacebook />
          </Breadcrumb.Item>
          <Breadcrumb.Item href="https://github.com/huifang719">
            <FaInstagram />
          </Breadcrumb.Item>
          <Breadcrumb.Item href="https://www.linkedin.com/in/liviagu/">
            <FaTwitter />
          </Breadcrumb.Item>
        </Breadcrumb>
      </IconContext.Provider>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
