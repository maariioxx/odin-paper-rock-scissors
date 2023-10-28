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

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    resultsDisplay.textContent = (`Un empate! ambos habéis elegido ${playerSelection}`);
  } else if (
            (playerSelection === rock && computerSelection === scissors) ||  /* Winning cases of the player */ 
            (playerSelection === paper && computerSelection === rock) ||
            (playerSelection === scissors && computerSelection === paper)
  ) {
    resultsDisplay.textContent = (`Has ganado! ${playerSelection} gana a ${computerSelection}`);
    return playerCount++;
  } else {
    resultsDisplay.textContent = (`Has perdido!${playerSelection} pierde contra ${computerSelection}`);
    return computerCount++;
  }
}

const btn = document.querySelectorAll("button");
const rockBtn = document.querySelector("#rock")
const paperBtn = document.querySelector("#paper")
const scissorsBtn = document.querySelector("#scissors")

rockBtn.addEventListener("click", () => {
  playRound(rock, getComputerChoice());
});

scissorsBtn.addEventListener("click", () => {
  playRound(scissors, getComputerChoice());
});

paperBtn.addEventListener("click", () => {
  playRound(paper, getComputerChoice());
});

const resultsDisplay = document.createElement("div")
document.body.appendChild(resultsDisplay);



