import React, { Component } from "react";
import { Link } from "react-router-dom";
import RouteNavItem from "./components/RouteNavItem";
import { Nav, Navbar } from "react-bootstrap";
import "./App.css";
import Routes from "./Routes";

class App extends Component {
render() {
  return (
    <div className="App container">
      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Home Page</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <RouteNavItem href="/signup">Signup</RouteNavItem>
            <RouteNavItem href="/login">Login</RouteNavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
    </div>
  );
}
}

export default App;
