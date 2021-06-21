const ftoc = function (fahrenheit) {
  return roundToDecimalPlaces((fahrenheit - 32) * (5 / 9), 1);
};

const ctof = function (celsius) {
  return roundToDecimalPlaces(celsius * (9 / 5) + 32, 1);
};

function roundToDecimalPlaces(number, places) {
  return Math.round(number * 10 ** places) / 10 ** places;
}

module.exports = {
  ftoc,
  ctof,
};
