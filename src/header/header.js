import React from 'react';
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './header.css';
import logo from '../logo.png';

export default function Header() {
  return (
    <header className="App-header">
      <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
        <Navbar.Brand href="#home">
          <div className="logo_header">
            <img src={logo} alt="Logo" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto orange">
            <Navbar.Brand>
              <Link style={{ color: '#f2711c' }} to="/">
                HOME
              </Link>
            </Navbar.Brand>
            <Navbar.Brand>
              <Link to="/about">ABOUT US</Link>
            </Navbar.Brand>
            <Navbar.Brand>
              <Link to="/projects">PROJECTS</Link>
            </Navbar.Brand>

            <Navbar.Brand>
              <Link to="/contact">CONTACT US</Link>
            </Navbar.Brand>
          </Nav>
          <Form inline="inline">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

// before 16.8 life cycle hooks .
// if your component functional based and u want to use life cy ... for that https://github.com/acdlite/recompose/blob/master/docs/API.md
// / u should use this lab... this one is old way. now we have react hook. (after 16.8)
