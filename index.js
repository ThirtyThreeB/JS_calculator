/*jslint devel: true */
"use strict";

let memArray = [];


let btnClick = (e) => {
	console.log('test');
	let justClicked = e.target.innerText;

	if (memArray.includes(".") === false){
		document.querySelector('#decimal').addEventListener('click', btnClick);
	}
	if (memArray.includes("=") === false){
		document.querySelector('#equals').addEventListener('click', operate);
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
		memArray.push(justClicked);
		enableOps();
	}
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
	document.querySelector('#equals').removeEventListener('click', operate);
	document.getElementById("displayCalc").innerHTML = 0;
	document.getElementById("displayAns").innerHTML =0;
};


let backSpace = () => {// jshint ignore:line
	memArray.pop();
	document.getElementById("displayCalc").innerHTML = memArray.join('');
};

let el = document.getElementsById("buttons");

el.addEventListener('keydown', btnClick);