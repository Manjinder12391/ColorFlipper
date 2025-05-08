//const body = document.getElementsByTagName("body")[0];

function setColor(color){
	document.body.style.backgroundColor = color;

}

function randomColor(){
	//const red = Math.round(Math.random()* 255);
	//const green = Math.round(Math.random()* 255);
	//const blue= Math.round(Math.random()* 255);

	//const colors = \'rgb(${red}, ${green}, ${blue})'\;
	//body.style.backgroundColor = Color;
   const colors = ['red','green','blue','yellow','purple'];
   const randomIndex = Math.floor(Math.random() * colors.length);
   document.body.style.backgroundColor = colors[randomIndex];
}
//randomColor();//