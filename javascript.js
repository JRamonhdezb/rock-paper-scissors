console.log("Hello World"); 

// getsComputerChoice
// Declare function gestComputerChoice
// Get a float point number from function Math.random from (0 -1), then the number multiplied by 3 and round it the nearest lower number
// Store the number in variable "computerChoice".
// Conditional statement to assign rock-paper-scissors values to "computerChoice" ​​depending on different numbers 
function getsComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        console.log("Computer: rock");
        return "rock";
    } else if (computerChoice === 1) {
        console.log("Computer: paper");
        return "paper";
    } else {
        console.log("Computer: scissor");
        return "scissor";
    }
}

// Function of the human choice, it will take the user choice and return it
// Prompt the user a value between rock, paper or scissor
// Store the value in humanChoice variable
// Conditional statement to assign and return the choice of the user

function getsHumanChoice() {
    let humanChoice = prompt("What is your choice: rock, paper or scissor", "rock");
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === "rock") {
        console.log("Player: rock"); 
        return "rock";
    } else if (humanChoice === "paper") {
        console.log("Player: paper");
        return "paper";
    } else if (humanChoice === "scissor") {
        console.log("Player: scissor");
        return "scissor";
    } else {
        console.log("error");
    }

}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        if (computerChoice === "scissor") {
            console.log("You win!, Rock beats Scissor");
            return 1; 
        } else if (computerChoice === "rock") {
            console.log("Draw!");
        } else {
            console.log("You lose!, Paper beats Rock");
            return 0;
        }
    }
    if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("You win!, Paper beats Rock");
            return 1; 
        } else if (computerChoice === "paper") {
            console.log("Draw!");
        } else {
            console.log("You lose!, Scissor beats Paper");
            return 0;
        }
    }
    if (humanChoice === "scissor") {
        if (computerChoice === "paper") {
            console.log("You win!, Scissor beats Paper");
            return 1; 
        } else if (computerChoice === "scissor") {
            console.log("!Draw");
        } else {
            console.log("You lose!, Rock beats Scissor");
            return 0;
        }
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getsHumanChoice();
        const computerSelection = getsComputerChoice();
        console.log(`Round Number: ${i + 1}`);
        let winner = playRound(humanSelection, computerSelection);
        if (winner === 1) {
            humanScore += 1; 
            console.log(`Human score: ${humanScore}`);
            console.log(`Computer score: ${computerScore}`);
        } else if (winner === 0){
            computerScore += 1; 
            console.log(`Human score: ${humanScore}`);
            console.log(`Computer score: ${computerScore}`);
        }
    }
    if (humanScore > computerScore) {
        console.log("End Game, You are the winner");
    } else {
        console.log("End Game, Computer is the winner");
    }
}

let humanScore = 0; 
let computerScore = 0; 

playGame();