import level1 from "../images/levels/level1.png";
import level2 from "../images/levels/level2.png";
import level3 from "../images/levels/level3.png";
import level4 from "../images/levels/level4.png";
import level5 from "../images/levels/level5.png";
import level6 from "../images/levels/level6.png";
import level7 from "../images/levels/level7.png";
import level8 from "../images/levels/level8.png";
import level9 from "../images/levels/level9.png";
import level10 from "../images/levels/level10.png";
import level11 from "../images/levels/level11.png";
import level12 from "../images/levels/level12.png";
import level13 from "../images/levels/level13.png";
import level14 from "../images/levels/level14.png";
import level15 from "../images/levels/level15.png";
import level16 from "../images/levels/level16.png";

const getLevelImage = n => {
	var img;
	if(n==1){
		img =  level1; 
	}
	if(n==2){
		img =  level2; 
	}
	if(n==3){
		img =  level3; 
	}
	if(n==4){
		img =  level4; 
	}
	if(n==5){
		img =  level5; 
	}
	if(n==6){
		img =  level6; 
	}
	if(n==7){
		img =  level7; 
	}
	if(n==8){
		img =  level8; 
	}
	if(n==9){
		img =  level9; 
	}
	if(n==10){
		img =  level10; 
	}
	if(n==11){
		img =  level11; 
	}
	if(n==12){
		img =  level12; 
	}
	if(n==13){
		img =  level13; 
	}
	if(n==14){
		img =  level14; 
	}
	if(n==15){
		img =  level15; 
	}
	if(n==16){
		img =  level16; 
	}

	return img; 
}

export default getLevelImage; 