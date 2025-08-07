const userInput = document.querySelector(".user-input");
const result = document.querySelector(".result");
const allClear = document.querySelector(".all-clear");
const backspace = document.querySelector(".backspace");
const dotBtn = document.querySelector(".dot-btn");
const equalBtn = document.querySelector(".equal-btn");
const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");
const operatorsArr = ["×", "÷", "%", "+", "−"];

function operate(operator, num1, num2) {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "−") {
    return num1 - num2;
  } else if (operator === "×") {
    return num1 * num2;
  } else if (operator === "÷") {
    return num1 / num2;
  } else if (operator === "%") {
    return num1 % num2;
  }
}

function display(btn) {
  let input = userInput.textContent.split(" ").join("");
  let lastInput = input[input.length - 1];
  if (
    userInput.textContent === "0" &&
    !operatorsArr.includes(btn.textContent.trim()) &&
    btn.textContent !== "."
  ) {
    userInput.textContent = "";
    userInput.textContent += btn.textContent;
  } else if (
    operatorsArr.includes(btn.textContent.trim()) &&
    operatorsArr.includes(lastInput)
  ) {
    userInput.textContent = userInput.textContent.slice(0, -3);
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
  result.textContent = "";
});

backspace.addEventListener("click", () => {
  let lastInput = userInput.textContent[userInput.textContent.length - 1];
  if (userInput.textContent.length === 1) {
    userInput.textContent = "0";
    result.textContent = "";
  } else {
    userInput.textContent = userInput.textContent.slice(0, -1);
  }

  if (lastInput === " ") {
    userInput.textContent = userInput.textContent.slice(0, -2);
  }
});

equalBtn.addEventListener("click", () => {
  let equation = userInput.textContent.split(" ");
  let num1, num2, op, opIndex, equationResult;

  for (let i = 0; i < operatorsArr.length; i++) {
    while (equation.includes(operatorsArr[i])) {
      opIndex = equation.indexOf(operatorsArr[i]);
      num1 = Number(equation[opIndex - 1]);
      op = equation[opIndex];
      num2 = Number(equation[opIndex + 1]);
      equationResult = operate(op, num1, num2);
      equation.splice(opIndex - 1, 3, equationResult);
    }
  }

  if (equationResult === Infinity) {
    result.textContent = ":)";
  } else if (!Number.isInteger(equationResult)) {
    result.textContent = equationResult.toFixed(2);
  } else {
    result.textContent = equationResult;
  }
});
