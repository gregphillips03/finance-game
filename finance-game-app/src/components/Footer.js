import React from 'react'; 
import Grid from 'react-bootstrap/lib/Grid'; 

export default class Footer extends React.Component{
	render(){
		return(
			<Grid>
				<hr />
				<footer>
					<p align='center'>Copyright 2018</p>
				</footer>
			</Grid>
			);
	}
}