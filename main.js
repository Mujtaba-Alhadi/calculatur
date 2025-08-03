// make functions add, subtract, multiply, divide, mod
// make operate function
// make buttons for each digit and operator
// make a dummy display
// add a "clear" button
// make functions to show the input on the display
// store the first and second numbers input by the user and then operate() on them when the user presses the =

const userInput = document.querySelector(".user-input");
const result = document.querySelector(".result");
const allClear = document.querySelector(".all-clear");
const backspace = document.querySelector(".backspace");
const modBtn = document.querySelector(".mod-btn");
const divideBtn = document.querySelector(".divide-btn");
const oneBtn = document.querySelector(".one-btn");
const twoBtn = document.querySelector(".two-btn");
const threeBtn = document.querySelector(".three-btn");
const fourBtn = document.querySelector(".four-btn");
const fiveBtn = document.querySelector(".five-btn");
const sixBtn = document.querySelector(".six-btn");
const sevenBtn = document.querySelector(".seven-btn");
const eightBtn = document.querySelector(".eight-btn");
const nineBtn = document.querySelector(".nine-btn");
const zeroBtn = document.querySelector(".zero-btn");
const dotBtn = document.querySelector(".dot-btn");
const equalBtn = document.querySelector(".equal-btn");

function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}
function mod(num1, num2) {
  return num1 % num2;
}

function operate(operator, num1, num2) {
  if (operator === "+") {
    return add(num1, num2);
  } else if (operator === "-") {
    return subtract(num1, num2);
  } else if (operator === "*") {
    return multiply(num1, num2);
  } else if (operator === "/") {
    return divide(num1, num2);
  } else if (operator === "%") {
    return mod(num1, num2);
  }
}
