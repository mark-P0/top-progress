function print(anything) {
  if (
    (typeof require !== 'undefined' && require.main === module) ||
    require.main.filename.includes('quokka')
  )
    console.log(anything);
}

const add = function (a, b) {
  return a + b;
};
print(add(2, 3));

const subtract = function (a, b) {
  return a - b;
};

const sum = function (sequence) {
  return sequence.reduce((running, element) => (running += element), 0);
};
print(sum([2, 3, 4, 5, 6]));
print(sum([1]));
print(sum([0]));
print(sum([]));
print(sum([-1, -2, -3]));

/* `arguments` approach */
const sumArguments = function () {
  return Array.from(arguments).reduce((run, arg) => {
    if (typeof arg === 'object') return (run += sumArguments(...arg));
    return (run += parseFloat(arg) || 0);
  }, 0);
};
print(sumArguments(1, 2, 3, [4, 5], 'haha'));

/* Spread parameter approach */
const sumSpread = function (...args) {
  return args.reduce((run, arg) => {
    if (typeof arg === 'object') return (run += sumSpread(...arg));
    return (run += parseFloat(arg) || 0);
  }, 0);
};
print(sumSpread(6, 2, 3, [4, 5], 'haha'));
print(sumSpread());
print(sumSpread(0));
print(sumSpread(1));
print(sumSpread(NaN));
print(sumSpread(undefined));

const multiply = function (sequence) {
  if (!sequence.length) return 0;
  return sequence.reduce((running, element) => (running *= element), 1);
};
print(multiply([2, 3, 4, 5, 6]));
print(multiply([1]));
print(multiply([0]));
print(multiply([]));
print(multiply([-1, -2, -3]));

const power = function (base, exponent) {
  return base ** exponent;
};

const factorial = function (num) {
  // return Array.from({ length: num }, (___, idx) => idx)

  // return Array(num)
  //   .keys()
  //   .forEach((x, i) => {
  //     print(x, i);
  //   });

  if (num < 0) return;

  num = Math.max(num, 1);

  return Array.from(Array(num).keys()).reduce((run, idx) => run * (idx + 1), 1);
};
print(factorial(10));
print(factorial(3));
print(factorial(2));
print(factorial(1));
print(factorial(0));
print(factorial(-1));

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
