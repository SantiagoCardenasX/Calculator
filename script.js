// Selecting the display element
const display = document.getElementById('display');
let currentInput = ""; // To keep track of the current input

// Function to update the display
function updateDisplay(value) {
  display.textContent = value;
}

// Functions for calculator buttons
function appendNumber(number) {
  if (currentInput === "0") currentInput = "";
  currentInput += number;
  updateDisplay(currentInput);
}

function appendOperator(operator) {
  currentInput += " " + operator + " ";
  updateDisplay(currentInput);
}

function clearDisplay() {
  currentInput = "0";
  updateDisplay(currentInput);
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1) || "0";
  updateDisplay(currentInput);
}

function calculate() {
  try {
    currentInput = eval(currentInput.replace(/\s+/g, ''));
    updateDisplay(currentInput);
  } catch (error) {
    updateDisplay("Error");
  }
}

// Add keyboard support
document.addEventListener("keydown", (event) => {
  const key = event.key;

  // Handle numbers
  if (!isNaN(key)) {
    appendNumber(key);
  }

  // Handle operators
  if (key === "+" || key === "-" || key === "*" || key === "/") {
    appendOperator(key);
  }

  // Handle decimal point
  if (key === ".") {
    appendNumber(".");
  }

  // Handle Enter for equals
  if (key === "Enter") {
    calculate();
  }

  // Handle Escape for clear
  if (key === "Escape") {
    clearDisplay();
  }

  // Handle Backspace for delete
  if (key === "Backspace") {
    deleteLast();
  }

  // Prevent default action for Enter key to avoid form submission
  if (key === "Enter") {
    event.preventDefault();
  }
});
