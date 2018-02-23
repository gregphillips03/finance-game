import React from "react";
import "./Goodbye.css";
import YodaMad from "../images/yoda-mad.gif";
import { Label } from "react-bootstrap"; 

export default () =>
  <div className="Goodbye">
    <h3>If Logout you must, sorry to see you go we are...</h3>
    <div className="logout-bucket">
    	<img src={YodaMad} className="yoda-mad" alt="mad yoda" />
    </div>
    <h3>Come back and <Label bsStyle="danger">fight</Label> you will...</h3>
  </div>;