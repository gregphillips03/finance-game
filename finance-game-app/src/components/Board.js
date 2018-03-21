import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { userdata } from '../data/user-data';
import { Label } from "react-bootstrap"; 
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

function imageFormatter(cell, row){
  return (<img style={{width:80}} src={cell}/>)
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
      	  <TableHeaderColumn dataField='img' dataFormat={imageFormatter}>Avatar</TableHeaderColumn>
      	  <TableHeaderColumn dataField='level' dataFormat={integerFormatter}>Level</TableHeaderColumn>
          <TableHeaderColumn dataField='username' isKey={ true } dataFormat={userNameFormatter}>Username</TableHeaderColumn>
          <TableHeaderColumn dataField='alltime'>All Time XP</TableHeaderColumn>
          <TableHeaderColumn dataField='recent'>Recent XP</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}