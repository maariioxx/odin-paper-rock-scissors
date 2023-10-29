let rock = "piedra";
let paper = "papel";
let scissors = "tijeras";
let playerCount = 0;
let computerCount = 0;
let tieCount = 0;

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
    resultsDisplay.textContent = `Empate! Ambos habéis escogido ${playerSelection}!`
    return tieCount++;
  } else if (
            (playerSelection === rock && computerSelection === scissors) ||  /* Winning cases of the player */ 
            (playerSelection === paper && computerSelection === rock) ||
            (playerSelection === scissors && computerSelection === paper)
  ) {
    resultsDisplay.textContent = (`Has ganado! ${playerSelection} gana a ${computerSelection}`);
    return playerCount++;
  } else {
    resultsDisplay.textContent = (`Has perdido! ${playerSelection} pierde contra ${computerSelection}`);
    return computerCount++;
  }
}

const currentResults = (playerCount, computerCount, tieCount) =>{
  if(playerCount < 3 && computerCount < 3){
    currentResultsDiv.textContent = `Vas ${playerCount} a ${computerCount} con ${tieCount} empate/s. Ánimo!`
  }
}

const getWinner = (playerCount, computerCount) => {
  
  if(playerCount === 3){
    resultsDisplay.innerHTML = "";
    currentResultsDiv.textContent = `Has ganado ${playerCount} a ${computerCount}! Enhorabuena!`;
    resetGame();
  } else if (computerCount === 3){
    resultsDisplay.innerHTML = "";
    currentResultsDiv.textContent = `Has perdido ${computerCount} a ${playerCount}! Inténtalo de nuevo!`;
    resetGame();
  }
}

const resetGame = () => {
  const resetButton = document.createElement("button");
  resetButton.classList.add("resultsDiv");
  resetButton.id = "resetButton";
  resultsDiv.appendChild(resetButton);
  resetButton.textContent = "Reiniciar juego";
  resetButton.addEventListener('click', () => {
    playerCount = 0;
    computerCount = 0;
    tieCount = 0;
    currentResultsDiv.innerHTML = "";
    resetButton.remove();
  })
}

const btn = document.querySelectorAll("button");
const rockBtn = document.querySelector("#rock")
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

btn.forEach(button => button.addEventListener('click', () => {
  playerSelection = button.value;
  computerSelection = getComputerChoice();
  
  console.log(playerSelection);
  playRound(playerSelection, computerSelection);
  currentResults(playerCount, computerCount, tieCount);
  getWinner(playerCount, computerCount);
}));

const resultsDiv = document.createElement("div");
resultsDiv.classList.add("resultsDiv");
const resultsDisplay = document.createElement("div")
resultsDiv.appendChild(resultsDisplay);

const currentResultsDiv = document.createElement("div");
resultsDiv.appendChild(currentResultsDiv);
document.body.appendChild(resultsDiv)

