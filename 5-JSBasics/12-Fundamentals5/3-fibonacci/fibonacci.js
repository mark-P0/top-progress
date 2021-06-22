const fibonacci = function (num) {
  let series = [1, 1];

  for (___ of Array(num - 2)) {
    series = [series[1], series.reduce((sum, item) => (sum += item))];
  }

  return series[1];
};
// console.log(fibonacci(6));

module.exports = fibonacci;
