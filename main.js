const userInput = document.querySelector(".user-input");
const result = document.querySelector(".result");
const allClear = document.querySelector(".all-clear");
const backspace = document.querySelector(".backspace");
const dotBtn = document.querySelector(".dot-btn");
const equalBtn = document.querySelector(".equal-btn");
const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");
const operatorsArr = [...operators].map((el) => el.textContent);

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

function display(btn) {
  lastInput = userInput.textContent[userInput.textContent.length - 1];
  if (
    userInput.textContent === "0" &&
    !operatorsArr.includes(btn.textContent) &&
    btn !== dotBtn
  ) {
    userInput.textContent = "";
    userInput.textContent += btn.textContent;
  } else if (
    operatorsArr.includes(btn.textContent) &&
    operatorsArr.includes(lastInput)
  ) {
    userInput.textContent = userInput.textContent.slice(0, -1);
    userInput.textContent += btn.textContent;
  } else {
    userInput.textContent += btn.textContent;
  }
}

digits.forEach((digit) => {
  digit.addEventListener("click", (e) => display(e.target));
});
operators.forEach((op) => {
  op.addEventListener("click", (e) => display(e.target));
});
dotBtn.addEventListener("click", (e) => display(e.target));

allClear.addEventListener("click", () => {
  userInput.textContent = "0";
});
backspace.addEventListener("click", () => {
  if (userInput.textContent.length === 1) {
    userInput.textContent = "0";
  } else {
    userInput.textContent = userInput.textContent.slice(0, -1);
  }
});

equalBtn.addEventListener("click", () => {});
