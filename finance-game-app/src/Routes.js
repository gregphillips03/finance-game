import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import NotFound from "./containers/NotFound";
import Goodbye from "./containers/Goodbye";
import AppliedRoute from "./components/AppliedRoute";
import Signup from "./containers/Signup";
import Dashboard from "./containers/Dashboard"; 
import Leaderboard from "./containers/Leaderboard";
import Game from "./containers/Game"; 

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path="/login" exact component={Login} props={childProps} />
    <AppliedRoute path="/signup" exact component={Signup} props={childProps} />
    <AppliedRoute path="/dashboard" exact component={Dashboard} props={childProps} />
    <AppliedRoute path="/leaderboard" exact component={Leaderboard} props={childProps} />
    <AppliedRoute path="/game" exact component={Game} props={childProps} />
    <AppliedRoute path="/logout" exact component={Goodbye} props={childProps} />
    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>;