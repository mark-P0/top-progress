const fibonacci = function (num) {
  num = parseInt(num) || -1;

  if (num === 0) return 0;
  if (num < 0) return 'OOPS';

  let series = [1, 1];
  if (num === 1) return series[0];

  for (___ of Array(num - 2)) {
    series = [series[1], series.reduce((sum, item) => (sum += item))];
  }

  return series[1];
};
// console.log(fibonacci(6));
// console.log(fibonacci(0));
// console.log(fibonacci(1));
// console.log(fibonacci(2));
// console.log(fibonacci(3));
// console.log(fibonacci(4));

module.exports = fibonacci;
