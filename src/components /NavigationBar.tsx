import React, { useState } from "react";
import { Navbar, Nav, Form, FormControl, Button, Container, Row, Col } from "react-bootstrap";
import {
  FaFacebook, FaInstagram, FaTwitter, FaCartArrowDown
} from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import "../App.css"

const NavigationBar: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Navbar bg="light" expand="lg" expanded={expanded}>
      <Container fluid>
        <Navbar.Brand href="#home">Bookish</Navbar.Brand>
        <Navbar.Toggle onClick={() => setExpanded(expanded ? false : true)} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-space-evenly" >
            <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/">Home</Nav.Link>
            <Nav.Link onClick={() => setExpanded(false)} href="#products">Products</Nav.Link>
            <Nav.Link onClick={() => setExpanded(false)} as={Link} to="./members">Members</Nav.Link>
          </Nav>
          <Form className="d-inline-flex search">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
            <Row>
              <Col xs={8} lg={6} md={6} className="cart">
                <IconContext.Provider value={{ size: '2.5rem', color: 'black' }}>
                  <FaCartArrowDown href="/" />
                </IconContext.Provider>
              </Col>
              <Col xs={4} lg={6} md={6} style={{alignSelf: "flex-end"}} >
                <Container className="social">
                  <IconContext.Provider value={{ size: '1rem', color: 'black' }}>
                    <Col>
                      <a href="./"><FaFacebook /></a>
                    </Col>
                    <Col>
                      <a href="https://www.instagram.com/lightstory_photography/"><FaInstagram /></a>
                    </Col>
                    <Col>
                      <a href="https://twitter.com/Lightstory_foto"><FaTwitter /></a>
                    </Col>
                  </IconContext.Provider>
                </Container>
              </Col>
            </Row>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
