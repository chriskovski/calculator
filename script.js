const numbers = document.getElementsByClassName('.number');
const output = document.getElementById('#output');
const operations = document.querySelectorAll('[data-operation]');
const equals = document.querySelector('[data-equal]');
const clear = document.querySelector('[data-all-clear]');
const num1 = document.querySelector('[data-first-operation]');
const num2 = document.querySelector('[data-second-operation]');
const operator = document.querySelector('[data-operator]');
const result = document.querySelector('[data-result]');

let displayValue = [];
let displayValueOne = 0;
let displayValueTwo = 0;
let opChooseClicked = 10;
let equal = 0;


//Number-Buttons pushed create an array, which will (after combined into one number) populate the calculator display
function storeValue(e){
  if(opChooseClicked == 10 && equal == 0){
    displayValue.push(e.value);
    displayValueOne = +displayValue.join("");
    num1.innerHTML = displayValueOne;
  }else{
    displayValue.push(e.value);
    displayValueTwo = +displayValue.join("");
    num2.innerHTML = displayValueTwo;
  }
}

//The first number will be stored as displayValueOne, the display Value array gets reseted and after storing the second number, it gets passed into the displayValueTwo
function opChoose(ele){
  op = ele.value;
  displayValue = [];
  opChooseClicked = 22;
  if(equal > 0){
    displayValueOne = equal;
    num1.innerHTML = displayValueOne;
    num2.innerHTML = "";
    operator.innerHTML = "";
    displayValueTwo = 0;
  }
  //this switch is just to add the operator visually to the display and to decide later at operate() which operator to combine to the equasion
  switch(op){
    case "plus":
      operator.innerHTML = "+";
      break;
    case "minus":
      operator.innerHTML = "-";
      break;
    case "multiply":
      operator.innerHTML = "*";
      break;
    case "divide":
      operator.innerHTML = "÷";
      break;
  }
}

function operate(displayValueOne, displayValueTwo){

  if(operator.innerHTML == "+"){
    equal = parseInt(displayValueOne + displayValueTwo);
    result.innerHTML = ('= ' + equal);
  }else if(operator.innerHTML == "-"){
    equal = parseInt(displayValueOne - displayValueTwo);
    result.innerHTML = ('= ' + equal);
  }else if(operator.innerHTML == "*"){
    equal = parseInt(displayValueOne * displayValueTwo);
    result.innerHTML = ('= ' + equal);
  }else if(operator.innerHTML == "÷"){
    equal = parseFloat(displayValueOne / displayValueTwo);
    result.innerHTML = ('= ' + equal.toFixed(1));
  }
}

function clearAll(){
  num1.innerHTML = "";
  num2.innerHTML = "";
  operator.innerHTML = "";
  result.innerHTML = "";
  displayValueOne = 0;
  displayValueTwo = 0;
  displayValue = [];
  opChooseClicked = 10;
  equal = 0;
}
