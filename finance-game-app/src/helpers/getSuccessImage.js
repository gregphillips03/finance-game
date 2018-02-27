import YodaVH from "../images/yoda-very-happy.png";
import YodaGO from "../images/yoda-good.png"; 
import YodaHA from "../images/yoda-happy.png";
import YodaFP from "../images/yoda-face-palm.png"; 
import YodaPI from "../images/yoda-pissed.png"; 

import VaderVH from "../images/vader-very-happy.png"; 
import VaderHA from "../images/vader-happy.png"; 
import VaderNH from "../images/vader-not-happy.png"; 
import VaderMA from "../images/vader-mad.png"; 
import VaderPI from "../images/vader-pissed.png"; 

const getSuccessImage = n => {
	var faction = localStorage.getItem("currentUserFaction"); 
	var img;
	if(faction==='Empire'){
		if(n > 89){
			img = VaderVH; 
		} else if (n > 79){
			img = VaderHA; 
		} else if (n > 69){
			img = VaderNH; 
		} else if (n > 49){
			img = VaderMA; 
		} else {
			img = VaderPI; 
		}		
	} else {
		if(n > 89){
			img = YodaVH; 
		} else if (n > 79){
			img = YodaGO; 
		} else if (n > 69){
			img = YodaHA; 
		} else if (n > 49){
			img = YodaFP; 
		} else {
			img = YodaPI; 
		}		
	}

	return img; 
}

export default getSuccessImage; 