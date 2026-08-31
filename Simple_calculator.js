const num1 = Number(prompt("Enter first number:"));
const operator = prompt("Enter operator (+, -, *, /):");
const num2 = Number(prompt("Enter second number:"));

let result;

switch (operator) {
  case "+":
    result = num1 + num2;
    break;

  case "-":
    result = num1 - num2;
    break;

  case "*":
    result = num1 * num2;
    break;

  case "/":
    result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
    break;

  default:
    result = "Invalid operator";
}

console.log("Result:", result);
