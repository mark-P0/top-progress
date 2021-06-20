export function choice(sequence) {
  /* Returns a random choice from the the given sequence */
  let choiceIndex = Math.floor(Math.random() * sequence.length);
  return sequence[choiceIndex];
}

export function capitalize(string) {
  let capital = string[0].toUpperCase();
  let rest = string.slice(1, string.length).toLowerCase();
  return capital + rest;
}

export function intDiv(numerator, denominator) {
  /*  Integer division. Can be implemented several ways!
      https://stackoverflow.com/questions/4228356/how-to-perform-an-integer-division-and-separately-get-the-remainder-in-javascr
   */
  return Math.trunc(numerator / denominator);
}
