const sumAll = function (lowerLimit, upperLimit) {
  for (element of [lowerLimit, upperLimit]) {
    if (!(typeof element === 'number') || element < 0) return 'ERROR';
  }

  if (lowerLimit > upperLimit)
    [lowerLimit, upperLimit] = [upperLimit, lowerLimit];

  return Array.from(
    { length: upperLimit - lowerLimit + 1 },
    (___, idx) => idx + lowerLimit
  ).reduce((running, current) => running + current);
};

// console.log(sumAll(1, 4));
// console.log(sumAll(1, '4'));

module.exports = sumAll;
