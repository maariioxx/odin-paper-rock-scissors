let rock = "piedra";
let paper = "papel";
let scissors = "tijeras";

let computerSelection;
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    console.log(computerChoice);
    if (computerChoice === 0){
        computerSelection = rock;
        return computerSelection;
    } else if (computerChoice === 1){
        computerSelection = paper;
        return computerSelection;
    } else {
        computerSelection = scissors;
        return computerSelection;
    }
}


let playerSelection = "";
while (playerSelection != rock && playerSelection != paper && playerSelection != scissors){
    playerChoice = prompt("Elige piedra, papel o tijeras para jugar contra la máquina").toLowerCase();
    if (playerChoice === "piedra"){
        playerSelection = rock;
        break
    } else if (playerChoice === "papel"){
        playerSelection = paper;
        break
    } else if (playerChoice === "tijeras"){
        playerSelection = scissors;
        break
    }
}

function playRound (playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return console.log(`Un empate! ambos habéis elegido ${playerSelection}`)
    } else if(playerSelection === rock && computerSelection === scissors || playerSelection === paper && /* Winning cases of the player */
        computerSelection === rock || playerSelection === scissors && computerSelection === paper) {
            return console.log(`Has ganado! ${playerSelection} gana a ${computerSelection}`)
        }
    else {
        return console.log(`Has perdido! ${computerSelection} gana a ${playerSelection}` )
    }

    
}
function game () {
    computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection))
}

game()

    
    
