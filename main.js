let rock = "piedra";
let paper = "papel";
let scissors = "tijeras";
let playerCount;
let computerCount;

function getComputerChoice() {
  let computerSelection;
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    computerSelection = rock;
    return computerSelection;
  } else if (computerChoice === 1) {
    computerSelection = paper;
    return computerSelection;
  } else {
    computerSelection = scissors;
    return computerSelection;
  }
}

function getPlayerChoice() {
  let playerSelection = "";
  while (
    playerSelection != rock &&
    playerSelection != paper &&
    playerSelection != scissors
  ) {
    let playerChoice = prompt(
      "Elige piedra, papel o tijeras para jugar contra la máquina"
    ).toLowerCase();
    if (playerChoice === "piedra") {
      return (playerSelection = rock);
    } else if (playerChoice === "papel") {
      return (playerSelection = paper);
    } else if (playerChoice === "tijeras") {
      return (playerSelection = scissors);
    }
  }
}
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log(`Un empate! ambos habéis elegido ${playerSelection}`);
  } else if (
    (playerSelection === rock && computerSelection === scissors) ||
    (playerSelection === paper /* Winning cases of the player */ &&
      computerSelection === rock) ||
    (playerSelection === scissors && computerSelection === paper)
  ) {
    console.log(`Has ganado! ${playerSelection} gana a ${computerSelection}`);
    return playerCount++;
  } else {
    console.log(
      `Has perdido!${playerSelection} pierde contra ${computerSelection}`
    );
    return computerCount++;
  }
}
function game() {
  playerCount = 0;
  computerCount = 0;
  while (playerCount < 3 && computerCount < 3) {
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    console.log(`Vas ${playerCount} a ${computerCount}`);
    if (playerCount === 3) {
      console.log(`Has ganado ${playerCount} a ${computerCount}! Enhorabuena`);
    } else if (computerCount === 3) {
      console.log(`Has perdido ${playerCount} a ${computerCount}.`);
    }
  }
}

game();
