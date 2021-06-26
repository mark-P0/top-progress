const palindromes = function (string) {
  let toRemove = '.,/#!$%^&*;:{}=-_`~() ';
  let [clean, reversed] = ['', ''];

  string = string.toLowerCase();
  for (char of string) {
    if (toRemove.includes(char)) continue;
    clean += char;
    reversed = char + reversed;
  }

  return clean === reversed;
};
// console.log(palindromes('racecar'));
// console.log(palindromes('A car, a man, a maraca.'));

const palindromesFunctional = function (string) {
  string = string
    .replace(
      /* https://stackoverflow.com/questions/4328500/how-can-i-strip-all-punctuation-from-a-string-in-javascript-using-regex#comment113461246_4328722 */
      // /[^\p{L}\s]/gmu /* Leaves spaces */,
      /[^\p{L}]/gmu /* Strips spaces as well */,
      ''
    )
    .toLowerCase();
  let reversed = Array.from(string).reverse().join('');
  return string == reversed;
};
// console.log(palindromesFunctional('abcd'));
// console.log(palindromesFunctional('racecar'));
// console.log(palindromesFunctional('A car, a man, a maraca.'));

module.exports = palindromes;
