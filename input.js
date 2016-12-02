'use strict';
// alert('the input file works. shame on you');


// Put code here to execute when the user
//   presses the 'Run Program' button
function execCode() {
  //alert("hey");
  //checkInput(temp);
  clr();
  var temp = getTemp();
  if (isNaN(temp)) {
    println('Please Enter a Number for Temp');
  } else {
    temp = (9 / 5 * temp + 32);
    println('Thats " +temp +" degrees F');
  }
}

function execCode2() {
  //alert("hey");
  //checkInput(temp);
  clr();
  var temp = getTemp();
  if (isNaN(temp)) {
    println('Please Enter a Number for Temp');
  } else {
    temp = (5 / 9 * (temp - 32));
    temp = newRound(temp,1);
    println('Thats ' + temp + ' degrees C');
  }
}

// User defined round function
// Pass in the number and the number of
//    decimal places to retain
function newRound(num, places) {
  tens = Math.pow(10, places);
  var temp = num * tens;
  temp = Math.round(temp);
  temp = temp / tens;
  return temp;
}



function getTemp() {
  var input = getElement('temp');
  return input.value;
}

function getInput(id) {
  var input = getElement(id);
  return input.value;
}

// Print to the 'output' HTML element and
//    add the line end
function println(x) {
  print(x + '\n');
}

// Print to the 'output' HTML element
function print(x) {
  var out = getElement('output');
  output.value = output.value + x;
}

// Return the HTML element named 'id'
function getElement(id) {
  return document.getElementById(id);
}



// Clear the 'output' text area
function clr() {
  //alert("hey");
  var out = getElement('output');
  out.value = ' ';
}
