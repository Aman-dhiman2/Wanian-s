import React from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from 'react-router-dom';
import './component.css'

const NavbarComponent = () => {
  return (
    <>
      <div className="navbar-shadow">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand to="/home">Wanian's</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto nav-item p-3 gap-3" >
                {/* <Nav.Link to="/home">Home</Nav.Link>
                <Nav.Link to="/about">About</Nav.Link>
                <Nav.Link to="/contact">Contact Us</Nav.Link> */}
                <Link
                  to="/"
                  className="nav-item"
                  onMouseOver={(e) => {
                    e.target.style.color = "#F7CCAC";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.color = "white";
                  }}
                  style={{
                    textDecoration: "none",
                    color: "white",
                    hover: "red",
                  }}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="nav-item"
                  onMouseOver={(e) => {
                    e.target.style.color = "#F7CCAC";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.color = "white";
                  }}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="nav-item"
                  onMouseOver={(e) => {
                    e.target.style.color = "#F7CCAC";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.color = "white";
                  }}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Contact Us
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        
        {/* upper side wave  */}
        <div className="upperWave"></div>
      </div>
    </>
  );
}

export default NavbarComponent