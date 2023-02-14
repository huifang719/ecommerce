import React, { useState } from "react";
import { Navbar, Nav, Form, FormControl, Button, Container } from "react-bootstrap";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import {
  FaFacebook, FaInstagram, FaTwitter,
} from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';

const NavigationBar: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Navbar bg="light" expand="lg" expanded={expanded}>
      <Container fluid>
        <Navbar.Brand href="#home">E-Commerce Website</Navbar.Brand>
        <Navbar.Toggle onClick={() => setExpanded(expanded ? false : true)} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/">Home</Nav.Link>
            <Nav.Link onClick={() => setExpanded(false)} href="#products">Products</Nav.Link>
            <Nav.Link onClick={() => setExpanded(false)} as={Link} to="./members">Members</Nav.Link>
          </Nav>
          <Form className="d-inline-flex">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
          <IconContext.Provider value={{ size: '1.5rem', color: 'black' }}>
          <Breadcrumb className="justify-content-end">
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
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
