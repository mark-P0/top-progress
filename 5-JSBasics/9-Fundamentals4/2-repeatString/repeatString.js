const repeatString = function (string, count) {
  // let test = Array.from({ length: count }).fill(string);
  // console.log(test.reduce((running, current) => running + current));

  if (count < 0) return 'ERROR';

  return Array.from({ length: count })
    .fill(string)
    .reduce((running, current) => running + current, '');
};

module.exports = repeatString;
