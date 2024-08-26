console.log("Hello World"); 

// getsComputerChoice
// Declare function gestComputerChoice
// Get a float point number from function Math.random from (0 -1), then the number multiplied by 3 and round it the nearest lower number
// Store the number in variable "computerChoice".
// Conditional statement to assign rock-paper-scissors values to "computerChoice" ​​depending on different numbers 
function getsComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        console.log("rock");
        return "rock";
    } else if (computerChoice === 1) {
        console.log("paper");
        return "paper";
    } else {
        console.log("scissor");
        return "scissor";
    }
}

// Function of the human choice, it will take the user choice and return it
// Prompt the user a value between rock, paper or scissor
// Store the value in humanChoice variable
// Conditional statement to assign and return the choice of the user

function getHumanChoice() {
    let humanChoice = prompt("What is your choice: rock, paper or scissor", "rock");
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === "rock") {
        console.log(humanChoice); 
        return "rock";
    } else if (humanChoice === "paper") {
        console.log(humanChoice);
        return "paper";
    } else if (humanChoice === "scissor") {
        console.log(humanChoice);
        return "scissor";
    } else {
        console.log("error");
    }

}


let humanScore = 0; 
let computerScore = 0; 