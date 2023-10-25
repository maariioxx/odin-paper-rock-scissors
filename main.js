let rock = "piedra";
let paper = "papel";
let scissors = "tijeras";

function getComputerChoice() {
    let computerChoice;
    selection = Math.floor(Math.random() * 3);
    if (selection === 0){
        computerChoice = rock;
        return computerChoice;
    } else if (selection === 1){
        computerChoice = paper;
        return computerChoice;
    } else {
        computerChoice = scissors;
        return computerChoice;
    }
}

