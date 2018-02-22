import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import RouteNavItem from "./components/RouteNavItem";
import { Nav, NavItem, Navbar, Badge } from "react-bootstrap";
import "./App.css";
import Routes from "./Routes";
import { authUser, signOutUser } from "./libs/awsLib";
import Footer from "./components/Footer";

class App extends Component {
  constructor(props) {
  super(props);

  this.state = {
    isAuthenticated: false,
    isAuthenticating: true,
    userEmail: "", 
  };
}

userHasAuthenticated = (authenticated, test) => {
  this.setState({ isAuthenticated: authenticated });
  this.setState({ userEmail: test});
}

handleLogout = event => {
  signOutUser();
  this.userHasAuthenticated(false);
  this.props.history.push("/login");
}

async componentDidMount() {
  try {
    if (await authUser()) {
      this.userHasAuthenticated(true, sessionStorage.getItem('currentUserEmail'));
    }
  }
  catch(e) {
    alert(e);
  }

  this.setState({ isAuthenticating: false });
}

render() {
  const childProps = {
    isAuthenticated: this.state.isAuthenticated,
    userHasAuthenticated: this.userHasAuthenticated, 
    userEmail: this.userEmail,
  };

  return (
    !this.state.isAuthenticating &&
    <div className="App container">
      <Navbar fluid collapseOnSelect>
        <Nav pullLeft>
          {this.state.isAuthenticated
            ? [
                <RouteNavItem key={1} href="/dashboard">
                  Dashboard
                </RouteNavItem>,
                <RouteNavItem key={2} href="/game">
                  Play Game
                </RouteNavItem>,
                <RouteNavItem key={3} href="/leaderboard">
                  Leaderboard
                </RouteNavItem>,
              ]
            : <Navbar.Brand>
                <Link to="/">Finance Game</Link>
              </Navbar.Brand>
          }
          </Nav>
          <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav pullRight>
            {this.state.isAuthenticated
              ? [
                  <Navbar.Text>
                    Logged in as: <b>{this.state.userEmail} <Badge>12</Badge></b>
                  </Navbar.Text>, 
                  <Navbar.Text>
                    |
                  </Navbar.Text>, 
                  <NavItem onClick={this.handleLogout}>
                    Logout
                  </NavItem>
                ]
              : [
                  <RouteNavItem key={4} href="/about">
                    About
                  </RouteNavItem>,
                  <RouteNavItem key={5} href="/signup">
                    Signup
                  </RouteNavItem>,
                  <RouteNavItem key={6} href="/login">
                    Login
                  </RouteNavItem>
                ]}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes childProps={childProps} />
      <Footer />
    </div>
  );
}
}

export default withRouter(App);
