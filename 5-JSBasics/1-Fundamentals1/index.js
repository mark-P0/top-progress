// Try the following exercises:
//   Add 2 numbers together! (just type console.log(23 + 97) into your html file)
//   Add a sequence of 6 different numbers together.
//   Print the solution to the following equation: (4 + 6 + 9) / 77
//       Answer should be approximately 0.24675
//   Let’s use variables!
//       Type the following at the top of the script tag: let a = 10
//       console.log(a) should print 10
//       Try the following: 9 * a
//       and this: let b = 7 * a (returns undefined) and then console.log(b)
//   You should be getting the hang of this by now… try this sequence:
//       Declare a constant variable max with the value 57
//       Set another variable actual to max - 13
//       Set another variable percentage to actual / max
//       If you type percentage in the console and press enter you should see a value like 0.7719
//   Take a few minutes to keep playing around with various things in your script tag. Eventually, we will learn how to actually make those numbers and things show up on the webpage, but all of this logic will remain the same, so make sure you’re comfortable with it before moving on.

console.log('Hello, world!');

// Exercise 1
let result; // Will be reused to hold a result! ;)
result = 23 + 97;
console.log(result);

document.getElementById('exercise1').appendChild(
  // Immediately-invoked function (IIFE)
  // (() => {
  (function () {
    let newDiv = document.createElement('div');
    newDiv.innerHTML = `[JS] Result: ${result}`;
    return newDiv;
  })()
);

// Exercise 2
// Will be limited from 0 to 10
const generateRandomInteger = (min = 0, max = 10) =>
  Math.round((max - min) * Math.random());
const diffNumbers = Array.from({ length: 6 }, () => generateRandomInteger());

document.getElementById('exercise2').appendChild(
  (function () {
    let newDiv = document.createElement('div');
    newDiv.innerHTML = `
      <div>
        [JS] 6 different numbers (Random): [${diffNumbers.join(', ')}]
      </div>
      <div>
        [JS] Sum: ${diffNumbers.reduce((a, b) => a + b)}
      </div>
    `;
    return newDiv;
  })()
);

// Exercise 3
result = (4 + 6 + 9) / 77;

const decimalRounder = (number, places) =>
  Math.round(number * 10 ** places) / 10 ** places;

document.getElementById('exercise3').appendChild(
  (function () {
    let newDiv = document.createElement('div');
    newDiv.innerHTML = `
      <div>[JS] Result: ${result}</div>
      <div>[JS] Approximate: ${decimalRounder(result, 5)}</div>
    `;
    return newDiv;
  })()
);

// Exercise 4
let a = 10;
console.log(a);

console.log(9 * a);

let b = 7 * a;
console.log(b);

document.getElementById('exercise4').appendChild(
  (function () {
    let newDiv = document.createElement('div');
    newDiv.innerHTML = `
      <div>[JS] a = ${a}</div>
      <div>[JS] 9 * a = ${9 * a}</div>
      <div>[JS] b = ${b}</div>
    `;
    return newDiv;
  })()
);

// Exercise 5
let max = 57;
let actual = max - 13;
let percentage = actual / max;
console.log(percentage);

document.getElementById('exercise5').appendChild(
  (function () {
    let newDiv = document.createElement('div');
    newDiv.innerHTML = `
      <div>[JS] max = ${max}</div>
      <div>[JS] actual = ${max - 13}</div>
      <div>[JS] percentage = ${actual / max}</div>
      <div>[JS] ${percentage}</div>
    `;
    return newDiv;
  })()
);
