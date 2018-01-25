/*jslint devel: true */
"use strict";

//on click push val into array
//use loop to assign eventhandler to all buttons
let memArray = [];
//let displayStr = memArray.join();


let btnClick = (e) => {
	let justClicked = e.target.innerText;

	if (memArray.includes(".") === false){
		document.querySelector('#decimal').addEventListener('click', btnClick);
	}
	
	if(justClicked.match(/[.]/)){
		document.querySelector('#decimal').removeEventListener('click', btnClick);
		memArray.push(justClicked);
	}
	else if (justClicked.match(/[-\+\*\/]/)) { 
		disableOps();
		memArray.push(justClicked);
	}
	else {
		//enableOps();
		console.log("last");
		memArray.push(justClicked);
		enableOps();
	// 	if (memArray.includes(".") === false){
	// 	document.querySelector('#decimal').addEventListener('click', btnClick);
	// }
	}
	console.log("memArray=",memArray.join(''));
	document.getElementById("displayCalc").innerHTML = memArray.join('');
};


const keypad = document.getElementsByClassName('digit');

for(var i = 0; i < keypad.length; i++) {
	keypad[i].addEventListener("click", btnClick);
}


const operators = document.getElementsByClassName('operator');

let disableOps = () => {
	for(var i = 0; i < operators.length; i++) {
		operators[i].removeEventListener("click", btnClick);
		
 //operators.forEach(function)
}
console.log("disabled");
};


let enableOps = () => {
	for(var i = 0; i < operators.length; i++) {
		operators[i].addEventListener("click", btnClick);
 //operators.forEach(function)
}
console.log("enabled");
};

let operate = () => {// jshint ignore:line
  document.getElementById("displayAns").innerHTML = eval(memArray.join(''));// jshint ignore:line
};

let clearDisplay = () => {// jshint ignore:line
  memArray = [];
  document.getElementById("displayCalc").innerHTML = 0;
  document.getElementById("displayAns").innerHTML =0;
};

//display values in array as string in display

//operate() with =

//clear() array and display



//problems  clicks just off buttons in margin result in crap