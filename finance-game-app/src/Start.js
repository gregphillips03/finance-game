import React from 'react';
import MenuSelect from "./MenuSelect"; 

const Start = ({ start }) =>{
	return(  
		<MenuSelect
    	active={true}
    	onChoice={start}
    	items={["Start Game"]}
    	renderItem={ item => <span>{item}</span> }
    	>
  		</MenuSelect>);

}
export default Start; 