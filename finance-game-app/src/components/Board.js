import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { userdata } from '../data/user-data';
import { factiondata } from '../data/faction-data';
import { Label } from "react-bootstrap";
import getLevelImage from '../helpers/getLevelImage';
import getFactionImage from '../helpers/getFactionImage';
import Switch from 'react-toggle-switch'; 
import MaleFace1 from "../images/faces-male/A01.png"; 
import MaleFace2 from "../images/faces-male/A02.png"; 
import FemFace1 from "../images/faces-female/FA01.png";
import FemFace2 from "../images/faces-female/FA02.png"; 
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import '../../node_modules/react-toggle-switch/dist/css/switch.min.css'; 

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

function levelToImage(cell, row){
	return(<img src={getLevelImage(cell)} height="50" width="50" alt="level"/>)
}

function factionToImage(cell, row){
  return(<img src={getFactionImage(cell)} height="80" width="80" alt="faction" />)
}

function userNameFormatter(cell, row){
	return(<Label bsStyle="info">{cell}</Label>)
}

function factionNameFormatter(cell, row){
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
      this.state = {
        toggle: true,
      };
  }

  toggleSwitch = () => {
    this.setState(prevState => {
      return{
        toggle: !prevState.toggle
      };
    });
  };

  renderByPlayerLeaderBoard(){
    const tableOptions = {
      prePage: <i className='glyphicon glyphicon-chevron-left' />,
      nextPage: <i className='glyphicon glyphicon-chevron-right' />,
      firstPage: <i className='glyphicon glyphicon-step-backward' />,
      lastPage: <i className='glyphicon glyphicon-step-forward' />, 
      printToolBar: false,
      clearSearch: false,
      defaultSortName: 'level',
      defaultSortOrder: 'desc',
      noDataText: "Your Search Parameters are weak...\n Use the Force!",
      sizePerPageList: [ 10, 20, 30 ],
      sizePerPage: 10,
      hideSizePerPage: true, 
      paginationShowsTotal: true, 
      };
    return(
        <BootstrapTable data={ userdata } 
                bordered={ false } 
                hover={ true }
                options={ tableOptions}
                search={ true }
                searchPlaceholder="Search User Name or Level.."
                exportCSV={ true }
                csvFileName='LeaderBoard'
                ignoreSinglePage={ true }
                condensed
                pagination>
          <TableHeaderColumn dataField='img' width='15%' 
                     searchable={ false }
                     export={ false }
                     dataFormat={makeDefaultImage}>Avatar</TableHeaderColumn>
          <TableHeaderColumn dataField='level' width='15%' 
                     dataFormat={levelToImage}
                     headerAlign='center'
                     dataAlign='center'
                     dataSort={true}>Level</TableHeaderColumn>
          <TableHeaderColumn dataField='username' 
                     width='30%' 
                     headerAlign='center'
                     dataAlign='center'
                     isKey={ true } 
                     searchable={ true }
                     dataFormat={userNameFormatter}>Username</TableHeaderColumn>
          <TableHeaderColumn dataField='alltime'
                     searchable={ false }
                     headerAlign='center'
                     dataAlign='center'
                     dataSort={true}>All Time XP</TableHeaderColumn>
          <TableHeaderColumn dataField='recent'
                     searchable={ false }
                     headerAlign='center'
                     dataAlign='center'
                     dataSort={true}>Recent XP</TableHeaderColumn>
          <TableHeaderColumn dataField='action' 
                     dataFormat={ actionFormatter } 
                     headerAlign='center'
                     dataAlign='center'
                     export={ false }>Action</TableHeaderColumn>
      </BootstrapTable>
      );
  }

  renderByFactionLeaderBoard(){
    const tableOptions = {
      printToolBar: false,
      defaultSortName: 'alltime',
      defaultSortOrder: 'desc',
      };
    return(
        <BootstrapTable data={ factiondata } 
                bordered={ false } 
                hover={ true }
                options={ tableOptions}
                search={ false }
                exportCSV={ false }
                csvFileName='LeaderBoard-Faction'
                ignoreSinglePage={ true }>
          <TableHeaderColumn dataField='factionname' width='15%' 
                     searchable={ false }
                     export={ false }
                     dataFormat={factionToImage}>Avatar</TableHeaderColumn>
          <TableHeaderColumn dataField='factionname' 
                     width='30%' 
                     headerAlign='center'
                     dataAlign='center'
                     isKey={ true } 
                     searchable={ true }
                     dataFormat={factionNameFormatter}>Faction</TableHeaderColumn>
          <TableHeaderColumn dataField='alltime'
                     searchable={ false }
                     headerAlign='center'
                     dataAlign='center'
                     dataSort={true}>All Time XP</TableHeaderColumn>
          <TableHeaderColumn dataField='recent'
                     searchable={ false }
                     headerAlign='center'
                     dataAlign='center'
                     dataSort={true}>Recent XP</TableHeaderColumn>
      </BootstrapTable>
      );
  }

  render() {
    return (
      <div className="leaderBoardSwitch">
        <Switch onClick={this.toggleSwitch} on={this.state.toggle}/>
        {this.state.toggle === false
        ? this.renderByPlayerLeaderBoard()
        : this.renderByFactionLeaderBoard()}
      </div>
    );
  }
}