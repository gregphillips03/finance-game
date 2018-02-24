import React, { Component } from "react";
import "./BoardSwitch.css";
var PropTypes = require('prop-types'); 

//stateless functional component being passed props, not having to worry about the 'this' keyword
//note the use of the arrow function for ES6
function SelectedBoard(props){
	var boards = ['Players', 'Factions', 'Questions']; 
	return(
			<ul className='boards'>
				{boards.map((board) => {
					return(
						<li 
						onClick = {props.onSelect.bind(null, board)}
						style={board === props.selectedBoard ? {color: '#d0021b'}: null}
						key={board}>
							<h1>{board}</h1>
						</li>
					)
				}
				)}
			</ul>		
	)
}

SelectedBoard.propTypes = {
	selectedBoard: PropTypes.string.isRequired, 
	onSelect: PropTypes.func.isRequired,
}

export default class BoardSwitch extends Component {
	constructor(props){
		super(props);
		this.state ={
			selectedBoard: 'Players'
		};
		this.updateBoard = this.updateBoard.bind(this); 
	}

	updateBoard(board){
		this.setState(function(){
			return {
				selectedBoard: board
			}
		});
	}

	render(){
		var boards = ['Players', 'Factions']; 
		return(
			<div>
				<SelectedBoard selectedBoard={this.state.selectedBoard} onSelect={this.updateBoard} />
			</div>
		)
	}
}
