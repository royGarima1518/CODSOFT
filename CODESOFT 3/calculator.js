let display = document.getElementById("display");
let operator = "";
let firstOperand = "";
let secondOperand = "";
let result = "";

function appendNumber(num) {
  display.value += num;
}

function setOperator(op) {
  operator = op;
  firstOperand = display.value;
  display.value = "";
}

function clearDisplay() {
  display.value = "";
  operator = "";
  firstOperand = "";
  secondOperand = "";
  result = "";
}

function calculateResult() {
  secondOperand = display.value;
  switch (operator) {
    case "+":
      result = parseFloat(firstOperand) + parseFloat(secondOperand);
      break;
    case "-":
      result = parseFloat(firstOperand) - parseFloat(secondOperand);
      break;
    case "*":
      result = parseFloat(firstOperand) * parseFloat(secondOperand);
      break;
    case "/":
      result = parseFloat(firstOperand) / parseFloat(secondOperand);
      break;
  }
  display.value = result;
}

function changeBackgroundColor() {
  var colors = [
    "#FF5733",
    "#FFD700",
    "#4CAF50",
    "#3498DB",
    "#9B59B6",
    "#E74C3C",
    "#2C3E50",
  ];
  var randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}

document
  .getElementById("changeColorButton")
  .addEventListener("click", changeBackgroundColor);

function revealMessage() {
  var message = document.getElementById("message");
  message.style.display = "block";
}
