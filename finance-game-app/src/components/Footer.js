import React from 'react'; 
import Grid from 'react-bootstrap/lib/Grid';

export default class Footer extends React.Component{
	render(){
		return(
			<Grid>
				<hr />
				<footer>
					<p align='center'> <i class="fa fa-institution"></i> The University of Mary Washington | College of Business</p>
				</footer>
			</Grid>
			);
	}
}