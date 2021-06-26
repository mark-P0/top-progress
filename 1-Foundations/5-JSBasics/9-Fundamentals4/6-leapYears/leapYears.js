const leapYears = function (year) {
  if (year % 4 == 0) {
    if (year % 100 == 0) {
      // if (year % 400 == 0) return true;
      // return false;
      return year % 400 == 0;
    }
    return true;
  }
  return false;
};

for (year of [1984, 2004, 1800, 1900, 1600, 2000, 1985]) {
  console.log(leapYears(year));
}

module.exports = leapYears;
