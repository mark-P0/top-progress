/* Rock-Paper-Scissors */

import { capitalize, choice, intDiv } from './common.js';

const choices = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
  return choice(choices);
}
// console.log(computerPlay());

function playerPlay(message) {
  let playerPrompt = prompt(message);

  /* Repeat prompt until valid response is given */
  while (!choices.includes(capitalize(playerPrompt || ''))) {
    playerPrompt = prompt(message);
  }

  return capitalize(playerPrompt);
}
// console.log(playerPlay());

function playRound(playerSelection, computerSelection) {
  /** Will play a single round **/

  /* Transform inputs to indices */
  let [playerIdx, computerIdx] = [
    playerSelection,
    computerSelection,
  ].map((sel) => choices.indexOf(sel));

  /* Compare inputs */
  if (playerIdx == computerIdx)
    return [`It's a tie! You both chose ${playerSelection}`, 0];
  else if (playerIdx + 1 == computerIdx)
    return [`You Lose! ${computerSelection} beats ${playerSelection}`, -1];
  else return [`You win! ${playerSelection} beats ${computerSelection}`, 1];
}
// console.log(playRound('rOcK', computerPlay()));
// console.log(playRound(computerPlay(), computerPlay()));
// console.log(playRound(playerPlay(), computerPlay()));

function game(
  rounds = 5,
  defaultMessage = "Rock, Paper, Scissors: What's your choice?"
) {
  let playerScore = 0;
  let promptMessage = defaultMessage,
    playerIncr;

  let results = Array.from({ length: rounds }).map((___, idx) => {
    /* Will use default message at the start of the game */
    let displayMessage =
      idx === 0
        ? promptMessage
        : `${promptMessage}. Round ${idx + 1}: Rock, Paper, Scissors?`;

    let result = playRound(playerPlay(displayMessage), computerPlay());

    let [message, playerIncr] = result;
    promptMessage = message;
    playerScore += playerIncr;

    return result;
  });

  playerScore = Math.max(playerScore, 0);
  let [whoWon, resultMessage] = decideWinner(rounds, playerScore);

  return {
    roundResults: results,
    scores: [playerScore, rounds - playerScore],
    winner: whoWon,
    result: resultMessage,
  };
}
let gameInstance =
  // game()
  game(6);
console.log(gameInstance, gameInstance.result);

function decideWinner(rounds, playerScore) {
  let halfway = intDiv(rounds, 2);

  //   rounds % 2 === 0
  //     ? // 'Even rounds'
  //       playerScore === halfway
  //       ? 'Tie'
  //       : playerScore > halfway
  //       ? 'Player'
  //       : 'Computer'
  //     : // 'Odd rounds'
  //     playerScore > halfway
  //     ? 'Player'
  //     : 'Computer',

  return playerScore === halfway && rounds % 2 == 0
    ? ['Tie', "It's a tie!"]
    : playerScore > halfway
    ? ['Player', 'Congratulations! You won!']
    : ['Computer', 'You lost! Better luck next time!'];
}
// [
//   [5, 2],
//   [5, 3],
//   [5, 4],
//   [6, 2],
//   [6, 3],
//   [6, 4],
// ].forEach(([a, b]) => {
//   console.log(a, b, decideWinner(a, b));
// });
