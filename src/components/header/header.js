import React from "react";
// import NavItem from "../navItem/navitem";
// import "./header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
export default class Header extends React.Component {
  render() {
    return (
      <>
        {/* {this.props.data} */}
        {/* <ul>
          <NavItem name="Home" path="https://www.google.com/" />
          <NavItem name="News" path="https://www.bbc.com/news" />
          <NavItem name="Contact" path="https://twitter.com/" />
          <NavItem name="About" path="https://www.amazon.com/" />
        </ul> */}
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">Movie App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {/* <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Tv</Nav.Link>
                <Nav.Link href="#link">About</Nav.Link>
                <Nav.Link href="#link">ContactUs</Nav.Link> */}
                <NavLink
                  className="nav-link"
                  to="/"
                  style={({ isActive }) => {
                    return {
                      backgroundColor: isActive ? "blue" : "",
                      color:isActive?'white':""
                    };
                  }}
                >
                  Home
                </NavLink>
                <NavLink className="nav-link" to="/movie">
                  Movie
                </NavLink>
                <NavLink className="nav-link" to="/movieshow">
                  MovieShow
                </NavLink>
                <NavLink className="nav-link" to="/tv">
                  Tv
                </NavLink>
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
                <NavLink className="nav-link" to="/contact">
                  ContactUs
                </NavLink>
                <NavLink className="nav-link justify-content-end" to="/join">
                  JoinUs
                </NavLink>
                {/* <Link to='/' className="nav-link">Home</Link>
                <Link to='/movie' className="nav-link">Movie</Link>
                <Link to='/tv' className="nav-link">Tv</Link>
                <Link to='/about' className="nav-link">About</Link>
                <Link to='/contact' className="nav-link">ContactUs</Link>
                <Link to='/signup' className="nav-link">Signup</Link> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}
