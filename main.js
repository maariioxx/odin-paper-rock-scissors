let rock = "piedra";
let paper = "papel";
let scissors = "tijeras";

function getComputerChoice() {
    let computerSelecion;
    computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0){
        computerSelecion = rock;
        return computerSelecion;
    } else if (computerChoice === 1){
        computerSelecion = paper;
        return computerSelecion;
    } else {
        computerSelecion = scissors;
        return computerSelecion;
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
console.log(playerChoice);
console.log(playerSelection);
    
    
