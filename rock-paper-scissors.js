
// create a variable to hold the computer's choice
// create a function that chooses randomly from rock, paper, and scissors for computer
// assign random choice to computer choice variable

// create a variable to hold the player's choice
// create a function to prompt the player for their choice
// assign the player's choice to their variable

// create a function that plays a game of RPS which picks a choice for the user and computer
// create a variable for points
// compare the computer and player choice to determine who wins.
// console display both the player's and computer"s choice
// console display the results of the game
// set points variable according to results and return

// create a function to play five games of rps
// initialize a variable for the total points
// create a sub-function for loop to increment a variable over the five games
// add up the points as the games complete

// create a function to compare the total points to determine if it was a win, loss, or tie for the player



// function getPlayerChoice() {
//     let choice = prompt("Enter your answer");
//     choice = choice.toLowerCase();
//     return choice;
// }

// Create an event listener to tell when the player has pressed any of the rps buttons
// when button is pressed take that button and store it in the player selection variable


// function getPlayerChoice() {

// }

let playerSelection;
let playerScore = 0;
let computerScore = 0;
let score = [];

let points = document.querySelector('.points');
let player = document.querySelector('.player');
let comp = document.querySelector('.comp');
let outcome = document.querySelector('.outcome');

const buttons = document.querySelectorAll('.choice');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.classList[1];
        playGame();
    });
});

function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random() * choice.length)];
}

function playGame() {
    // const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();

    // console.log(playerSelection);
    // console.log(computerSelection);

    player.textContent = `Player chose ${playerSelection}`;
    comp.textContent = `Computer chose ${computerSelection}`;

    if (playerSelection == "rock" && computerSelection == "rock") {
        // console.log("Tie. Rock equals rock.");
        outcome.textContent = "Tie. Rock equals rock.";
        score = [0, 0];
        // return score;
    }else if (playerSelection == "rock" && computerSelection == "scissors") {
        // console.log("You win! Rock beats scissors.");
        outcome.textContent = "You win! Rock beats scissors.";
        score = [1, 0];
        // return score;
    }else if (playerSelection == "rock" && computerSelection == "paper") {
        // console.log("You lose. Paper beats rock.");
        outcome.textContent = "You lose. Paper beats rock.";
        score = [0, 1];
        // return score;
    }else if (playerSelection == "paper" && computerSelection == "rock") {
        // console.log("You Win! Paper beats rock.");
        outcome.textContent = "You Win! Paper beats rock.";
        score = [1, 0];
        // return score;
    }else if (playerSelection == "paper" && computerSelection == "scissors") {
        // console.log("You lose. Scissors beats paper.");
        outcome.textContent = "You lose. Scissors beats paper.";
        score = [0, 1];
        // return score;
    }else if (playerSelection == "paper" && computerSelection == "paper") {
        // console.log("Tie. Paper equals paper.");
        outcome.textContent = "Tie. Paper equals paper.";
        score = [0, 0];
        // return score;
    }else if (playerSelection == "scissors" && computerSelection == "rock") {
        // console.log("You lose. Rock beats scissors.");
        outcome.textContent = "You lose. Rock beats scissors.";
        score = [0, 1];
        // return score;
    }else if (playerSelection == "scissors" && computerSelection == "scissors") {
        // console.log("Tie. Scissors equals scissors.");
        outcome.textContent = "Tie. Scissors equals scissors.";
        score = [0, 0];
        // return score;
    }else if (playerSelection == "scissors" && computerSelection == "paper") {
        // console.log("You win! Scissors beats paper.");
        outcome.textContent = "You win! Scissors beats paper.";
        score = [1, 0];
        // return score;
    }

    caluculation(score);

    // }else {
    //     console.log("Please enter rock, paper, or scissors.")};
    //     score = [0, 0];
    //     return score;
}

function caluculation (score) {
    playerScore = playerScore + score[0];
    computerScore = computerScore + score[1];

    points.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
}

// function game() {
    
//     let result = 0;

//     function playRound() {
//         for (let i = 0; i < 5; i++) {
//             result = +result + playGame();
//         }
//     }

//     function winnerLooser() {
//     if (result > 0) {
//         console.log(`WINNER`)
//     }else if (result < 0) {
//         console.log(`LOSER`)
//     }else {
//         console.log(`TIE`)
//     }
//     }

//     playRound();
//     winnerLooser();
// }

// game();
