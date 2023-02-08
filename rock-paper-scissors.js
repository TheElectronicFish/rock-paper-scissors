
// create a variable to hold the computer's choice
// create a function that chooses randomly from rock, paper, and scissors.

function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random() * choice.length)];
}

console.log(getComputerChoice());