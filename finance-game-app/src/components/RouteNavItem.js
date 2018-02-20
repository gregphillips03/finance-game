/*

This is doing a couple of things here:

We look at the href for the NavItem and check if there is a match.
React-Router passes in a match object in case there is a match. 
We use that and set the active prop for the NavItem.
React-Router also passes us a history object. 
We use this to navigate to the new page using history.push.

*/

import React from "react";
import { Route } from "react-router-dom";
import { NavItem } from "react-bootstrap";

export default props =>
  <Route
    path={props.href}
    exact
    children={({ match, history }) =>
      <NavItem
        onClick={e => history.push(e.currentTarget.getAttribute("href"))}
        {...props}
        active={match ? true : false}
      >
        {props.children}
      </NavItem>}
  />;