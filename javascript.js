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
