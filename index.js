/*jslint devel: true */
"use strict";

//on click push val into array
//use loop to asign eventhandler to all buttons
let memArray = [];
//let displayStr = memArray.join();
let isDecimal = false;

let btnClick = (e) => {
	let justClicked = e.target.innerText;
  //console.log(justClicked);
  if (justClicked.match(/[.0-9-\+\*\/]/g) && isDecimal === false){
  	if(justClicked === "."){
  		isDecimal = true;	
  		memArray.push(justClicked, "a");
  	}
  	else
  		memArray.push(justClicked, "b");
  }
  else if (justClicked.match(/[0-9-\+\*\/]/g)){
  	memArray.push(justClicked, "c");
  }
    //memArray.push(justClicked);

    console.log("memArray=",memArray.join(''), "isDecimal=", isDecimal);
    document.getElementById("display").innerHTML = memArray.join('');
  
  //else { console.log(isNaN(justClicked));
//}
};

const keypad = document.querySelector('.buttons');
keypad.addEventListener('click', btnClick);

//display values in array as string in display

//operate() with =

//clear() array and display



//problems  clicks just off buttons in margin result in crap