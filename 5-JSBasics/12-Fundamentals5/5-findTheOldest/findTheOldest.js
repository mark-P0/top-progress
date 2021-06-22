const findTheOldest = function (people) {
  /* person = {name: string, yearOfBirth: number, yearOfDeath?: number} */
  let currentYear = new Date().getFullYear();
  return people.reduce((oldest, person) => {
    return (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth >
      (person.yearOfDeath || currentYear) - person.yearOfBirth
      ? oldest
      : person;
  });
};
// console.log(new Date().getFullYear());

module.exports = findTheOldest;
