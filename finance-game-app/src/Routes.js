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
import Faction from "./containers/Faction";
import Arena from "./containers/Arena"; 
import LightningRound from "./containers/LightningRound"; 
import LightningContainer from "./containers/LightningContainer";
import Campaign from "./containers/Campaign"; 
import Crafting from "./containers/Crafting";
import Inventory from "./containers/Inventory";
import Endor from "./containers/Endor";
import Voss from "./containers/Voss"; 
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute"; 

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <UnauthenticatedRoute path="/login" exact component={Login} props={childProps} />
    <UnauthenticatedRoute path="/signup" exact component={Signup} props={childProps} />
    <AuthenticatedRoute path="/dashboard" exact component={Dashboard} props={childProps} />
    <AuthenticatedRoute path="/leaderboard" exact component={Leaderboard} props={childProps} />
    <AuthenticatedRoute path="/game" exact component={Game} props={childProps} />
    <UnauthenticatedRoute path="/logout" exact component={Goodbye} props={childProps} />
    <AuthenticatedRoute path="/faction" exact component={Faction} props={childProps} />
    <AuthenticatedRoute path="/game/endor" exact component={Endor} props={childProps} />
    <AuthenticatedRoute path="/game/endor/arena" exact component={Arena} props={childProps} />
    <AuthenticatedRoute path="/game/endor/lightning" exact component={LightningRound} props={childProps} />
    <AuthenticatedRoute path="/game/endor/lightning/go" exact component={LightningContainer} props={childProps} />
    <AuthenticatedRoute path="/game/endor/campaign" exact component={Campaign} props={childProps} />
    <AuthenticatedRoute path="/game/voss" exact component={Voss} props={childProps} />
    <AuthenticatedRoute path="/game/voss/arena" exact component={Arena} props={childProps} />
    <AuthenticatedRoute path="/game/voss/lightning" exact component={LightningRound} props={childProps} />
    <AuthenticatedRoute path="/game/voss/lightning/go" exact component={LightningContainer} props={childProps} />
    <AuthenticatedRoute path="/game/voss/campaign" exact component={Campaign} props={childProps} />
    <AuthenticatedRoute path="/dashboard/crafting" exact component={Crafting} props={childProps}/>
    <AuthenticatedRoute path="/dashboard/inventory" exact component={Inventory} props={childProps}/>
    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>;