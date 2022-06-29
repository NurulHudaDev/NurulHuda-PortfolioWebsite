import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../Logo/my logo.png'
import './TopNavigason.css'

const TopNavigason = () => {

return (
  <div>
    <Navbar className="nav-bg" fixed='top' collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand className='nave d-flex align-items-center' as={Link} to='/'><img src={Logo} alt='' width="40" height="40" className="d-inline-block align-text-top" /> NURUL HUDA</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link as={Link} to='/'>HOME</Nav.Link>
            <Nav.Link as={Link} to='about'>ABOUT</Nav.Link>
            <Nav.Link as={Link} to='servics'>SERVICES</Nav.Link>
            <Nav.Link as={Link} to='skills'>SKILLS</Nav.Link>
            <Nav.Link as={Link} to='my-project'>PORTFOLIO</Nav.Link>
            <Nav.Link as={Link} to='contact-section'>CONTACT</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
);
};

export default TopNavigason;