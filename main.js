let rock = "piedra";
let paper = "papel";
let scissors = "tijeras";

function getComputerChoice() {
    let computerSelection;
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

function getPlayerChoice (){
    let playerSelection = "";
    if (playerSelection != rock && playerSelection != paper && playerSelection != scissors){
        let playerChoice = prompt("Elige piedra, papel o tijeras para jugar contra la máquina").toLowerCase();
        if (playerChoice === "piedra"){
            return playerSelection = rock;  
        } else if (playerChoice === "papel"){
            return playerSelection = paper;
        } else if (playerChoice === "tijeras"){
            return playerSelection = scissors;
        }
    }
}
function playRound (playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        console.log(`Un empate! ambos habéis elegido ${playerSelection}`)
    } else if(playerSelection === rock && computerSelection === scissors || playerSelection === paper && /* Winning cases of the player */
        computerSelection === rock || playerSelection === scissors && computerSelection === paper) {
            return console.log(`Has ganado! ${playerSelection} gana a ${computerSelection}`)
            
        }
    else {
        return console.log(`Has perdido! ${computerSelection} gana a ${playerSelection}` )
    }

    
}
function game () {
    let playerCount = 0;
    let computerCount = 0;
    while (playerCount < 3 && computerCount < 3){
        console.log(playerSelection = getPlayerChoice());
        computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection))
    }
    
}

game()

    
    
