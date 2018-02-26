import React from "react";
import "./NotFound.css";
import Vader from "../images/avatars/vader-helmet.png";
import { Label } from "react-bootstrap"; 


export default () =>
  <div className="NotFound">
    <h3>I find your lack of navigation disturbing...</h3>
    <div className="error-bucket">
    	<img src={Vader} className="error" alt="404 Error" />
    </div>
    <h3>The <Label>404</Label> is strong in you</h3>
  </div>;