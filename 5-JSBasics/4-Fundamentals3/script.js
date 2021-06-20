/* Practice 1 */
function add7(number) {
  return number + 7;
}

function form1Handler(inputID, resultID) {
  let input = parseFloat(document.getElementById(inputID).value);

  document.getElementById(resultID).textContent = input
    ? add7(input)
    : 'Your input may not be a number.';
}

/* Practice 2 */
function multiply(a, b) {
  return a * b;
}

function form2Handler(inputIDs, resultID) {
  let [x, y] = inputIDs.map((ID) => parseInputToFloat(ID));

  document.getElementById(resultID).textContent = multiply(x, y);
}

function parseInputToFloat(inputID, defaultValue = 0) {
  let value = parseFloat(document.getElementById(inputID).value);

  // TODO: Throw error if input is not a number?
  return value || defaultValue;
}

/* Practice 3 */
function capitalize(string) {
  let capital = string[0].toUpperCase();
  let rest = string.slice(1, string.length).toLowerCase();
  return capital + rest;
}

function form3Handler(inputID, resultID) {
  let input = document.getElementById(inputID).value;

  document.getElementById(resultID).textContent = capitalize(input);
}

/* Practice 4 */
function lastLetter(string) {
  return string[string.length - 1];
}

function form4Handler(inputID, resultID) {
  let input = document.getElementById(inputID).value;

  document.getElementById(resultID).textContent = lastLetter(input);
}
