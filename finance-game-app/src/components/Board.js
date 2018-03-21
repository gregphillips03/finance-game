import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { userdata } from '../data/user-data';
import { Label } from "react-bootstrap";
import MaleFace1 from "../images/faces-male/A01.png"; 
import MaleFace2 from "../images/faces-male/A02.png"; 
import FemFace1 from "../images/faces-female/FA01.png";
import FemFace2 from "../images/faces-female/FA02.png"; 
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

var i = 0 ; 

function imageFormatter(cell, row){
  return (<img style={{width:80}} src={cell} className="leaderAvatar" alt="Avatar"/>)
}

function makeDefaultImage(cell, row){
	i = i + 1; 
	if( i > 4){
		i = 1;
	}
	if(i === 1){
		return (<img style={{width:80}} src={MaleFace1} className="leaderAvatar" alt="Avatar"/>)
	}
	else if (i === 2){
		return (<img style={{width:80}} src={MaleFace2} className="leaderAvatar" alt="Avatar"/>)
	}
	else if (i === 3){
		return (<img style={{width:80}} src={FemFace1} className="leaderAvatar" alt="Avatar"/>)
	}
	else{
		return (<img style={{width:80}} src={FemFace2} className="leaderAvatar" alt="Avatar"/>)
	}
}

function integerFormatter(cell, row){
	return(<b> {cell} </b>)
}

function userNameFormatter(cell, row){
	return(<Label bsStyle="info">{cell}</Label>)
}

export default class Board extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const tableOptions = {
      prePage: <i className='glyphicon glyphicon-chevron-left' />,
      nextPage: <i className='glyphicon glyphicon-chevron-right' />,
      firstPage: <i className='glyphicon glyphicon-step-backward' />,
      lastPage: <i className='glyphicon glyphicon-step-forward' />
    };
    return (
      <BootstrapTable data={ userdata } 
      				  bordered={ false } 
      				  hover={ true }
      				  options={ tableOptions}
      				  pagination>
      	  <TableHeaderColumn dataField='img' width='15%' dataFormat={makeDefaultImage}>Avatar</TableHeaderColumn>
      	  <TableHeaderColumn dataField='level' width='10%' dataFormat={integerFormatter}>Level</TableHeaderColumn>
          <TableHeaderColumn dataField='username' width='30%' isKey={ true } dataFormat={userNameFormatter}>Username</TableHeaderColumn>
          <TableHeaderColumn dataField='alltime'>All Time XP</TableHeaderColumn>
          <TableHeaderColumn dataField='recent'>Recent XP</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}