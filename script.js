let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let previousInput = '';

function appendNumber(number) {
  currentInput += number;
  display.value = currentInput;
}

function appendOperator(op) {
  if (currentInput === '') return; // Prevent appending operator without number
  if (previousInput !== '') {
    calculate();
  }
  operator = op;
  previousInput = currentInput;
  currentInput = '';
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operator = '';
  display.value = '';
}

function calculate() {
  if (currentInput === '' || previousInput === '') return;
  let result;
  switch (operator) {
    case '+':
      result = parseFloat(previousInput) + parseFloat(currentInput);
      break;
    case '-':
      result = parseFloat(previousInput) - parseFloat(currentInput);
      break;
    case '*':
      result = parseFloat(previousInput) * parseFloat(currentInput);
      break;
    case '/':
      if (currentInput == '0') {
        alert("Cannot divide by zero");
        clearDisplay();
        return;
      }
      result = parseFloat(previousInput) / parseFloat(currentInput);
      break;
    default:
      return;
  }
  display.value = result;
  currentInput = result.toString();
  previousInput = '';
  operator = '';
}
