let numbers = [];

function getArray() {
  const input = document.getElementById("input").value;
  numbers = input
    .split(",")
    .map((num) => parseFloat(num.trim()))
    .filter((num) => !isNaN(num));
}

function displayResult(text) {
  document.getElementById("result").innerText = text; 
}

function even_op() {
  getArray();
  displayResult("Even numbers: " + numbers.filter((num) => num % 2 === 0).join(", "));
}

function odd_op() {
  getArray();
  displayResult("Odd numbers: " + numbers.filter((num) => num % 2 !== 0).join(", "));
}

function max_op() {
  getArray();
  displayResult("Maximum: " + Math.max(...numbers));
}

function min_op() {
  getArray();
  displayResult("Minimum: " + Math.min(...numbers));
}

function sum_op() {
  getArray();
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  displayResult("Sum: " + sum);
}

function average_op() {
  getArray();
  if (numbers.length > 0) {
    const average = numbers.reduce((acc, num) => acc + num, 0) / numbers.length;
    displayResult("Average: " + average.toFixed(2));
  }
}
function sort_op() {
  getArray();
  if (numbers.length > 0) {
    numbers.sort((a, b) => a - b); // Sorting in ascending order
    displayResult("Sorted Numbers: " + numbers.join(", "));
  }
}
function reverse_op() {
  getArray();
  if (numbers.length > 0) {
    numbers.reverse(); // Reversing the array order
    displayResult("Reversed Numbers: " + numbers.join(", "));
  }
}

