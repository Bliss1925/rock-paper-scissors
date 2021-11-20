function getRandomInt() {
    return Math.floor(Math.random() * 3 + 1) //gets random int
}

function computerPlay() {      //generates a computer option
    let x = getRandomInt()
    switch (x) {
        case 1:
            x = "rock";
            break;
        case 2:
            x = "scissors";
            break;
        case 3:
            x = "paper";
            break;
    }
    return x;    
}

let playerSelection = prompt("Rock, Paper or Scissors?");

playerSelection = playerSelection.toLowerCase();

while (playerSelection != "rock" && playerSelection !="paper" && playerSelection !="scissors") {  //input check
    playerSelection = prompt("That's not the game! Please input Rock, Paper or Scissors");
}
debugger;
const computerSelection = computerPlay();
game(playerSelection, computerSelection);

function game(x, y) {
    switch (x) {
        case "rock":
            if (y == "paper") {
                console.log("You lose! Paper beats Rock!");
            }
            else if (y == "scissors") {
                console.log("You win! Rock beats Scissors!");
            }
            else {
                console.log("Oh boy, a tie!");
            }
            break;
        case "paper":
            if (y == "scissors") {
                console.log("You lose! Paper beats Rock!");
            }
            else if (y == "rock") {
                console.log("You win! Rock beats Scissors!");
            }
            else {
                console.log("Oh boy, a tie!");
            }
            break;
        case "scissors":
            if (y == "rock") {
                console.log("You lose! Paper beats Rock!");
            }
            else if (y == "paper") {
                console.log("You win! Rock beats Scissors!");
            }
            else {
                console.log("Oh boy, a tie!");
            }
            break;
    }
}