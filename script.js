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


function game() {
    let playerScore = 0;
    let computerScore = 0;
    let i = 0;
    for (i; i < 5; i++) {
        let x = gameRound();
        if (x == "CPU"){
            computerScore++;
        }
        else if (x == "Player") {
            playerScore++;
        }
    }

    if (playerScore > computerScore) {
        alert("Congratulations! You win!");
        return 0;
    }
    else if (computerScore > playerScore) {
        alert("Better luck next time :(");
        return 0;
    }
    else {
        alert("Who likes a tie? Try again!");
        return 0;
    }

function gameRound() {
    let x = prompt("Rock, Paper or Scissors?");
    let y = computerPlay();
    x = x.toLowerCase();
    let roundWin = "";
    while ( x != "rock" && x !="paper" && x !="scissors") {  //input check
       x = prompt("That's not the game! Please input Rock, Paper or Scissors");
}
    switch (x) {
        case "rock":
            if (y == "paper") {
                console.log("You lose! Paper beats Rock!");
                roundWin = "CPU";
                return roundWin;
            }
            else if (y == "scissors") {
                console.log("You win! Rock beats Scissors!");
                roundWin = "Player";
                return roundWin;
            }
            else {
                console.log("Oh boy, a tie!");
                roundWin = "Not a winner";
                return roundWin;
            }
            break;
        case "paper":
            if (y == "scissors") {
                console.log("You lose! Paper beats Rock!");
                roundWin = "CPU";
                return roundWin;
            }
            else if (y == "rock") {
                console.log("You win! Rock beats Scissors!");
                roundWin = "Player";
                return roundWin;
            }
            else {
                console.log("Oh boy, a tie!");
                roundWin = "Not a winner";
                return roundWin;
            }
            break;
        case "scissors":
            if (y == "rock") {
                console.log("You lose! Paper beats Rock!");
                roundWin = "CPU";
                return roundWin;
            }
            else if (y == "paper") {
                console.log("You win! Rock beats Scissors!");
                roundWin = "Player";
                return roundWin;
            }
            else {
                console.log("Oh boy, a tie!");
                roundWin = "Not a winner";
                return roundWin;
            }
            
            }
        }
    }

game();
