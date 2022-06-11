import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './TopNavigason.css'

const TopNavigason = () => {
    return (
        <div>
            <Navbar fixed='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand className='nav-titel'>NURUL HUDA</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    </Nav>
    <Nav>
      <Nav.Link href="#deets">HOME</Nav.Link>
      <Nav.Link href="#deets">ABOUT</Nav.Link>
      <Nav.Link href="#deets">SERVICES</Nav.Link>
      <Nav.Link href="#deets">SKILLS</Nav.Link>
      <Nav.Link href="#deets">PORTFOLIO</Nav.Link>
      <Nav.Link href="#deets">CONTACT</Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default TopNavigason;