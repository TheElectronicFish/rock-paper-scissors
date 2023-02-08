
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

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

console.log(playerSelection);
console.log(computerSelection);

function playGame() {
    if (playerSelection == "rock" && computerSelection == "rock") {
        console.log("Tie. Rock equals rock.");
    }else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("You win! Rock beats scissors.");
    }else if (playerSelection == "rock" && computerSelection == "paper") {
        console.log("You lose. Paper beats rock.");
    }else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("You Win! Paper beats rock.");
    }else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log("You lose. Scissors beats paper.");
    }else if (playerSelection == "paper" && computerSelection == "paper") {
        console.log("Tie. Paper equals paper.");
    }else if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log("You lose. Rock beats scissors.");
    }else if (playerSelection == "scissors" && computerSelection == "scissors") {
        console.log("Tie. Scissors equals scissors.");
    }else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("You win! Scissors beats paper.");
    }else {
        console.log("Please enter rock, paper, or scissors.")};

}

playGame();
