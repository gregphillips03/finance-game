import Resist from "../images/resistance-logo.png";
import Empire from "../images/empire-logo.png";
import Jedi from "../images/jedi-logo.png";
import Rogue from "../images/rogue-logo.png";

const getFactionImage = s => {
	var img;
	if(s=="Jedi Order"){
		img =  Jedi; 
	}
	if(s=="Galactic Empire"){
		img =  Empire; 
	}
	if(s=="Rebel Alliance"){
		img =  Resist; 
	}
	if(s=="Rogue"){
		img =  Rogue; 
	}

	return img; 
}

export default getFactionImage