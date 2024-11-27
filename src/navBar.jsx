import React from 'react';
import { Navbar, Nav, Container, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navBar.css';

export default function NavBar() {
  return (
    <>
    <div className='mainBlue'>
        
        <div className="text1">
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height="15"
            width="20"><path fill="#ffffff" d="M80 0C44.7 0 16 28.7 16 64l0 384c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L80 0zm80 432l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
            </div>
            <div>(313) 550 778</div>  
        </div>
        <div className="text2">
        <div>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            height="15"
            width="20"
            aria-label="Email icon"
            className="me-2"
          >
            <path
              fill="#ffffff"
              d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
            />
          </svg>
        </div>
        <div>order@example.com</div> 
        </div>
        
    </div>
    <Navbar style={{ backgroundColor: '#F5FAFF' }} variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src="/neerob.png" alt="Neerob" style={{ height: '40px' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="txtCenter">
            <Nav.Link href="#menu">Menu</Nav.Link>
            <Nav.Link href="#reservation">Reservation</Nav.Link>
            <Nav.Link href="#catering">Catering</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
          </Nav>
          <div className="button-container">
            <Row>
              <Col xs={12} sm={6} md={6}>
                <Button variant="light" className="reserveButton">
                  RESERVATION
                </Button>
              </Col>
              <Col xs={12} sm={6} md={6}>
                <Button variant="light" className="ordBtn">
                  ORDER NOW
                </Button>
              </Col>
            </Row>
          </div>
        </Navbar.Collapse>
      </Container>
      <hr style={{height:'44px',zIndex:1}}/>
    </Navbar>
    <div className="navbar-line"></div>
    </>
  );
}
