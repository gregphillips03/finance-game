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

class ActionFormatter extends React.Component {
  render() {
    return (
      <button className='btn btn-info'>Action</button>
    );
  }
}

function actionFormatter(cell, row) {
  return <ActionFormatter />;
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
      lastPage: <i className='glyphicon glyphicon-step-forward' />, 
      printToolBar: true,
      clearSearch: false,
      defaultSortName: 'level',
      defaultSortOrder: 'desc',
      noDataText: "Your Search Parameters are weak...",
    };

    return (
      <BootstrapTable data={ userdata } 
      				  bordered={ false } 
      				  hover={ true }
      				  options={ tableOptions}
      				  search={ true }
      				  searchPlaceholder="Search User Name or Level.."
      				  exportCSV={ true }
      				  pagination>
      	  <TableHeaderColumn dataField='img' width='15%' 
      	  					 searchable={ false }
      	  					 export={ false }
      	  					 dataFormat={makeDefaultImage}>Avatar</TableHeaderColumn>
      	  <TableHeaderColumn dataField='level' width='10%' 
      	  					 dataFormat={integerFormatter}
      	  					 dataSort={true}>Level</TableHeaderColumn>
          <TableHeaderColumn dataField='username' 
          					 width='30%' 
          					 isKey={ true } 
          					 searchable={ true }
          					 dataFormat={userNameFormatter}>Username</TableHeaderColumn>
          <TableHeaderColumn dataField='alltime'
          					 searchable={ false }
          					 dataSort={true}>All Time XP</TableHeaderColumn>
          <TableHeaderColumn dataField='recent'
          					 searchable={ false }
          					 dataSort={true}>Recent XP</TableHeaderColumn>
          <TableHeaderColumn dataField='action' dataFormat={ actionFormatter } export={ false }>Action</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}