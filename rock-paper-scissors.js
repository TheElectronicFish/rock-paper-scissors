
// create a variable to hold the computer's choice
// create a function that chooses randomly from rock, paper, and scissors.


function getPlayerChoice() {
    let choice = prompt("Enter your answer");
    choice = choice.toLowerCase();
    return choice;
}

function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random() * choice.length)];
}

console.log(getPlayerChoice());
console.log(getComputerChoice());