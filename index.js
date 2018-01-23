/*jslint devel: true */
"use strict";

//on click push val into array
//use loop to asign eventhandler to all buttons
let memArray = [];
//let displayStr = memArray.join();


let btnClick = (e) => {
	let justClicked = e.target.innerText;

console.log(memArray.length);
	
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
		memArray.push(justClicked);
		enableOps();
	// 	if (memArray.includes(".") === false){
	// 	document.querySelector('#decimal').addEventListener('click', btnClick);
	// }
	}
	console.log("memArray=",memArray.join(''));
	document.getElementById("display").innerHTML = memArray.join('');
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




//display values in array as string in display

//operate() with =

//clear() array and display



//problems  clicks just off buttons in margin result in crap