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

function getsHumanChoice(choice) {
    let humanChoice = choice.toLowerCase();
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
            div.textContent = `You win!, ${humanChoice} beats ${computerChoice}`;
            return 1; 
        } else if (computerChoice === "rock") {
            console.log("Draw!");
            div.textContent = "Draw!";
        } else {
            console.log("You lose!, Paper beats Rock");
            div.textContent = `You lose!, ${computerChoice} beats ${humanChoice}`;
            return 0;
        }
    }
    if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("You win!, Paper beats Rock");
            div.textContent = `You win!, ${humanChoice} beats ${computerChoice}`;
            return 1; 
        } else if (computerChoice === "paper") {
            console.log("Draw!");
            div.textContent = "Draw!";
        } else {
            console.log("You lose!, Scissor beats Paper");
            div.textContent = `You lose!, ${computerChoice} beats ${humanChoice}`;
            return 0;
        }
    }
    if (humanChoice === "scissor") {
        if (computerChoice === "paper") {
            console.log("You win!, Scissor beats Paper");
            div.textContent = `You win!, ${humanChoice} beats ${computerChoice}`;
            return 1; 
        } else if (computerChoice === "scissor") {
            console.log("!Draw");
            div.textContent = "Draw!";
        } else {
            console.log("You lose!, Rock beats Scissor");
            div.textContent = `You lose!, ${computerChoice} beats ${humanChoice}`;
            return 0;
        }
    }
}

function playGame(round, choice) {
    while(humanScore < 5 && computerScore < 5) {
        const humanSelection = getsHumanChoice(choice);
        const computerSelection = getsComputerChoice();
        console.log(`Round Number: ${round + 1}`);
        let winner = playRound(humanSelection, computerSelection);
        if (winner === 1) {
            humanScore += 1; 
            console.log(`Human score: ${humanScore}`);
            console.log(`Computer score: ${computerScore}`);
            div1.textContent = `Human score: ${humanScore} | Computer score: ${computerScore}`;
            break; 
        } else if (winner === 0){
            computerScore += 1; 
            console.log(`Human score: ${humanScore}`);
            console.log(`Computer score: ${computerScore}`);
            div1.textContent = `Human score: ${humanScore} | Computer score: ${computerScore}`;
            break; 
        }
        

    }
    if (humanScore === 5 || computerScore === 5) {
        if (humanScore > computerScore) {
            console.log("End Game, You are the winner");
            header3.textContent = "End Game, You are the winner";
        } else {
            console.log("End Game, Computer is the winner");
            header3.textContent = "End Game, Computer is the winner";
        }
    }

}
let humanScore = 0; 
let computerScore = 0; 
let round = 0; 
// Revisiting Rock Paper Scissor lesson


const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playGame(round, button.id);
        round++;
    })
});
const body = document.querySelector("body");

const div = document.createElement("div");
div.style.cssText = "padding: 30px 0px"
div.textContent = "";

const div1 = document.createElement("div");
div1.textContent = "";

const header3 = document.createElement("h3");
header3.textContent = "";


body.appendChild(div);
body.appendChild(div1);
body.appendChild(header3);
